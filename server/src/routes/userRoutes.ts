import {Router} from "express"
import { confirmar, login, registrar } from "../controllers/userControllers";
import { Rou } from "../types/controllers";

const router:Rou = Router();

// get
router.get('/login',login)
router.get('/confirmar/:token',confirmar)

// post
router.post('/registro',registrar)

export default router;