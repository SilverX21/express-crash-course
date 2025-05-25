import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postControllers.js";

const router = express.Router();

//with this approach, we can define all the routes for posts in one place
// and keep the code organized and modular
//get all posts
router.get("/", getPosts);

//get a required post
router.get("/:id", getPost);

//create a new post
router.post("/", createPost);

//update a post
router.put("/:id", updatePost);

//delete a post
router.delete("/:id", deletePost);

export default router;
