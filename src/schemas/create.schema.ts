import Joi from "joi";

const createMovieSchema = Joi.object({
    title: Joi.string().required(),
    genre: Joi.string().required(),
    status: Joi.boolean().required(),
    note: Joi.number().optional() || Joi.string().optional(),
    abstr: Joi.string() || Joi.optional(),
    platform: Joi.string().required()
})

export {createMovieSchema}