import type { Campaign } from '@/types';

interface CampaignTableProps {
  campaigns: Campaign[];
}

export function CampaignTable({ campaigns }: CampaignTableProps) {
  const getStatusBadge = (status: Campaign['status']) => {
    switch (status) {
      case 'sending':
        return (
          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded uppercase">
            Enviando
          </span>
        );
      case 'scheduled':
        return (
          <span className="text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-500/10 px-2 py-0.5 rounded uppercase">
            Programada
          </span>
        );
      case 'completed':
        return (
          <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2 py-0.5 rounded uppercase">
            Completada
          </span>
        );
      case 'draft':
        return (
          <span className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded uppercase">
            Borrador
          </span>
        );
      default:
        return (
          <span className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded uppercase">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="overflow-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200 dark:border-white/10">
            <th className="h-12 px-6 py-4 text-gray-900 dark:text-gray-100 text-sm font-bold">Nombre</th>
            <th className="h-12 px-6 py-4 text-gray-900 dark:text-gray-100 text-sm font-bold">Estado</th>
            <th className="h-12 px-6 py-4 text-gray-900 dark:text-gray-100 text-sm font-bold">Enviados</th>
            <th className="h-12 px-6 py-4 text-gray-900 dark:text-gray-100 text-sm font-bold">Leídos</th>
            <th className="h-12 px-6 py-4 text-gray-900 dark:text-gray-100 text-sm font-bold">Programada</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-white/10">
          {campaigns.map((campaign) => (
            <tr key={campaign.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">{campaign.name}</td>
              <td className="px-6 py-4">
                {getStatusBadge(campaign.status)}
              </td>
              <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{campaign.stats.sent}</td>
              <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{campaign.stats.read}</td>
              <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                {campaign.scheduled_at
                  ? new Date(campaign.scheduled_at).toLocaleString('es-ES', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                  : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


