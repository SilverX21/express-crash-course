import express from "express";
//this is a express router that allows us to create modular, mountable route handlers
const router = express.Router();

let posts = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
  { id: 3, title: "Post three" },
];

//this is a middleware function that can be used to log requests. this is used only in the posts.js file
//the next parameter is a function that we call to pass control to the next middleware function in the stack
const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );

  next(); //call the next middleware function in the stack
  //if we don't call next(), the request will hang and the server will not respond
};

//get all posts
//here we don't define the /api/posts because it's already mapped in the server.js
//the logger middleware is used to log the request details, we pass it as the second parameter
router.get("/", logger, (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
});

//get a required post
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ message: `A post with the id ${id} was not found` });
  }

  res.status(200).json(post);
});

//create a new post
router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    return res.status(400).json({ message: "Title is required" });
  }

  posts.push(newPost);
  res.status(201).json(posts);
});

//update a post
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ message: `A post with the id ${id} was not found` });
  }

  post.title = req.body.title;
  res.status(200).json(posts);
});

//delete a post
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ message: `A post with the id ${id} was not found` });
  }

  posts = posts.filter((post) => post.id !== id); //filtering out the post to be deleted
  res.status(200).json(posts);
});

//here we are exporting the router so we can use it in other files
//this is a common practice in express to keep the code organized and modular
export default router;
