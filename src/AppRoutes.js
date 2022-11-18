import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Simulator from './pages/Simulator';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/simulator" element={<Simulator />} />
        </Routes>
    );
};

export default AppRoutes;