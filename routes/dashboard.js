import express from 'express';
import { investmentAnalytics } from '../controller/dashboard.js';
import { verifyUser } from '../uitls/verifyToken.js';

const router = express.Router();

router.get('/paymentsAnalytics/:id', verifyUser, investmentAnalytics);

export default router;
