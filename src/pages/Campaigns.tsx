import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockCampaigns } from '@/lib/mock-data';
import { CampaignTable } from '@/components/features/campaigns/CampaignTable';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export function Campaigns() {
  const navigate = useNavigate();
  const [campaigns] = useState(mockCampaigns);

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Campañas</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Gestiona tus campañas de marketing</p>
        </div>
        <Button onClick={() => navigate('/campaigns/build')}>
          <Plus className="h-4 w-4 mr-2" />
          Crear Campaña
        </Button>
      </div>

      <div className="bg-white dark:bg-sidebar-dark rounded-xl border border-gray-200 dark:border-white/10 shadow-sm overflow-hidden">
        <CampaignTable campaigns={campaigns} />
      </div>
    </div>
  );
}


