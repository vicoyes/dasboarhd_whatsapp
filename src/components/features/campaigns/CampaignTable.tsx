import type { Campaign } from '@/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface CampaignTableProps {
  campaigns: Campaign[];
}

export function CampaignTable({ campaigns }: CampaignTableProps) {
  const getStatusVariant = (status: Campaign['status']) => {
    switch (status) {
      case 'sending':
        return 'default';
      case 'scheduled':
        return 'secondary';
      case 'completed':
        return 'outline';
      default:
        return 'outline';
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Sent</TableHead>
          <TableHead>Read</TableHead>
          <TableHead>Scheduled At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {campaigns.map((campaign) => (
          <TableRow key={campaign.id}>
            <TableCell className="font-medium">{campaign.name}</TableCell>
            <TableCell>
              <Badge variant={getStatusVariant(campaign.status)}>
                {campaign.status}
              </Badge>
            </TableCell>
            <TableCell>{campaign.stats.sent}</TableCell>
            <TableCell>{campaign.stats.read}</TableCell>
            <TableCell>
              {campaign.scheduled_at
                ? new Date(campaign.scheduled_at).toLocaleString()
                : '-'}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}


