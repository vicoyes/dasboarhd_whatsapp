import { mockContacts } from '@/lib/mock-data';

export function Contacts() {
  const getStatusBadge = (status: 'active' | 'blocked') => {
    switch (status) {
      case 'active':
        return (
          <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2 py-0.5 rounded uppercase">
            Activo
          </span>
        );
      case 'blocked':
        return (
          <span className="text-xs font-bold text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-500/10 px-2 py-0.5 rounded uppercase">
            Bloqueado
          </span>
        );
    }
  };

  const getTagBadge = (tag: string) => {
    const tagLabels: Record<string, string> = {
      vip: 'VIP',
      lead: 'Lead',
      customer: 'Cliente',
    };

    const colorClasses: Record<string, string> = {
      vip: 'text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-500/10',
      lead: 'text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-500/10',
      customer: 'text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10',
    };

    const defaultClass = 'text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5';
    const colorClass = colorClasses[tag] || defaultClass;

    return (
      <span
        key={tag}
        className={`text-xs font-bold px-2 py-0.5 rounded uppercase ${colorClass}`}
      >
        {tagLabels[tag] || tag}
      </span>
    );
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Contactos</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Gestiona tu base de datos de contactos</p>
        </div>
      </div>

      <div className="bg-white dark:bg-sidebar-dark rounded-xl border border-gray-200 dark:border-white/10 shadow-sm overflow-hidden">
        <div className="overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-white/10">
                <th className="h-12 px-6 py-4 text-gray-900 dark:text-gray-100 text-sm font-bold">Nombre</th>
                <th className="h-12 px-6 py-4 text-gray-900 dark:text-gray-100 text-sm font-bold">Teléfono</th>
                <th className="h-12 px-6 py-4 text-gray-900 dark:text-gray-100 text-sm font-bold">Email</th>
                <th className="h-12 px-6 py-4 text-gray-900 dark:text-gray-100 text-sm font-bold">Etiquetas</th>
                <th className="h-12 px-6 py-4 text-gray-900 dark:text-gray-100 text-sm font-bold">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-white/10">
              {mockContacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">{contact.name}</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{contact.phone}</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{contact.email || '-'}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1 flex-wrap">
                      {contact.tags.map((tag) => getTagBadge(tag))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(contact.status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


