import {Router} from "express"
import { login } from "../controllers/userControllers";
import { Rou } from "../types/controllers";

const router:Rou = Router();

// get
router.get('/login',login)

// post

export default router;