import {Router} from "express"
import { login, registrar } from "../controllers/userControllers";
import { Rou } from "../types/controllers";

const router:Rou = Router();

// get
router.get('/login',login)

// post
router.post('/registro',registrar)

export default router;