import express from "express";
import path from "path";
import { fileURLToPath } from "url"; //we need this to get the current directory name in ES modules
//here we are importing the posts.js file
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
const port = process.env.PORT || 8000;

//to get the current directory name in ES modules
const __filename = fileURLToPath(import.meta.url); //this gives us the current file name -> example: file:///server.js
const __dirname = path.dirname(__filename); //this gives us the current directory name -> example: /home/user/project

//create an instance of express
const app = express();

//middleware
app.use(express.json()); //to parse JSON bodies
app.use(express.urlencoded({ extended: false })); //to parse URL-encoded bodies

//logger middleware
app.use(logger); //this will log the request details for every request made to the server
app.use(express.static(path.join(__dirname, "public"))); //to serve static files from the public directory

//routes
//here we are mapping the /api/posts route to the posts.js file
//this means that any request to /api/posts will be handled by the posts.js file
app.use("/api/posts", posts);

app.use(errorHandler);
//this is a catch-all route that will handle any requests that do not match the above routes
app.use(notFound);

app.listen(port, () =>
  console.log(`Express server is running on port ${port}`)
);
