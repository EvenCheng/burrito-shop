import request from 'supertest';
import { app, server } from '../../src/app';
// import server from '../../src/app';

afterAll(() => server.close());

describe('OrderController', () => {
  it('should return 401 if the API key is disabled', async () => {
    const response = await request(app)
      .get('/api/orders')
      .set('Authorization', 'Bearer apiKey2');

    expect(response.status).toBe(401);
    expect(response.body).toEqual({ error: 'Invalid API key' });
  });

  it('should return 401 for a secure route with invalid API key', async () => {
    const response = await request(app)
      .get('/api/orders')
      .set('Authorization', 'Bearer invalidApiKey');

    expect(response.status).toBe(401);
    expect(response.body).toEqual({ error: 'Invalid API key' });
  });

  it('should submit a new order', async () => {
    const response = await request(app)
      .post('/api/orders')
      .set('Authorization', 'Bearer apiKey1')
      .send({
        items: [
          { burritoId: 1, quantity: 2, size: 'Regular', chosenOptions: ['Black Olives', 'Sour Cream'] },
        ],
      });

    expect(response.status).toEqual(201);
    // Add more expectations based on your API response
  });

  it('should get all orders', async () => {
    const response = await request(app)
      .get('/api/orders')
      .set('Authorization', 'Bearer apiKey1');

    expect(response.status).toEqual(200);
    // Add more expectations based on your API response
  });

  it('should get a specific order by orderId', async () => {
    const orderId = 1; // Replace with an existing order ID
    const response = await request(app)
      .get(`/api/orders/${orderId}`)
      .set('Authorization', 'Bearer apiKey1');

    expect(response.status).toEqual(200);
    // Add more expectations based on your API response
  });

  it('Retrieving an order with an ID that doesn\'t exist', async () => {
    const orderId = 999; // Replace with an existing order ID
    const response = await request(app)
      .get(`/api/orders/${orderId}`)
      .set('Authorization', 'Bearer apiKey1');

    expect(response.status).toEqual(404);
    expect(response.body).toEqual({"error": "Order not found"});
  });
});
