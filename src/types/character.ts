export default interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    origin: {
        name: string
    },
    location: {
        name: string
    },
    image: string,
    episode: string[]
}
