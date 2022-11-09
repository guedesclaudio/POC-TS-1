import express from "express";
import { createMovie, readMovies, updateMovie, deleteMovie } from "../controllers/movies.controller.js";
import { validateUpdateAndDeleteMovie } from "../middlewares/movies.middleware.js";

const router = express.Router();

router.post("/movies", createMovie);
router.get("/movies", readMovies);
router.put("/movies/:id",validateUpdateAndDeleteMovie, updateMovie);
router.delete("/movies/:id",validateUpdateAndDeleteMovie, deleteMovie);

export default router;