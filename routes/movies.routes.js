import express from 'express';

const router = express.Router();


router.get("/movies",(req,res)=>{

    res.send("get all movies");
    
    
});


router.post("/movies",(req,res)=>{
res.send("movie created");

})

router.put("/movies:id",(req,res)=>{
    res.send("movie updated");
})

router.delete("/movies:id",(req,res)=>{
res.send("movie deleted");

})

export default router;


