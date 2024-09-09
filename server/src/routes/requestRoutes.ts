import { Router } from "express";
import { getAllRequests } from '../controllers/requestsController'

const router: Router = Router();

router.get('/requests', getAllRequests)

export default router