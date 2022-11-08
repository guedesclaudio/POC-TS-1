import {movies} from "../database/database.js"

function insertMovie(movie) {
    console.log(movie)
    return movie
};

async function getMovies() {
    return movies
};

async function watchMovie({id, note, abstr}) {
    return "filme alterado!"
};

async function removeMovie({id}) {
    return "filme excluido!"
};

export {insertMovie, getMovies, watchMovie, removeMovie};