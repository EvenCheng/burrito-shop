import express, { Request, Response } from 'express';
import * as orderController from '../middleware/controllers/orderController';

const router = express.Router();

router.post('/', orderController.submitOrderController);

// Route to get all orders
router.get('/', orderController.getAllOrdersController);

// Route to get a specific order by orderId
router.get('/:id', orderController.getOrderByIdController);




// // Get list of orders
// router.get('/', (req: Request, res: Response) => {
//   res.json(orders);
// });

// Submit an order
// router.post('/', (req: Request, res: Response) => {
//   const { items } = req.body;

//   // Validate items
//   if (!items || !Array.isArray(items) || items.length === 0) {
//     return res.status(400).json({ message: 'Invalid order format' });
//   }

//   // Validate each item
//   for (const item of items) {
//     const { burritoId, quantity, size, chosenOptions } = item;

//     // Validate burritoId
//     const burrito = burritos.find((b) => b.id === burritoId);
//     if (!burrito) {
//       return res.status(400).json({ message: `Invalid burritoId: ${burritoId}` });
//     }

//     // Validate size
//     const validSizes = burrito.sizes.map((s) => s.size);
//     if (!validSizes.includes(size)) {
//       return res.status(400).json({ message: `Invalid size: ${size} for burritoId: ${burritoId}` });
//     }

//     // Validate chosenOptions
//     if (chosenOptions && !Array.isArray(chosenOptions)) {
//       for (const chosenOption of chosenOptions) {
//         if (!options.find((opt) => opt.name === chosenOption)) {
//           return res.status(400).json({ message: `Invalid option: ${chosenOption}` });
//         }
//       }
//     }
//   }

//   // Save order
//   const order: Order = { id: orders.length + 1, items: items, totalCost: calculateTotalCost(items) };
//   orders.push(order);

//   res.status(201).json(order);
// });


// // Get details of an individual order
// router.get('/:id', (req: Request, res: Response) => {
//   const orderId = parseInt(req.params.id);
//   const order = orders.find((o) => o.id === orderId);

//   if (order) {
//     res.json(order);
//   } else {
//     res.status(404).json({ message: 'Order not found' });
//   }
// });

export default router;
