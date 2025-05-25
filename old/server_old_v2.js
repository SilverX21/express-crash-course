const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

let posts = [
  { id: 1, title: "Post one" },
  { id: 2, title: "Post two" },
  { id: 3, title: "Post three" },
];

//get all posts
app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    //.status(200) sets the HTTP status code to 200 (OK)
    return res.status(200).json(posts.slice(0, limit)); //if limit is a number and greater than 0, return only the first 'limit' posts
  }

  //here we are sending a JSON response with the posts array. `res.json` is a method that sends a JSON response
  res.status(200).json(posts); //if limit is not a number or less than or equal to 0, return all posts
});

//":id" is a route parameter that will match any value after /api/posts/
//this allows us to get a specific post by its id
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);

  //here we will get the requested post
  const post = posts.find((post) => post.id === id);

  if (!post) {
    //if the post is not found, we return a 404 status code and a message
    return res
      .status(404)
      .json({ message: `A post with the id ${id} was not found` });
  }

  //find the post with the matching id
  //filter returns an array of posts that match the condition
  res.status(200).json(post);
});

app.listen(port, () =>
  console.log(`Express server is running on port ${port}`)
);
