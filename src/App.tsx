import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { TopNav } from './components/layout/TopNav';
import { Dashboard } from './pages/Dashboard';
import { Campaigns } from './pages/Campaigns';
import { BuildCampaign } from './pages/BuildCampaign';
import { Audience } from './pages/Audience';
import { Contacts } from './pages/Contacts';
import { Settings } from './pages/Settings';

function AppContent() {
  const location = useLocation();
  
  // Determinar el título basado en la ruta
  const getTitle = () => {
    if (location.pathname === '/') return 'Resumen del Panel';
    if (location.pathname.startsWith('/campaigns')) {
      return location.pathname === '/campaigns/build' ? 'Crear Campaña' : 'Campañas';
    }
    if (location.pathname === '/audience') return 'Audiencia y Segmentos';
    if (location.pathname === '/contacts') return 'Contactos';
    if (location.pathname === '/settings') return 'Configuración';
    return 'WA Marketing';
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <TopNav title={getTitle()} />
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/campaigns/build" element={<BuildCampaign />} />
            <Route path="/audience" element={<Audience />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

