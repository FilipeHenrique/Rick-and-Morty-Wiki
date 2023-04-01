async function getPage(page: number) {
    const request = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`); 
    const response = await request.json();
    return response;
}

export default getPage;