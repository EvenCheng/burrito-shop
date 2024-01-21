import express from 'express';
import bodyParser from 'body-parser';
import burritoRouter from './routes/burrito';
import orderRouter from './routes/order';

import apiKeyAuthorizationMiddleware from './middleware/apiKeyAuthorizationMiddleware';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Apply API key authorization middleware
app.use(apiKeyAuthorizationMiddleware);

// Burrito Routes
app.use('/api/burritos', burritoRouter);

// Order Routes
app.use('/api/orders', orderRouter);

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

process.on('SIGINT', function() {
  process.exit();
});

export { app, server };