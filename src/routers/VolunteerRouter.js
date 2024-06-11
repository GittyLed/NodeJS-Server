import express from 'express';
import volunteerController from '../controllers/VolunteerController.js';

const router = express.Router();

router.get('/', volunteerController.getAll);

router.get('/:id', volunteerController.getById);

router.post('/', volunteerController.add);

export default router;