async function getEpisodes(episodes: string[]) {
    let idsArray = episodes.map((episode)=>{
        return episode.split('/')[5]
    })
    const request = await fetch(` https://rickandmortyapi.com/api/episode/${idsArray}`);
    const response = await request.json();
    if (response.length > 1) {
        return [...response];
    }
    else {
        return [response];
    }
}

export default getEpisodes;