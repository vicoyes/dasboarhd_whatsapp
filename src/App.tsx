import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Chat } from './pages/Chat';
import { Campaigns } from './pages/Campaigns';
import { BuildCampaign } from './pages/BuildCampaign';
import { Contacts } from './pages/Contacts';
import { Settings } from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/campaigns/build" element={<BuildCampaign />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

