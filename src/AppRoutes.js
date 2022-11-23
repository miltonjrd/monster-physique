import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Simulator from './pages/Simulator';
import Products from './components/Products';



const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/simulator" element={<Simulator />} />
            <Route path="/products" element={<Products />} />
       
        </Routes>
    );
};

export default AppRoutes;