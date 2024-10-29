import React from 'react';
import HistoryPage from './pages/HistoryPage'; 
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <HistoryPage /> {/* Renderiza la página de generación de historias */}
      <Footer />
    </div>
  );
};

export default App;
