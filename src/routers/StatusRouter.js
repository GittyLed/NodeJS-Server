import express from 'express';
import statusController from '../controllers/StatusController.js';

const router = express.Router();

router.get('/', statusController.getAll);

export default router;