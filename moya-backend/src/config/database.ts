import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_DATABASE || "moya_db",

  entities: [],

  synchronize: process.env.NODE_ENV === "development",

  logging:
    process.env.NODE_ENV === "development" ? ["query", "error"] : ["error"],
});

export default AppDataSource;
