import { Request, Response } from "express";
import { insertMovie, getMovies, watchMovie, removeMovie } from "../repositories/movies.repository.js";
import { Movie, Watch } from "../types/movie.type.js"

async function createMovie(req: Request, res: Response) {

    const movie = req.body

    try {
        await insertMovie(movie as Movie)
        res.sendStatus(201)
        
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
};

async function readMovies(req: Request, res: Response) {

    try {
        const movies = await getMovies()
        res.status(200).send(movies)
        
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

async function updateMovie(req: Request, res: Response) {

    const { id } = req.params
    const watch = req.body

    try {

        await watchMovie(Number(id), watch as Watch)
        res.sendStatus(200)
        
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

async function deleteMovie(req: Request, res: Response) {

    const { id } = req.params

    try {
        await removeMovie(Number(id))
        res.sendStatus(200)
        
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

export {createMovie, readMovies, updateMovie, deleteMovie};