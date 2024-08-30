import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './config/swagger';
import morganMiddleware from './middlewares/logger';
import errorHandler from './middlewares/errorHandler';
import routes from './routes';

// Initialize express
const app = express();

// Setup swagger-jsdoc
const swaggerDocs = swaggerJSDoc(swaggerOptions);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Use morgan for logging HTTP requests
app.use(morganMiddleware);

// Your routes
app.use('/api', routes); // Example route

// Use error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
