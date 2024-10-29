import React from 'react';
import HistoryPage from './pages/HistoryPage';
import Footer from './pages/Footer';

const App: React.FC = () => {
    return (
        <div>
            <HistoryPage /> {/* Renderiza la página de generación de historias */}
            <Footer /> {/* Pie de página */}
        </div>
    );
};

export default App;
