import React from 'react';
import MainLayout from '../../components/layout/MainLayout';

const HomePage: React.FC = () => {
    return (
        <MainLayout>
            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">오늘의 경기</h2>
                <p className="text-gray-600">곧 실제 데이터로 채워질 예정입니다.</p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">동반 입장 모집</h2>
                <p className="text-gray-600">아직 등록된 모집글이 없습니다.</p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">티켓 양도</h2>
                <p className="text-gray-600">아직 등록된 양도글이 없습니다.</p>
            </section>
        </MainLayout>
    );
};

export default HomePage;