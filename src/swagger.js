import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Production App API",
      version: "1.0.0",
      description: "API documentation for my Node.js backend",
    },
    servers: [
      {
        url: "http://localhost:8000",
        description: "Local development server",
      },
    ],
  },

  // Files containing your API route documentation
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;