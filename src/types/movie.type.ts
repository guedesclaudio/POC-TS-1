type Movie = {
    title: string,
    platform: string,
    genre: string,
    status: boolean,
    note: null | string,
    abstr: null | string
};

type Watch = {
    note: string,
    abstr: string,
    status: boolean
}

export {Movie, Watch};