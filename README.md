# Task Manager Web App

## Introduction

This web application is a task manager that allows users to log in, create tasks, and organize them efficiently. Built with Next.js, it features a user-friendly interface and robust functionality to enhance productivity.

[Live Demo](https://task-manager-lyvel.vercel.app/)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- PostgreSQL Database (e.g., Supabase)

### Setting Up the Database

1. **Create a PostgreSQL Database**: Use a service like Supabase to set up your PostgreSQL database.
2. **Gather Database Credentials**: Make sure to note down the database URL as you will need it for the `.env` file.

### Environment Variables

You need to create a `.env` file in the root directory of the project and fill in the following environment variables:

```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
AUTH_SECRET=your_auth_secret
NEXTAUTH_URL=your_nextauth_url
DATABASE_URL=your_database_url
```

Replace `your_google_client_id`, `your_google_client_secret`, `your_auth_secret`, `your_nextauth_url`, and `your_database_url` with your actual credentials.

### Running the Application

1. **Install Dependencies**: Run `npm install` to install the required packages.
2. **Start the Development Server**: Execute `npm run dev` to start the development server. The app will be running at `http://localhost:3000`.

## Features

- **User Authentication**: Secure login functionality.
- **Task Management**: Create, edit, and organize tasks.
- **Database Integration**: Tasks are stored in a PostgreSQL database for persistence.

## Contributing

Contributions to improve the application are welcome. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature.
3. Commit your changes.
4. Push to the branch.
5. Open a pull request.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contact

Dawid Mleczko - [Email](dawid@lyvel.co.uk)

[Project Link](https://github.com/Lyvel/task-manager)
