import "reflect-metadata";
import app from "./app";
import config, { AppDataSource } from "./config/database";
import logger from "./utils/logger";

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    logger.info("Database connected successfully");

    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    logger.error("Unable to connect to the database:", error);
    process.exit(1);
  });

// 예기치 않은 오류 처리
process.on("unhandledRejection", (err: Error) => {
  logger.error("Unhandled Rejection:", err);
  process.exit(1);
});
