// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './pages/Home';

// 나중에 구현할 페이지들
// import MatchEntryPage from './pages/MatchEntry';
// import TicketSalePage from './pages/TicketSale';
// import CommunityPage from './pages/Community';
// import MyPage from './pages/MyPage';
// import AuthPage from './pages/Auth';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* 나중에 추가할 경로들 */}
                    {/* <Route path="/match-entry" element={<MatchEntryPage />} /> */}
                    {/* <Route path="/ticket-sale" element={<TicketSalePage />} /> */}
                    {/* <Route path="/community" element={<CommunityPage />} /> */}
                    {/* <Route path="/mypage" element={<MyPage />} /> */}
                    {/* <Route path="/auth/login" element={<AuthPage />} /> */}
                </Routes>
            </Router>
        </QueryClientProvider>
    );
}

export default App;