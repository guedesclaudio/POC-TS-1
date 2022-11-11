import Joi from "joi";

const createMovieSchema = Joi.object({
    title: Joi.string().required(),
    genre: Joi.string().required(),
    status: Joi.boolean(),
    note: Joi.string(),
    abstr: Joi.number(),
    platform: Joi.string()
})

export {createMovieSchema}