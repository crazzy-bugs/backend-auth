# Annual Report Portal - Backend

## Description

The backend for the **Annual Report Portal** is a Node.js and Express-based server that provides APIs for managing academic data. It supports multiple user roles (superadmin, admin, faculty, and students) and includes features for managing institutes, users, academic data, and reports.

### Key Features

- **JWT Authentication**: Secure user sessions.
- **Role-Based Access Control (RBAC)**: Keypair-based permissions for user roles.
- **Data Management**: Import, export, and manage academic data.
- **Report Management**: Handle attendance, feedback, results, syllabus, and learning materials.

## Technologies

- **Node.js**: Runtime environment.
- **Express**: Web framework.
- **TypeScript**: For type-safe JavaScript.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM for MongoDB.
- **JWT**: For user authentication and authorization.

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [pnpm](https://pnpm.io/) (v7 or later)

### Steps to Set Up

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-repository/backend.git
   cd backend

2. Install Dependencies

    ```bash
    pnpm install
    ```
3. Configure Environment Variables

Copy the .env.sample file to .env and update the values as needed:
```bash
cp .env.sample .env
```

4. Ensure you set the following in the .env file:
```bash
MONGO_URI: MongoDB connection string.
JWT_SECRET: Secret key for JWT.
```
5. Run the Prepare Script

 Set up Husky hooks:
```bash
pnpm run prepare
```
6. Start the Development Server
```bash
pnpm run dev
```
7. The server will start and listen on the port specified in the .env file.

8. Testing
To run tests, ensure all dependencies are installed and then execute:
```bash
pnpm test
```
9. Linting and Formatting
    Lint: Run pnpm run lint to check for linting issues.
    Format: Run pnpm run format to format the codebase using Prettier.

10. Directory Structure
Here’s an overview of the directory structure:
```bash
src/
├── config/         # Configuration files (e.g., database connection)
├── controllers/    # Request handlers
├── middleware/     # Middleware functions
├── models/         # Mongoose models
├── routes/         # API routes
│   └── index.ts    # Main route file
├── utils/          # Utility functions and helpers
└── index.ts        # Entry point for the application
```

11. Contributing
To contribute to this project:

    1. Fork the repository.
    2. Create a new branch (git checkout -b feature/your-feature).
    3. Make your changes and commit them (git commit -am 'Add new feature').
    4. Push the branch (git push origin feature/your-feature).
    5. Create a Pull Request.