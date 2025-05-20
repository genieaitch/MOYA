import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';
import routes from './routes';
import errorMiddleware from './middlewares/errorMiddleware';
import logger from './utils/logger';
import dotenv from 'dotenv';

// 환경 변수 로드
dotenv.config();

const app: Application = express();
const API_PREFIX = process.env.API_PREFIX || '/api';

// 미들웨어 설정
app.use(helmet()); // 보안 강화
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json()); // JSON 파싱
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev')); // 로깅

// 경로 설정
app.use(`${API_PREFIX}`, routes);

// Swagger 문서 경로
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 기본 경로
app.get('/', (_req: Request, res: Response) => {
    res.json({ message: 'Welcome to MOYA API' });
});

// 404 처리
app.use((_req: Request, res: Response) => {
    res.status(404).json({ message: 'Route not found' });
});

// 에러 처리 미들웨어
app.use(errorMiddleware);

export default app;