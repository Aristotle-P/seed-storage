import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from "./src/db/schema.ts";
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

// for migrations
const migrationClient = postgres(`${process.env.DATABASE_URL}`, { max: 1 });
migrate(drizzle(migrationClient), { migrationsFolder: "drizzle" });

// for query purposes
const queryClient = postgres(`${process.env.DATABASE_URL}`);
export const db = drizzle(queryClient, { schema });
