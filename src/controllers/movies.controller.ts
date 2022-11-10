import { Request, Response } from "express";
import { insertMovie, getMovies, watchMovie, removeMovie, getFiltredMovies } from "../repositories/movies.repository.js";
import { MovieEntity, Watch } from "../types/movie.type.js"

async function createMovie(req: Request, res: Response) {

    const movie = req.body as MovieEntity
    const platformId = res.locals.platformId

    try {
        await insertMovie(movie, Number(platformId))
        return res.sendStatus(201)
        
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
};

async function readMovies(req: Request, res: Response) {

    try {
        const movies = (await getMovies()).rows
        return res.status(200).send(movies)
        
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

async function updateMovie(req: Request, res: Response) {

    const { id } = req.params
    const watch = req.body as Watch

    try {
        await watchMovie(Number(id), watch)
        return res.sendStatus(200)
        
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

async function deleteMovie(req: Request, res: Response) {

    const { id } = req.params

    try {
        await removeMovie(Number(id))
        return res.sendStatus(200)
        
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

async function filterMovies(req: Request, res: Response) {
    
    try {
        const movies = (await getFiltredMovies()).rows
        return res.status(200).send(movies)
        
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

export {createMovie, readMovies, updateMovie, deleteMovie, filterMovies};