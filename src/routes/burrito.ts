import express, { Request, Response } from 'express';
import { burritos } from '../models/burrito';

const router = express.Router();

// Get list of burritos
router.get('/', (req: Request, res: Response) => {
  res.json(burritos);
});

export default router;