import { Request, Response } from "express";
import { queryMovie, createPlatform, queryPlatform } from "../repositories/movies.repository.js"

async function validateUpdateAndDeleteMovie(req: Request, res: Response, next) {
    
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


async function validateCreateMovie(req: Request, res: Response, next) {

    const { platform } = req.body

    try {
        const platformValue = (await queryPlatform(platform)).rows[0].id

        if (!platformValue) {
            const platformId = (await createPlatform(platform)).rows[0].id

            res.locals.platformId = platformId
        } else {
            res.locals.platformId = platformValue
        }
        next()
        
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}


export {validateUpdateAndDeleteMovie, validateCreateMovie}