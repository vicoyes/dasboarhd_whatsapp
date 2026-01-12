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
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Campaigns</h1>
          <p className="text-gray-600 mt-2">Manage your marketing campaigns</p>
        </div>
        <Button onClick={() => navigate('/campaigns/build')}>
          <Plus className="h-4 w-4 mr-2" />
          Create Campaign
        </Button>
      </div>

      <div className="bg-white rounded-md border">
        <CampaignTable campaigns={campaigns} />
      </div>
    </div>
  );
}


