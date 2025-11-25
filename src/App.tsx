import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import PortfolioPage from './pages/PortfolioPage'; // Assuming PortfolioPage will be created here
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="p-4 bg-gray-800 text-white flex gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/portfolio" className="hover:underline">Portfolio</Link>
        </nav>
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
