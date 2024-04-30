// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
import dotenv from "dotenv";
dotenv.config();

const knexConfig = {
    development: {
        client: "sqlite3",
        useNullAsDefault: true,
        connection: {
            filename: "db/dev.sqlite3",
        },
    },

    staging: {
        client: "mysql2",
        connection: {
            database: process.env.MYSQL2_DATABASE,
            user: process.env.MYSQL2_USER,
            password: process.env.MYSQL2_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },

    production: {},
};

export default knexConfig;
