import { Router } from "express";
import { getAllUnits } from '../controllers/unitController'

const router: Router = Router();

router.get('/units', getAllUnits)

export default router