import useDebounce from "@/hooks/useDebounce";
import Character from "@/types/character";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SearchBar } from "./styles";
import { FiSearch } from 'react-icons/fi'

interface ISearchFilter {
    setData: Dispatch<SetStateAction<Character[]>>,
    action: Function, 
    refetch: Function
}
export default function SearchFilter({setData,action, refetch}: ISearchFilter) {

    const [value, setValue] = useState<string>('');
    const debouncedValue = useDebounce<string>(value, 300);

    const updateList = async (debouncedValue: string) => {
        const updatedList = await action(debouncedValue);
        setData(updatedList);
    }

    useEffect(()=>{
        if (debouncedValue.length > 0) {
            updateList(debouncedValue);
        }else{
            refetch();
        }
    },[debouncedValue])

    return (
        <SearchBar >
          <input data-cy="input" value={value} className="input" type="text" placeholder="Search" onChange={event => {setValue(event.target.value)}} />
          <div className="icon-container">
            <FiSearch className="icon"/>
          </div>
        </SearchBar>
    );
}