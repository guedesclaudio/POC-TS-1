import { Request, Response } from "express";
import { queryMovie } from "../repositories/movies.repository.js"

async function validateUpdateAndDeleteMovie(req: Request, res: Response, next) {
    
    const {id} = req.params

    try {
        const movie = await queryMovie(Number(id))
        
        if (!movie) {
            return res.sendStatus(404)
        }
        next()
    } catch (error) {
        console.error
        res.sendStatus(500)
    }
};

export {validateUpdateAndDeleteMovie}