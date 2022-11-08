import express from "express";
import { createMovie, readMovies, updateMovie, deleteMovie } from "../controllers/movies.controller.js";

const router = express.Router()

router.post("/movies", createMovie)
router.get("/movies", readMovies)
router.put("/movies", updateMovie)
router.delete("/movies", deleteMovie)

export default router