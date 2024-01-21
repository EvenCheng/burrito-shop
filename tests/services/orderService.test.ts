import { calculateTotalCost, submitOrder } from '../../src/services/orderService';
import { OrderItem } from '../../src/models/order';

describe('OrderService', () => {
  it('should calculate total cost correctly for an order item', () => {
    const orderItem: OrderItem[] = [
      { burritoId: 1, quantity: 2, size: 'Regular', chosenOptions: ['Black Olives', 'Sour Cream'] },
    ];

    const totalCost = calculateTotalCost(orderItem);
    expect(totalCost).toEqual(6);
  });

  // Test scenario 1: Multiple items with the same configuration in an order
  test('Multiple items with the same configuration in an order', () => {
    const orderData: OrderItem[] = [
      { burritoId: 1, quantity: 2, size: 'Regular', chosenOptions: ['Black Olives', 'Sour Cream'] },
      { burritoId: 1, quantity: 1, size: 'Regular', chosenOptions: ['Black Olives', 'Sour Cream'] },
    ];

    const submittedOrder = submitOrder(orderData);

    expect(submittedOrder.items.length).toBe(2);
  });

  // Test scenario 2: Multiple options with the same value in an item
  test('Multiple options with the same value in an item', () => {
    const orderData: OrderItem[] = [
      { burritoId: 1, quantity: 1, size: 'Regular', chosenOptions: ['Black Olives', 'Black Olives'] },
    ];

    const submittedOrder = submitOrder(orderData);

    expect(submittedOrder.items[0].chosenOptions?.length).toBe(2);
  });

  // Test scenario 3: No options added in an item
  test('No options added in an item', () => {
    const orderData: OrderItem[] = [
      { burritoId: 1, quantity: 1, size: 'Regular', chosenOptions: [] },
    ];

    const submittedOrder = submitOrder(orderData);

    expect(submittedOrder.items[0].chosenOptions?.length).toBe(0);
  });

  // Test scenario 4: An order contains no item
  test('An order contains no item', () => {
    const orderData: OrderItem[] = [];

    expect(() => submitOrder(orderData)).toThrow('Invalid order format');
  });

  // Test scenario 5: An order with a burritoId that doesn't exist
  test('An order with a burritoId that doesn\'t exist', () => {
    const orderData: OrderItem[] = [
      { burritoId: 999, quantity: 1, size: 'Regular', chosenOptions: ['Black Olives'] },
    ];

    expect(() => submitOrder(orderData)).toThrow('Invalid burritoId: 999');
  });

  // Test scenario 6: An order with a size that doesn't exist
  test('An order with a size that doesn\'t exist', () => {
    const orderData: OrderItem[] = [
      { burritoId: 1, quantity: 1, size: 'Tiny', chosenOptions: ['Black Olives'] },
    ];

    expect(() => submitOrder(orderData)).toThrow('Invalid size');
  });

  // Test scenario 7: An order with an option that doesn't exist
  test('An order with an option that doesn\'t exist', () => {
    const orderData: OrderItem[] = [
      { burritoId: 1, quantity: 1, size: 'Regular', chosenOptions: ['Nonexistent Option'] },
    ];

    expect(() => submitOrder(orderData)).toThrow('Invalid option');
  });
});
