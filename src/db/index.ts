import 'dotenv/config';
import {drizzle} from 'drizzle-orm/neon-http';
import {neon} from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined');
}

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql);
// pool is not used for neon-http, but index.ts expects it (or handles its absence)
export const pool = null;
