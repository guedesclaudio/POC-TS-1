import {movies} from "../database/database.fake.js"
import { Movie } from "../types/movie.type.js"
import connection from "../database/database.js"

function insertMovie(movie): void {
    const {title, platform, genre, status, note, abstr} = movie

    return connection.query(`
        INSERT INTO movies (title, platform, genre, status, note, abstr) 
        VALUES ($1, $2, $3, $4, $5, $6);
    `, [title, platform, genre, status, note, abstr])
};

async function getMovies() {
    return (await connection.query(`
        SELECT * FROM movies;
    `)).rows
};

function watchMovie(id: number, watch): void {
    const {note, abstr} = watch

    return connection.query(`
        UPDATE movies 
        SET status = TRUE,
        note = $1,
        abstr = $2
        WHERE id = $3;
    `, [note, abstr, id])
};

function removeMovie(id: number): void {
    return connection.query(`
        DELETE FROM movies 
        WHERE id = $1;
    `, [id])
};

async function queryMovie(id: number) {
    return (await connection.query(`
        SELECT * FROM movies
        WHERE id = $1;
    `, [id])).rows[0]
}

export {insertMovie, getMovies, watchMovie, removeMovie, queryMovie};