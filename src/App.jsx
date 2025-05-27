import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="main-container">
      {/* Pass toggle handler to Header */}
      <Header onHamburgerClick={() => setSidebarOpen(true)} />

      <div className="dashboard-container">
        {/* Sidebar receives open state and close handler */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
