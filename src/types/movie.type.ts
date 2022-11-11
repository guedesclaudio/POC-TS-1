type MovieEntity = {
    id: number,
    title: string,
    platform: string,
    genre: string,
    status: boolean,
    note: null | string,
    abstr: null | string
};

type Movie = Omit <MovieEntity, "id">

type Watch = {
    note: string,
    abstr: string,
    status: boolean
}

type Platform = {
    id: number,
    name: string
}

export {MovieEntity, Movie, Watch, Platform};