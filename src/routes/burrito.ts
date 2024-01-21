import express, { Request, Response } from 'express';
import { burritos, options } from '../models/burrito';

const router = express.Router();

// Get list of burritos
router.get('/', (req: Request, res: Response) => {
  res.json(burritos);
});

// Get list of burritos
router.get('/options', (req: Request, res: Response) => {
  res.json(options);
});

export default router;