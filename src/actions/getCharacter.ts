async function getCharacter(id: number) {
    if (id){
        const request = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const response = await request.json();
        return response;
    }
}

export default getCharacter;