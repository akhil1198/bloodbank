import { Router } from "express";
import { getAllDonations, getDonationsById } from '../controllers/donationsController'

const router: Router = Router();

router.get('/donations', getAllDonations)
router.get('/donations/id', getDonationsById)


export default router