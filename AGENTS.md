# Project Guidelines

## Project Context
- This is an ES-module Node.js backend using Express and MongoDB/Mongoose.
- The app is assembled in `src/app.js`; route modules in `src/routes/` are mounted there, and handlers live in `src/controllers/`.
- Database connection setup is in `src/db/`. The entry point is `src/index.js`.

## Development
- Start the development server with `npm run dev`. It loads environment variables from `./env`; the server defaults to port `8000`.
- Follow the existing JavaScript and import conventions in nearby files.
- Keep API documentation in OpenAPI JSDoc comments alongside route declarations in `src/routes/`; Swagger UI is served at `/api-docs`.
- Document only request and response behavior implemented by the API. Update documentation when behavior changes.
