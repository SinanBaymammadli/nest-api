/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require("dotenv");
const PostgressConnectionStringParser = require("pg-connection-string");

dotenv.config();

const connectionOptions = PostgressConnectionStringParser.parse(
  process.env.DATABASE_URL || "",
);

module.exports = {
  type: "postgres",
  host: connectionOptions.host || "localhost",
  port: parseInt(connectionOptions.port || "", 10) || 5432,
  username: connectionOptions.user || "postgres",
  password: connectionOptions.password || "",
  database: connectionOptions.database || "foglie",
  entities: ["./dist/**/*.entity{.ts,.js}"],
  // seeds: ["./src/database/**/*.seed.ts"],
  // factories: ["./src/database/**/*.factory.ts"],
  synchronize: true,
  migrations: ["migration/*.js"],
  cli: {
    migrationsDir: "migration",
  },
  logging: true,
  extra: {
    ssl: false,
  },
};
