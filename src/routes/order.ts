import express, { Request, Response } from 'express';
import * as orderController from '../controllers/orderController';

const router = express.Router();

// Route to submit an order
router.post('/', orderController.submitOrderController);

// Route to get all orders
router.get('/', orderController.getAllOrdersController);

// Route to get a specific order by orderId
router.get('/:id', orderController.getOrderByIdController);

export default router;
