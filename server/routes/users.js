import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* CRUD */

/* READ */
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

/* UPDATE */
// Error: Route.patch() requires a callback function but got a [object String]
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
