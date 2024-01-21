import { Order, OrderItem } from '../models/order';
import { burritos, options } from '../models/burrito';

// Dummy data. This should be stored in a database in a production environment
const orders: Order[] = [
  {
    id: 1,
    items: [
      { burritoId: 1, quantity: 2, size: 'Regular', chosenOptions: ['Black Olives', 'Sour Cream'] },
      { burritoId: 3, quantity: 1, size: 'Small', chosenOptions: ['Lettuce', 'Onions'] },
      { burritoId: 3, quantity: 1, size: 'Regular', chosenOptions: ['Rice', 'Guacamole', 'Guacamole'] },
    ],
    totalCost: 13.5,
  },
  {
    id: 2,
    items: [
      { burritoId: 2, quantity: 1, size: 'XL', chosenOptions: ['Lettuce', 'Onions', 'Tomatoes'] },
      { burritoId: 4, quantity: 3, size: 'Regular', chosenOptions: ['Guacamole', 'Cheese', 'Extra Meat'] },
    ],
    totalCost: 23,
  },
  {
    id: 3,
    items: [
      { burritoId: 1, quantity: 1, size: 'XL', chosenOptions: ['Black Olives', 'Cheese'] },
      { burritoId: 3, quantity: 2, size: 'Regular', chosenOptions: ['Tomatoes', 'Guacamole'] },
      { burritoId: 4, quantity: 1, size: 'Small', chosenOptions: ['Rice', 'Extra Meat', 'Extra Meat'] },
    ],
    totalCost: 20.5,
  },
];

// Service function to submit an order
export const submitOrder = (items: OrderItem[]): Order => {
  // Validate OrderItems
  validateOrderItems(items);

  // Add the new order to the list of orders
  const newOrder: Order = { 
    id: orders.length + 1, 
    items: items, totalCost: 
    calculateTotalCost(items) 
  };

  return newOrder;
};

export const validateOrderItems = (items: OrderItem[]) => {
  // Validate items
  if (!items || !Array.isArray(items) || items.length === 0) {
    throw new Error('Invalid order format');
  }

  // Validate each item
  for (const item of items) {
    const { burritoId, quantity, size, chosenOptions } = item;

    // Validate burritoId
    const burrito = burritos.find((b) => b.id === burritoId);
    if (!burrito) {
      throw new Error(`Invalid burritoId: ${burritoId}`);
    }

    // Validate size
    const validSizes = burrito.sizes.map((s) => s.size);
    if (!validSizes.includes(size)) {
      throw new Error(`Invalid size: ${size} for burritoId: ${burritoId}`);
    }

    // Validate chosenOptions
    if (chosenOptions && Array.isArray(chosenOptions)) {
      for (const chosenOption of chosenOptions) {
        if (!options.find((opt) => opt.name === chosenOption)) {
          throw new Error(`Invalid option: ${chosenOption}`);
        }
      }
    }
  }
}

// Function to calculate totalCost for an order
export const calculateTotalCost = (items: OrderItem[]): number => {
  return items.reduce((acc, item) => {
    const burrito = burritos.find((burrito) => burrito.id === item.burritoId);
    if (burrito) {
      const size = burrito.sizes.find((burritoSize) => burritoSize.size === item.size);
      if (size) {
        const baseCost = size.price * item.quantity;
        let optionsCost = 0;
        if (item.chosenOptions) {
          optionsCost = item.chosenOptions.reduce((optionsAcc, option) => {
            const selectedOption = options.find((opt) => opt.name === option);
            return optionsAcc + (selectedOption ? selectedOption.price : 0);
          }, 0);
        }
        return acc + baseCost + optionsCost;
      }
    }
    return acc;
  }, 0);
};

// Service function to get all orders
export const getAllOrders = (): Order[] => {
  return orders;
};

// Service function to get a specific order by orderId
export const getOrderById = (orderId: number): Order | undefined => {
  return orders.find((order) => order.id === orderId);
};
