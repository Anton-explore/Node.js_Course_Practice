# Node.js_Course_Practice
Practicing in node.js

## Homework 4

### Assignment
Testing a Node.js Application with Jest

### Objective
Write unit tests to cover the functionality of an existing Node.js application, which is written in TypeScript, uses Express.js, and MongoDB, and includes APIs for "Movies" and "Genres." The application should also allow searching for movies by genre. The goal is to ensure that the application functions correctly and reliably.

### Requirements
1. #### Test Setup:
 1. Set up a testing environment using Jest to write and run unit tests.
 2. Ensure that your project's dependencies include Jest and related testing libraries.
2. #### Unit Tests for APIs:
 1. Write unit tests for the API endpoints related to "Movies" and "Genres".
 2. Cover scenarios such as creating, reading, updating, and deleting movies and genres.
 3. Include tests for error handling and validation of input data.
3. #### Unit Tests for Movie Genre Search:
 1. Write unit tests for the movie genre search functionality.
 2. Test different genres and ensure that the API returns the expected results.
 3. Include edge cases and error scenarios in your tests.
4. #### Coverage and Reporting:
 1. Aim for high code coverage in your tests to ensure thorough testing of your application.
 2. Generate and include a code coverage report as part of your test results.
5. #### Documentation:
 1. Update your project's documentation to include information on running the tests using Jest.
 2. Provide clear instructions on how to run the tests and interpret the test results.

## Homework 3

### Assignment
Expanding a Node.js Application with TypeScript and MongoDB Database

### Objective
Extend an existing Node.js application, converted to TypeScript, which uses Express.js, Swagger documentation, and runs via Nodemon. Update its API structure to include "Movies" and "Genres," and implement the ability to search for movies by genre using a MongoDB database.

### Requirements
1. #### Connect to MongoDB Database:
 1. Set up MongoDB on your computer or use a cloud-based MongoDB service.
 2. Utilize the Mongoose library to establish a connection to the MongoDB database in your application.
2. #### Creating an API for "Movies":
 1. Create API endpoints for "Movies" with CRUD operations (Create, Read, Update, Delete).
 2. Each movie should have the following fields:
  - Title (String, required field)
  - Description (String, required field)
  - Release date (Date, required field)
  - Genre (Array of Strings, required field)
3. #### Creating an API for "Genres":
 1. Create API endpoints for "Genres" with CRUD operations (Create, Read, Update, Delete).
 2. Each genre should have the following field:
  - Name (String, required field)
4. #### Searching for Movies by Genre:
 1. Add a new API endpoint for searching movies by genre (e.g., /movies/genre/:genreName).
 2. Accept the genre as a request parameter and return a list of movies with the corresponding genre.
5. #### Data Validation and Error Handling:
 1. Implement data validation for all incoming requests and error handling in your API.
 2. Ensure appropriate HTTP status codes and error messages.
6. #### Updated Swagger Documentation:
 1. Expand the Swagger documentation to include the new APIs for "Movies" and "Genres," specifying available operations and providing examples of requests.
7. #### Testing:
 1. Ensure that your application still functions correctly after updating the API structure, adding the MongoDB database, and enabling movie searches by genre.
 2. Use Nodemon for development and real-time testing.



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
