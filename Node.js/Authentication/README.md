# Authentication and membership

Copy `.env.example` to `.env` and set the PostgreSQL connection values, a long random `SESSION_SECRET`, and a private `MEMBERSHIP_SECRET`. The `.env` file is ignored by git.

Run `db/schema.sql` against the configured database, then start the app with `npm start`. The app expects the existing `"user"` table to have `id`, `fname`, `lname`, `email`, and `password` columns. New passwords are stored as salted scrypt hashes.

Users can sign up and log in with email and password. A signed-in nonmember can enter the membership secret at `/join-membership`; a matching secret updates that user's `membership` field to `Member`. Members can open `/membership`. The public `/forum` view keeps author names hidden while preserving message title, body, and time; the members forum shows names for member authors and `Unknown` for nonmembers.

The forum reads the existing singular `message` table and its `id`, `title`, `body`, `timestam`, and `user_id` columns. `db/schema.sql` adds the membership column if it is missing and creates a case-insensitive unique index for email addresses.
