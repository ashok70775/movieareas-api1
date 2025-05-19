import express from "express";
import moviesRoutes from "./routes/movies.routes.js";
import connectDB  from "./lib/db.js";  


const app = express();
const port = 3300;

//to get the MongoDB connection
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});




// Middleware for the routes
// app.use("/movies",moviesRoutes);

app.use("/movies", moviesRoutes);



app.listen(port, () => {
  console.log(`Server is running on port  http://localhost:${port}`);
});






