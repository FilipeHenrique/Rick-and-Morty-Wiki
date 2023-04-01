import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useState } from "react";
import Character from '@/types/character';

export default function Star({ character }: {character: Character}) {
    
    let favCharacters = JSON.parse(localStorage.getItem('favCharacters') || '[]');

    const isFavourited = favCharacters?.some((char: Character) => char.id === character?.id);

    const [isFav, setIsFav] = useState(
        isFavourited
    );

    const toggleFav = () => {
        if (isFav) {
            favCharacters = [...JSON.parse(localStorage.getItem('favCharacters') || '[]'), character]
            let characters = favCharacters.filter((char: Character) => { if (char.id !== character.id) return char })
            localStorage.setItem('favCharacters', JSON.stringify(characters))
            setIsFav(false);
        } else {
            favCharacters = [...JSON.parse(localStorage.getItem('favCharacters') || '[]'), character]
            localStorage.setItem('favCharacters', JSON.stringify(favCharacters))
            setIsFav(true);
        }
    }
        return (
            <>
                {
                    isFav ? <AiFillStar data-cy="fillStar" className="fav-active" onClick={() => toggleFav()} />
                        : <AiOutlineStar data-cy="outlineStar" className="fav-inactive" onClick={() => toggleFav()} />
                }
            </>
        );
}