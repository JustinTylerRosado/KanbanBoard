# Kanban Board Application
This is a full‑stack Kanban board application that uses JWT authentication to secure user access. The project is split into two parts: a React client and a Node.js/Express server using Sequelize with PostgreSQL. Note: The server must be running locally for the client to work.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Database Seeding](#database-seeding)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Contact](#contact)
- [License](#license)
- [Final Note](#final-note)

## Features

- **User Authentication:** Secure login using JSON Web Tokens (JWT)
- **Kanban Board:** Manage tasks/tickets with columns for different statuses
- **Full-Stack Application:** Separate React client and Node.js server with a PostgreSQL database
- **Sequelize ORM:** Database schema is defined by models and synchronized automatically
- **API Testing:** Use Insomnia or Postman to test API endpoints
Installation

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/download/)

### Clone the Repository

bash
Copy
git clone https://github.com/JustinTylerRosado/KanbanBoard.git
cd KanbanBoard/Develop

## Install Dependencies

### Server

bash
Copy
cd server
npm install

### Client

bash
Copy
cd ../client
npm install

## Configuration

### Environment Variables
Create a .env file in the server folder with the following content (adjust values as needed):

DB_NAME=kanban_db
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
JWT_SECRET=your_random_secret_key
PORT=3001

For the React client, if your API URL differs in production, you can use an environment variable (e.g., VITE_API_URL) in the client. For local development, the client assumes the API is at http://localhost:3001.

### Database

Ensure that PostgreSQL is running and that the user specified in your .env has the correct privileges. If necessary, create your database and grant permissions (see the PostgreSQL documentation for help).

## Usage

### Running the Server Locally

#### Build the Server:

bash:

cd server
npm run build

#### Start the Server:

bash:

npm start

### Running the Client Locally

#### Start the Client:

bash:

cd client
npm run dev

#### Open Your Browser:

Navigate to http://localhost:3000.

Important: The client makes API requests to http://localhost:3001. Ensure your server is running for these calls to succeed.

## Database Seeding

To populate your database with initial data (users and tickets), run the seed scripts.

### Seed Users

From the server folder, run:

bash:

npx ts-node --esm src/seeds/user-seeds.ts

### Seed Tickets

Similarly, run:

bash: 

npx ts-node --esm src/seeds/ticket-seeds.ts

## Deployment

### Client Deployment

- Deploy your React client to platforms like Vercel, Netlify, or Render.
- Set the Root Directory to the client folder and configure the build command (e.g., npm run build).
- In production, ensure the client’s API requests point to your deployed server URL via an environment variable (e.g., VITE_API_URL).

### Server Deployment

- Deploy your Node.js/Express server separately (e.g., using Render, Heroku, or Railway).
- Set the Root Directory to the server folder so it finds the correct package.json and runs the build/start commands.
- Configure environment variables (as described above) in your deployment platform.

## Technologies Used
- Client: React, Vite
- Server: Node.js, Express, Sequelize, PostgreSQL
- Authentication: JSON Web Tokens (JWT), bcrypt
- Tools: Insomnia for API testing

## Contact

For questions or concerns:
- GitHub:https://github.com/JustinTylerRosado
- Email: justintylerrosado@gmail.com

## License

This project is licensed under the MIT License.

## Final Note

For the client to work properly, the server must be running locally (or deployed and accessible). If you're running the client locally, ensure you start your server (npm start in the server folder) so that API requests are handled.

