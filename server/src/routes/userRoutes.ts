import {Router} from "express"
import { confirmar, login, registrar, resetPass } from "../controllers/userControllers";
import { Rou } from "../types/controllers";

const router:Rou = Router();

// get
router.get('/login',login)
router.get('/confirmar/:token',confirmar)

// post
router.post('/registro',registrar)
router.post('/olvide-pass',resetPass)

export default router;