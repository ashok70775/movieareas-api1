import express from "express";

const app = express();
const port = 3300;

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/movies",()=>{


});

app.post("/movies",()=>{

})

app.put("/movies:id",()=>{

})

app.delete("/movies:id",()=>{})



app.listen(port, () => {
  console.log(`Server is running on port  http://localhost:${port}`);
});






