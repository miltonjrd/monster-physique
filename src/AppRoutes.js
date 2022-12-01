import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Simulator from './pages/Simulator';
import Products from './pages/Products';
import Contact from './components/Contact';



const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/simulator" element={<Simulator />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default AppRoutes;