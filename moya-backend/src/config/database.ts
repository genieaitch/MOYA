import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
import path from 'path';

// 환경 변수 로드
dotenv.config();

// TypeORM 설정
const config: ConnectionOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_DATABASE || 'moya_db',
    entities: [path.join(__dirname, '../entities/**/*.{ts,js}')],
    migrations: [path.join(__dirname, '../migrations/**/*.{ts,js}')],
    subscribers: [path.join(__dirname, '../subscribers/**/*.{ts,js}')],
    synchronize: process.env.NODE_ENV === 'development', // 개발 환경에서만 true로 설정
    logging: process.env.NODE_ENV === 'development', // 개발 환경에서만 로깅
    cli: {
        entitiesDir: 'src/entities',
        migrationsDir: 'src/migrations',
        subscribersDir: 'src/subscribers',
    },
};

export default config;