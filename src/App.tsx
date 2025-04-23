import { useState } from 'react';
import './App.css';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';
import { Analyzer } from './pages/Analyzer';

function App() {
  const [showAnalyzer, setShowAnalyzer] = useState(false);

  return (
    <MainLayout>
      {!showAnalyzer && <Home onStartAnalyzing={() => setShowAnalyzer(true)} />}
      {showAnalyzer && <Analyzer />}
    </MainLayout>
  );
}

export default App;