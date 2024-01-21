import express, { Request, Response } from 'express';
import { options } from '../models/burrito';
const router = express.Router();

// Get list of burritos
router.get('/', (req: Request, res: Response) => {
  res.json(options);
});

export default router;