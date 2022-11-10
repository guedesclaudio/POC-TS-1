import { QueryResult } from "pg";
import { MovieEntity, Platform } from "../types/movie.type.js"
import connection from "../database/database.js"

function insertMovie(movie: MovieEntity, platformId: number): void {
    connection.query(`
        INSERT INTO movies (title, "platformId", genre, status, note, abstr) 
        VALUES ($1, $2, $3, $4, $5, $6);
    `, [movie.title, platformId, movie.genre, movie.status, movie.note, movie.abstr])
};

async function getMovies(): Promise<QueryResult<MovieEntity>> {
    return (await connection.query(`
        SELECT 
        movies.id,
        movies.title,
        movies.genre,
        movies.note,
        movies.abstr, 
        platforms.name AS platform
        FROM movies
        JOIN platforms ON movies."platformId" = platforms.id;
    `))
};

function watchMovie(id: number, watch): void {
    connection.query(`
        UPDATE movies 
        SET status = TRUE,
        note = $1,
        abstr = $2
        WHERE id = $3;
    `, [watch.note, watch.abstr, id])
};

function removeMovie(id: number): void {
    connection.query(`
        DELETE FROM movies 
        WHERE id = $1;
    `, [id])
};

async function queryMovie(id: number): Promise<QueryResult> {
    return (await connection.query(`
        SELECT * FROM movies
        WHERE id = $1;
    `, [id]))
}

async function getFiltredMovies(): Promise<QueryResult> {
    return (await connection.query(`
        SELECT COUNT(*) AS "moviesNumber",
        name AS platform
        FROM platforms
        GROUP BY name;
    `,))
}

async function createPlatform(platform: string): Promise<QueryResult<Platform>> {
    await connection.query(`
        INSERT INTO platforms (name) VALUES ($1)
    `, [platform])

    return (await connection.query(`
        SELECT * FROM platforms WHERE name = $1
    `, [platform]))
}

async function queryPlatform(platform: string): Promise<QueryResult<Platform>> {
    return (await connection.query(`
        SELECT * FROM platforms WHERE name = $1
    `, [platform]))
}

export {insertMovie, getMovies, watchMovie, removeMovie, queryMovie, getFiltredMovies, createPlatform, queryPlatform};