import { Router } from "express";
import { getAllUsers, getUserByID, createUser, loginUser } from "../controllers/userController";

const router: Router = Router();

router.get("/users", getAllUsers);
router.post("/users/createUser", createUser)
router.post("/users/login", loginUser)


export default router