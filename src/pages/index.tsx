import filterCharacter from "@/actions/filterCharacter";
import getPage from "@/actions/getPage";
import CharacterCard from "@/components/CharacterCard/CharacterCard";
import CharacterSkeleton from "@/components/CharactersSkeleton/CharacterSkeleton";
import Paginator from "@/components/Paginator/Paginator";
import SearchFilter from "@/components/SearchFilter/SearchFilter";
import { CharactersContainer, PageContainer } from "@/styles/charactersList.styles";
import Character from "@/types/character";
import { useState } from "react";
import { useQuery } from "react-query";

export default function CharactersList() {

  const [page, setPage] = useState(1);
  const [filteredList, setFilteredList] = useState<Character[]>([]);
  const [pagesNumber, setPagesNumber] = useState<number>(1);

  const { isLoading, refetch } = useQuery({
    queryKey: ['charactersList', page],
    queryFn: () => getPage(page),
    onSuccess: (data) => {
      setFilteredList(data.results);
      setPagesNumber(data.info.pages);
    },
  })

  if (isLoading) {
    return (
      <PageContainer >
        <div className="topbar-container">
          <SearchFilter setData={setFilteredList} action={filterCharacter} refetch={refetch} />
          <Paginator pagesNumber={pagesNumber} page={page} setPage={setPage} />
        </div>
        <CharactersContainer >
          {
            Array.from(Array(20).keys()).map((x,index)=>{
              return < CharacterSkeleton key={index}/>
            })
          }
        </CharactersContainer>
      </PageContainer>
    )
  }

  return (

    <PageContainer >


      <div className="topbar-container">
        <SearchFilter setData={setFilteredList} action={filterCharacter} refetch={refetch} />
        <Paginator pagesNumber={pagesNumber} page={page} setPage={setPage} />
      </div>

      <CharactersContainer >
        {
          filteredList?.length === 0 ? <p className="notfound">No characters found...</p>
            :
            filteredList?.map((character: Character) => {
              return (
                <CharacterCard
                  data-cy="card"
                  key={character.id}
                  character={character}
                />)
            })
        }
      </CharactersContainer>
    </PageContainer>

  )
}
