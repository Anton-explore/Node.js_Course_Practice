# Node.js_Course_Practice
Practicing in node.js

## Homework 3

Assignment
Expanding a Node.js Application with TypeScript and MongoDB Database

Objective
Extend an existing Node.js application, converted to TypeScript, which uses Express.js, Swagger documentation, and runs via Nodemon. Update its API structure to include "Movies" and "Genres," and implement the ability to search for movies by genre using a MongoDB database.

Requirements
Connect to MongoDB Database:
Set up MongoDB on your computer or use a cloud-based MongoDB service.
Utilize the Mongoose library to establish a connection to the MongoDB database in your application.
Creating an API for "Movies":
Create API endpoints for "Movies" with CRUD operations (Create, Read, Update, Delete).
Each movie should have the following fields:
Title (String, required field)
Description (String, required field)
Release date (Date, required field)
Genre (Array of Strings, required field)
Creating an API for "Genres":
Create API endpoints for "Genres" with CRUD operations (Create, Read, Update, Delete).
Each genre should have the following field:
Name (String, required field)
Searching for Movies by Genre:
Add a new API endpoint for searching movies by genre (e.g., /movies/genre/:genreName).
Accept the genre as a request parameter and return a list of movies with the corresponding genre.
Data Validation and Error Handling:
Implement data validation for all incoming requests and error handling in your API.
Ensure appropriate HTTP status codes and error messages.
Updated Swagger Documentation:
Expand the Swagger documentation to include the new APIs for "Movies" and "Genres," specifying available operations and providing examples of requests.
Testing:
Ensure that your application still functions correctly after updating the API structure, adding the MongoDB database, and enabling movie searches by genre.
Use Nodemon for development and real-time testing.



## Homework 2

### Objective
Refactor an existing Node.js application created with Express.js and Swagger documentation to use TypeScript.

### Requirements
1. #### Translating the Project to TypeScript:
 1. Create a copy of your existing Node.js project.
 2. Translate all server files and configurations to TypeScript.
 3. Install necessary packages for TypeScript development (e.g., ts-node, @types/express, etc.).
2. #### Preserve Functionality:
 1. Ensure all previous functionality, including the health-check endpoint and Swagger documentation, remains operational.
3. #### Typing:
 1. Add types to all variables, parameters, and functions in your application, including Express.js routes and Swagger specifications.
 2. Use types to ensure safety and provide hints during development.
4. #### Testing:
 1. Verify that your translated application still functions correctly, including the health-check endpoint and Swagger documentation.
 2. Use linters and other tools to check for errors.



## Homework 1

### Objective
Create a Node.js application using the Express.js framework and integrate Swagger documentation. The application should also have a health-check endpoint and be hosted on GitHub. It should be run using Nodemon. 

### Requirements
1. #### Initialize a Node.js project:
 1. Set up a new Node.js project using npm or yarn.
 2. Install the necessary dependencies, including Express.js and Nodemon.
2. #### Create an Express.js Application:
 1. Set up an Express.js application with a basic server.
 2. Create a route for a health-check endpoint (GET /health-check) that returns a JSON response indicating the server is running.
3. #### Integrate Swagger Documentation:
 1. Install and set up Swagger UI and Swagger JS Docs for generating API documentation.
 2. Document at least one API endpoint (GET /health-check) 
4. #### Host the Project on GitHub:
 1. Create a GitHub repository for your Node.js project.
 2. Push your project's source code and documentation to the GitHub repository.
5. #### Test Your Application:
 1. Use Nodemon to run your application locally.
 2. Use a tool like Postman or CURL to test your health-check endpoint and ensure it returns the expected response.
 3. Access the Swagger documentation to verify that your API documentation is generated correctly.
6. #### Additional Features (Optional, but encouraged):
 1. Add more endpoints to your Express.js application and document them using Swagger.
 2. Implement error handling for common HTTP status codes (e.g., 404 Not Found, 500 Internal Server Error) and document error responses in Swagger. 
