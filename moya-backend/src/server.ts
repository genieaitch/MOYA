import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './app';
import config from './config/database';
import logger from './utils/logger';

const PORT = process.env.PORT || 3000;

// TypeORM 데이터베이스 연결 및 서버 시작
createConnection(config)
    .then(() => {
        logger.info('Database connected successfully');

        app.listen(PORT, () => {
            logger.info(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        logger.error('Unable to connect to the database:', error);
        process.exit(1);
    });

// 예기치 않은 오류 처리
process.on('unhandledRejection', (err: Error) => {
    logger.error('Unhandled Rejection:', err);
    process.exit(1);
});