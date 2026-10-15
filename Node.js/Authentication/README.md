# Members Only

A private club messaging application built with **Node.js, Express, PostgreSQL, and Passport.js** as part of [The Odin Project](https://www.theodinproject.com/).

The application allows users to sign up, log in, and create messages. Membership status determines who can see message authors and timestamps, while administrators have permission to delete messages.

## Features

- **User Authentication:** Sign up and log in securely using Passport.js and local authentication.
- **Password Security:** Passwords are hashed using bcrypt before being stored in the database.
- **Input Validation:** Form fields are validated and sanitized using express-validator, including password confirmation.
- **Membership System:** Users can join the club by entering a secret passcode.
- **Message Creation:** Authenticated users can create messages with a title, content, and timestamp.
- **Role-Based Access Control:** Public visitors can view messages, but only club members can see message authors and timestamps.
- **Admin Privileges:** Administrators can view all message details and delete messages.
- **Session Management:** User authentication is maintained using Express sessions and Passport.js.

## Built With

- **Node.js** — JavaScript runtime.
- **Express.js** — Web application framework.
- **PostgreSQL** — Relational database.
- **EJS** — Server-side templating engine.
- **Passport.js** — Authentication middleware.
- **passport-local** — Username and password authentication strategy.
- **bcryptjs** — Password hashing.
- **express-validator** — Input validation and sanitization.
- **express-session** — Session management.
- **dotenv** — Environment variable management.

## Authorization Rules

| Feature | Visitor | Logged-in User | Club Member | Admin |
|---|---|---|---|---|
| View messages | Yes | Yes | Yes | Yes |
| View authors and timestamps | No | No | Yes | Yes |
| Create messages | No | Yes | Yes | Yes |
| Join the club | No | Yes | Already a member | Already a member |
| Delete messages | No | No | No | Yes |

## Database Design

The application uses PostgreSQL with two main entities:

### User

Stores account information and authorization status.

- `id` — Primary key.
- `first_name` — User's first name.
- `last_name` — User's last name.
- `email` — Unique login identifier.
- `passwords` — Hashed password.
- `membership` — Club membership status.
- `is_admin` — Boolean flag indicating administrative privileges.

### Message

Stores messages created by users.

- `id` — Primary key.
- `title` — Message title.
- `text` — Message content.
- `created_at` — Message creation timestamp.
- `user_id` — Foreign key referencing the user who created the message.

Each message belongs to a user through the `user_id` foreign key.

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js and npm.
- PostgreSQL.

### Installation

1. Clone the repository:

   ```bash
   git clone <YOUR_REPOSITORY_URL>
   ```

2. Navigate to the project directory:

   ```bash
   cd <YOUR_PROJECT_DIRECTORY>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a PostgreSQL database and run your database schema or migrations.

5. Create a `.env` file in the project root:

   ```env
   DATABASE_URL=your_postgresql_connection_string
   SESSION_SECRET=your_secure_session_secret
   CLUB_PASSCODE=your_club_passcode
   ```

   Configure the database connection according to your application's setup. If your project uses separate PostgreSQL connection variables, use those instead of `DATABASE_URL`.

6. Start the application using the appropriate script defined in `package.json`:

   ```bash
   npm start
   ```

   For development, if you have a development script configured:

   ```bash
   npm run dev
   ```

7. Open the application in your browser at the local address and port configured by your application.

## Security Considerations

- Passwords are hashed rather than stored in plain text.
- Authentication and authorization are handled separately.
- Membership and admin privileges are checked on the server.
- Form inputs are validated and sanitized.
- Secret passcodes and session secrets are stored in environment variables.
- Database queries should use parameterized statements to reduce SQL injection risks.

**Note:** Never commit your `.env` file or expose production credentials in the repository.

## Learning Objectives

This project provided practical experience with:

- Relational database design and foreign-key relationships.
- Building an Express application using the MVC pattern.
- User registration and authentication with Passport.js.
- Password hashing and secure session management.
- Form validation and sanitization.
- Implementing membership-based access control.
- Managing admin permissions and protected actions.
- Integrating PostgreSQL with a server-rendered application.

## Acknowledgments

Built as part of **The Odin Project — NodeJS curriculum**, focusing on authentication, authorization, database integration, and user permissions.
