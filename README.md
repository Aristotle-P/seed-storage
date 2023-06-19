## Seed Storage
A simple app built with [Next.js](https://nextjs.org/) 13 to explore the app router and keep track of what I'm growing in the garden. 
Allows you to create groups and add items to those groups.

Uses [Drizzle ORM](https://orm.drizzle.team/) for it's queries and [Railway.app](https://railway.app/) for it's database.

## How to run
First, clone the repo and install the dependencies with `npm install`.

Next create `.env.local` and add `DATABASE_URL=your-database-url-here`.

Then run `npx drizzle-kit generate:pg --schema=./src/db/schema.ts`.

Lastly start the server with `npm run dev` and visit `localhost:3000`.
