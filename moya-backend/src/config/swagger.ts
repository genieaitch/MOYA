import swaggerJsdoc from 'swagger-jsdoc';
import dotenv from 'dotenv';

// 환경 변수 로드
dotenv.config();

const PORT = process.env.PORT || 3000;

// Swagger 기본 정보 설정
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'MOYA API 문서',
            version: '1.0.0',
            description: '모두의 야구 (MOYA) 애플리케이션 API 문서',
            contact: {
                name: 'MOYA Team',
                url: 'https://moya.example.com',
                email: 'contact@moya.example.com',
            },
        },
        servers: [
            {
                url: `http://localhost:${PORT}/api`,
                description: '개발 서버',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    // API 경로 패턴
    apis: ['./src/routes/*.ts', './src/controllers/*.ts', './src/entities/*.ts'],
};

// Swagger 명세 생성
const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;