import { NextFunction, Request, Response } from "express";
import { queryMovie, createPlatform, queryPlatform } from "../repositories/movies.repository.js"
import { createMovieSchema } from "../schemas/create.schema.js"
import { MovieEntity } from "../types/movie.type.js";

async function validateUpdateAndDeleteMovie(req: Request, res: Response, next: NextFunction) {
    
    const {id} = req.params

    try {
        const movie = (await queryMovie(Number(id))).rows[0]
        
        if (!movie) {
            return res.sendStatus(404)
        }
        next()
    } catch (error) {
        console.error
        res.sendStatus(500)
    }
};


async function validateCreateMovie(req: Request, res: Response, next: NextFunction) {

    const { platform } = req.body

    const {error} = createMovieSchema.validate(req.body as MovieEntity)

    if (error) {
        return res.status(400).send({
            message: error.message
        })
    }

    try {
        const platformValue =  (await queryPlatform(platform)).rows[0]
        
        if (!platformValue) {
            const platformId = (await createPlatform(platform)).rows[0].id
            res.locals.platformId = platformId
        } else {
            const platformId = platformValue.id
            res.locals.platformId = platformId
        }
        next()
        
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}


export {validateUpdateAndDeleteMovie, validateCreateMovie}