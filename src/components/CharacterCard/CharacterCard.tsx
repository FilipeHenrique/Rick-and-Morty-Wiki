import Link from "next/link";
import { CharacterDetails, ChracterContainer, Container } from "./styles";
import Star from "../Star/Star";
import Character from "@/types/character";

export default function CharacterCard({ character }: {character: Character}) {

    return (
        <Container>
            <Link data-cy="link" href={`/character/${character.id}`} style={{ color: '#edecee', textDecoration: 'none' }}>
                <ChracterContainer>
                    <img className="character" src={character.image} />
                    <CharacterDetails>
                        <p className="name">{character.name}</p>
                        <div className="details-container">
                            {
                                character.status === "Alive" ? <span className="alive" /> : <span className="dead" />
                            }
                            <p className="details">{character.species} - {character.gender}</p>
                        </div>
                    </CharacterDetails>
                </ChracterContainer >
            </Link>

            <Star character={character}/>
        </Container>

    );
}