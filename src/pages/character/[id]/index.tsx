import getEpisodes from "@/actions/getEpisodes";
import getCharacter from "@/actions/getCharacter";
import Error404 from "@/components/Error404/Error404";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import { CharacterDetailsContainer } from "../../../styles/characterPageStyles";
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs'
import Star from "@/components/Star/Star";
import Episode from "@/types/epixode";

export default function CharacterInfo() {

    const router = useRouter()
    const { id } = router.query ?? 0;

    const [episodes, setEpisodes] = useState<Episode[]>([]);

    const { data, isLoading } = useQuery({
        queryKey: ['characterInfo', id],
        queryFn: () => getCharacter(Number(id)),
        onSuccess: async (data) => {
            if (data?.episode.length > 0) {
                const eps = await getEpisodes(data?.episode);
                setEpisodes(eps);
            }
        },
        keepPreviousData: true,
    })


    if (isLoading) {
        return <></>
    }

    if (data?.error) {
        return (
            <Error404 />
        )
    }

    return (
        <CharacterDetailsContainer>
            <div className="character-profile">
                <img src={data?.image} />
                <div className="character-details">
                    <h1 className="name">
                        {data?.name}
                        <Star character={data}/>
                    </h1>
                    <p style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <span className="label">Status: </span>
                            {data?.status}
                            {
                                data?.status === "Alive" ? <span style={{display: 'flex'}} className="alive" />
                                    : <span className="dead" />
                            }
                    </p>

                    <p><span className="label">Specie: </span> {data?.species}</p>
                    <p>
                        <span className="label">Gender: </span>
                        {data?.gender}
                        <span className="gender-icon">
                            {
                                data?.gender === "Male" ? <BsGenderMale />
                                : data?.gender === "Female" ? <BsGenderFemale />
                                : <></>
                            }
                        </span>
                    </p>
                    <p><span className="label">Origin: </span> {data?.origin.name}</p>
                    <p><span className="label">Location: </span> {data?.location.name}</p>
                </div>
            </div>
            <details open>
                <summary>Episodes Appeared</summary>
                {
                    episodes?.map((episode: Episode, index) => {
                        return (
                            <div key={index}>
                                <div className="episode-container">
                                    <div className="ep-title_container">
                                        <p className="ep-id"> {episode.id} </p>
                                        <p className="ep-name"> {episode.name} </p>
                                    </div>
                                    <div className="ep-details">
                                        <p>code: {episode.episode} </p>
                                        <p>aired: {episode.air_date}</p>
                                    </div>

                                </div>
                                {
                                    index < episodes.length - 1 ? <hr className="hr" /> : ''
                                }
                            </div>
                        )
                    })
                }
            </details>

        </CharacterDetailsContainer>
    );
}