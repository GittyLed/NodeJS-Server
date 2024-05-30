import express from 'express';
import requestController from '../controllers/RequestController';

const router = express.Router();

router.get('/', requestController.getAll);

router.get('/:id', requestController.getById);

router.put('/', requestController.update);

export default router;