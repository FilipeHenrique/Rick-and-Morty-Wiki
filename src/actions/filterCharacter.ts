async function filterCharacter(name: string) {
        const request = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
        const response = await request.json();
        if (response.results){
                return response.results;
        }
        return [];
}

export default filterCharacter;