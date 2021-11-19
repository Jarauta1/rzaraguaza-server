import Knex from 'knex';
import * as dotenv from 'dotenv';

dotenv.config();

const config = {
    client: 'pg',
    connection: {
        host: process.env.CLOUD_SQL_CONNECTION_NAME,
        port: 5432,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    },
};

const writeconfig = JSON.parse(JSON.stringify(config));

export const dbInstance = Knex(writeconfig);