import express from 'express';
import { MovieList,CreateMovie,UpdateMovie,DeleteMovie } from '../controllers/movie.controllers.js';

const router = express.Router();


router.get("/movies",MovieList);

router.post("/movies",CreateMovie)

router.put("/movies:id",UpdateMovie)

// Before controller from Router
// router.delete("/movies:id",(req,res)=>{
// res.send("movie deleted");
// })

// After controller from Router
 router.delete("/movies:id",DeleteMovie)

export default router;


