import Joi from "joi";

const createMovieSchema = Joi.object({
    title: Joi.string().required(),
    genre: Joi.string().required(),
    status: Joi.boolean(),
    note: Joi.number(),
    abstr: Joi.string(),
    platform: Joi.string()
})

export {createMovieSchema}