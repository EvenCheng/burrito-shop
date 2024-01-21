# Burrito Shop Application

This is a simple backend application for a Burrito Shop, providing APIs to support the point-of-sales and ordering system.

## Folder Structure and Purpose

The project has the following folder structure:

- **src**: Contains the source code of the application.
  - **controllers**: Handles HTTP request handling and route logic.
  - **models**: Defines data models used in the application.
  - **routes**: Defines API routes.
  - **services**: Contains business logic and data processing.
- **tests**: Holds Jest test cases for the application.

## Authorization

To access the secure routes of the API, you need to include your API key in the `Authorization` header using the "Bearer" scheme and provide the hardcoded key `b7f930d00b914d9db909d97cb1f3a6e6`. See `apiKeyAuthorizationMiddleware.ts` for how it's implemented

### Example using cURL

```bash
curl -X GET \
  http://localhost:3000/api/orders \
  -H 'Authorization: Bearer b7f930d00b914d9db909d97cb1f3a6e6'
```

### Example using Postman

1. Open Postman and create a new request.
2. Set the request method to `GET`.
3. Enter the request URL: `http://localhost:3000/api/orders`.
4. In the Headers section, add a new header:
   - Key: `Authorization`
   - Value: `Bearer b7f930d00b914d9db909d97cb1f3a6e6`.

Click "Send" to make the request.

Make sure to use a valid API key from the list of authorized keys in the `apiKeyAuthorizationMiddleware.ts` file.

Enjoy ordering delicious burritos from the Burrito Shop API!

## How to Run the Application Server Locally

1. Install Node.js and npm.

2. Clone the repository:

   ```bash
   git clone https://github.com/evencheng/burrito-shop.git
   ```

3. Navigate to the project folder:

   ```bash
   cd burrito-shop
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the application server:

   ```bash
   npm start
   ```

   The server will be running at `http://localhost:3000`.

## Build and Run the Docker Image

1. Open a terminal and navigate to the root of your project.

2. Build the Docker image:

   ```bash
   docker build -t burrito-shop .
   ```

   This will build the Docker image with the tag `burrito-shop`.

3. Run the Docker container:

   ```bash
   docker run -p 3000:3000 burrito-shop
   ```

   This will start the container and map port 3000 from the container to port 3000 on your host machine.

4. Now, your Burrito Shop application should be accessible at [http://localhost:3000](http://localhost:3000) within your Docker container.

## How to Run the Test Cases

1. Make sure the application server is not running.

2. Run the Jest test suite:

   ```bash
   npm test
   ```

   This will execute the test cases and provide feedback on the test results.

## Assumptions Made

1. **Node.js and npm are installed**: The setup assumes that Node.js and npm are installed on the system.

2. **Static data for testing**: The work here assumes static dummy data for orders and burritos is used for testing purposes. In a real-world scenario, this data would come from a database.

3. **Application runs on port 3000**: The instructions assume the application runs on port 3000. Make sure the port is available and not in use by another application.

4. **Use of hardcoded API key**: This project uses API keys for simplicity in demonstrating authorization. In a real-world scenario, API key-based authorization might not be the most secure solution, especially for production environments. It is recommended to implement more robust and secure authentication mechanisms, such as OAuth 2.0 or JWT, based on the specific security requirements of your application.
