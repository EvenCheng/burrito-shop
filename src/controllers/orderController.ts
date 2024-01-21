import { Request, Response } from 'express';
import * as orderService from '../services/orderService';

// Controller function to submit an order
export const submitOrderController = (req: Request, res: Response): void => {
  const newOrderItems = req.body;
  const submittedOrder = orderService.submitOrder(newOrderItems.items);
  res.status(201).json(submittedOrder);
};

// Controller function to get all orders
export const getAllOrdersController = (req: Request, res: Response): void => {
  const allOrders = orderService.getAllOrders();
  res.status(200).json(allOrders);
};

// Controller function to get a specific order by orderId
export const getOrderByIdController = (req: Request, res: Response): void => {
  const orderId = parseInt(req.params.id, 10);
  const order = orderService.getOrderById(orderId);

  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404).json({ error: 'Order not found' });
  }
};
