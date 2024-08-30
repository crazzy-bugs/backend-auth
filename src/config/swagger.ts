import { Options } from 'swagger-jsdoc';

const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0', // OpenAPI version
    info: {
      title: 'Annual Report Portal API',
      version: '1.0.0',
      description: 'API documentation for the Annual Report Portal',
    },
    servers: [
      {
        url: 'http://localhost:5000/api', // Replace with your API server URL
      },
    ],
  },
  // Path to the API specs
  apis: ['./src/routes/**/*.ts'], // Adjust this path to point to your route files
};

export default swaggerOptions;
