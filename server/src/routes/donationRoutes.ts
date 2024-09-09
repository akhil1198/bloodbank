import { Router } from "express";
import { getAllDonations } from '../controllers/donationsController'

const router: Router = Router();

router.get('/donations', getAllDonations)

export default router