# University Management Project

This project is a University Management System built using Node.js, Express, and TypeScript. It provides functionalities to manage users, authentication, file uploads, and more. Below is a detailed description of the project structure and dependencies.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)

---

## Features

- User authentication and authorization using JWT.
- Secure password handling with bcrypt.
- Database management with MongoDB and Mongoose.
- File uploads managed with Multer.
- Email notifications using Nodemailer.
- Cloud storage for assets via Cloudinary.
- Input validation using Zod.

---

## Technologies Used

### Backend
- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for building APIs.
- **TypeScript**: Typed JavaScript for better code quality.

### Security
- **bcrypt**: Password hashing.
- **jsonwebtoken**: Token-based authentication.

### Database
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB object modeling for Node.js.

### Utilities
- **Multer**: Middleware for handling multipart/form-data.
- **Cloudinary**: Cloud storage for images.
- **dotenv**: Environment variable management.
- **cookie-parser**: Parse HTTP cookies.
- **cors**: Enable Cross-Origin Resource Sharing.
- **http-status**: Utility for managing HTTP status codes.
- **Zod**: Schema validation for TypeScript.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/university-management.git
   cd university-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure environment variables:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

- Visit `http://localhost:3000` to access the API.
- Use API clients like Postman to interact with the endpoints.
- Configure the frontend (if applicable) to connect with this backend.

---

## Scripts

| Script         | Description                                      |
|----------------|--------------------------------------------------|
| `npm run dev`  | Starts the development server with live reload.  |
| `npm run build`| Compiles TypeScript into JavaScript.             |
| `npm run lint` | Runs ESLint to find linting issues.              |
| `npm run lint:fix` | Fixes linting issues automatically.         |
| `npm run format` | Formats code using Prettier.                  |
| `npm test`     | Placeholder for running tests.                  |

---

## Dependencies

| Package          | Version   | Description                                     |
|------------------|-----------|-------------------------------------------------|
| `bcrypt`         | ^5.1.1    | Password hashing library.                      |
| `cloudinary`     | ^2.5.1    | Cloud storage for images.                      |
| `cookie-parser`  | ^1.4.7    | Parse cookies for request handling.            |
| `cors`           | ^2.8.5    | Enable Cross-Origin Resource Sharing.          |
| `dotenv`         | ^16.4.5   | Manage environment variables.                  |
| `express`        | ^4.21.1   | Web framework for Node.js.                     |
| `http-status`    | ^2.0.0    | HTTP status code constants.                    |
| `jsonwebtoken`   | ^9.0.2    | Token-based authentication library.            |
| `mongoose`       | ^8.8.3    | MongoDB object modeling tool.                  |
| `multer`         | ^1.4.5-lts.1 | File upload middleware.                      |
| `nodemailer`     | ^6.9.16   | Email handling library.                        |
| `zod`            | ^3.23.8   | Schema validation for TypeScript.              |

---

## Dev Dependencies

| Package                    | Version   | Description                                     |
|----------------------------|-----------|-------------------------------------------------|
| `@eslint/js`               | ^9.15.0   | ESLint configuration for JavaScript.           |
| `@types/bcrypt`            | ^5.0.2    | TypeScript types for bcrypt.                   |
| `@types/cookie-parser`     | ^1.4.8    | TypeScript types for cookie-parser.            |
| `@types/cors`              | ^2.8.17   | TypeScript types for cors.                     |
| `@types/express`           | ^5.0.0    | TypeScript types for Express.                  |
| `@types/jsonwebtoken`      | ^9.0.7    | TypeScript types for jsonwebtoken.             |
| `@types/multer`            | ^1.4.12   | TypeScript types for multer.                   |
| `@types/node`              | ^22.10.0  | TypeScript types for Node.js.                  |
| `@types/nodemailer`        | ^6.4.17   | TypeScript types for nodemailer.               |
| `@typescript-eslint/eslint-plugin` | ^8.16.0 | ESLint plugin for TypeScript.         |
| `@typescript-eslint/parser`| ^8.16.0   | ESLint parser for TypeScript.                  |
| `eslint`                   | ^9.15.0   | Linter for JavaScript and TypeScript.          |
| `globals`                  | ^15.12.0  | Global variables and TypeScript definitions.   |
| `ts-node`                  | ^10.9.2   | TypeScript execution environment.              |
| `typescript`               | ^5.7.2    | TypeScript language support.                   |
| `typescript-eslint`        | ^8.16.0   | TypeScript ESLint integration.                 |

---

## License

This project is licensed under the ISC License. Feel free to use and modify it as needed.

---

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests.

