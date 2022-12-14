import express from "express";
import { createMovie, readMovies, updateMovie, deleteMovie, filterMovies } from "../controllers/movies.controller";
import { validateCreateMovie, validateUpdateAndDeleteMovie } from "../middlewares/movies.middleware";

const router = express.Router();

router.post("/movies", validateCreateMovie, createMovie);
router.get("/movies", readMovies);
router.put("/movies/:id",validateUpdateAndDeleteMovie, updateMovie);
router.delete("/movies/:id",validateUpdateAndDeleteMovie, deleteMovie);
router.get("/movies/filter-by-platform", filterMovies);


export default router;