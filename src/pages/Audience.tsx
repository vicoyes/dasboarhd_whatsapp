import { useState } from 'react';
import { 
  Users, 
  Star, 
  Award, 
  Moon, 
  UserX, 
  RefreshCw, 
  Upload, 
  PlusCircle,
  Filter,
  UserPlus,
  Tag,
  Folder,
  MoreVertical,
  Download,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Trash2,
  Workflow,
  ShoppingBag,
  Move,
  MessageCircle,
  Headphones,
  Ban
} from 'lucide-react';
import { mockContacts } from '@/lib/mock-data';

interface Segment {
  id: string;
  name: string;
  count: number;
  icon: any;
}

const segments: Segment[] = [
  { id: 'all', name: 'Todos los Contactos', count: 1284, icon: Users },
  { id: 'leads', name: 'Nuevos Leads', count: 156, icon: Star },
  { id: 'vip', name: 'Clientes VIP', count: 84, icon: Award },
  { id: 'inactive', name: 'Usuarios Inactivos', count: 420, icon: Moon },
  { id: 'unsubscribed', name: 'No Suscritos', count: 12, icon: UserX },
];

const systemItems = [
  { id: 'sync', name: 'Historial de Sincronización', icon: RefreshCw },
  { id: 'import', name: 'Registros de Importación', icon: Upload },
];

export function Audience() {
  const [selectedSegment, setSelectedSegment] = useState('all');
  const [selectedContacts, setSelectedContacts] = useState<Set<string>>(new Set());

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedContacts(new Set(mockContacts.map(c => c.id)));
    } else {
      setSelectedContacts(new Set());
    }
  };

  const handleSelectContact = (contactId: string, checked: boolean) => {
    const newSelected = new Set(selectedContacts);
    if (checked) {
      newSelected.add(contactId);
    } else {
      newSelected.delete(contactId);
    }
    setSelectedContacts(newSelected);
  };

  const filteredContacts = mockContacts;

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Segments Sidebar */}
      <aside className="w-64 flex flex-col justify-between bg-white dark:bg-sidebar-dark border-r border-gray-200 dark:border-white/10 p-4 shrink-0 overflow-y-auto">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-4 px-3">
              Segmentos
            </h1>
            <div className="flex flex-col gap-1">
              {segments.map((segment) => {
                const Icon = segment.icon;
                const isActive = selectedSegment === segment.id;
                return (
                  <button
                    key={segment.id}
                    onClick={() => setSelectedSegment(segment.id)}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-primary/10 dark:bg-primary/20 text-primary'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      <span className={`text-sm ${isActive ? 'font-bold' : 'font-medium'}`}>
                        {segment.name}
                      </span>
                    </div>
                    <span className="text-xs font-medium">{segment.count}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-4 px-3">
              Sistema
            </h1>
            <div className="flex flex-col gap-1">
              {systemItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <button className="flex items-center justify-center gap-2 rounded-lg h-11 px-4 bg-primary text-white text-sm font-bold shadow-md shadow-primary/20 hover:bg-primary/90 transition-all">
          <PlusCircle className="w-5 h-5" />
          <span className="truncate">Crear Segmento</span>
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Page Heading */}
        <div className="flex flex-wrap justify-between items-center gap-4 p-8 pb-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold">
              Audiencia y Segmentos
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Gestiona tus contactos y segmentos para campañas automatizadas de WhatsApp.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-white dark:bg-sidebar-dark border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100 text-sm font-bold shadow-sm hover:bg-gray-50 dark:hover:bg-white/5">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </button>
            <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary/10 text-primary border border-primary/20 text-sm font-bold hover:bg-primary/20">
              <Upload className="w-4 h-4 mr-2" />
              Importar CSV
            </button>
          </div>
        </div>

        {/* Contact Grid Controls & Table */}
        <div className="flex-1 flex flex-col px-8 pb-8 overflow-hidden">
          {/* Table Toolbar */}
          <div className="flex items-center justify-between gap-4 py-3 bg-white dark:bg-sidebar-dark border border-gray-200 dark:border-white/10 rounded-t-xl px-4 shadow-sm">
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 p-2 px-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-gray-200 dark:hover:border-white/10">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filtrar</span>
              </button>
              <div className="h-6 w-px bg-gray-200 dark:bg-white/10"></div>
              <div className="flex gap-1">
                <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" title="Agregar Contacto">
                  <UserPlus className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" title="Etiquetar en Lote">
                  <Tag className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" title="Exportar Selección">
                  <Folder className="w-4 h-4" />
                </button>
              </div>
            </div>
            {/* Active Bulk Actions Toolbar */}
            {selectedContacts.size > 0 && (
              <div className="flex items-center gap-4 bg-primary/5 dark:bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-lg">
                <span className="text-primary text-sm font-bold">{selectedContacts.size} Seleccionados</span>
                <div className="h-4 w-px bg-primary/20"></div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1.5 text-primary text-xs font-bold bg-white dark:bg-sidebar-dark border border-primary/20 px-2 py-1 rounded shadow-sm hover:bg-primary/5">
                    <Workflow className="w-3 h-3" />
                    Asignar Remitente
                  </button>
                  <button className="flex items-center gap-1.5 text-primary text-xs font-bold bg-white dark:bg-sidebar-dark border border-primary/20 px-2 py-1 rounded shadow-sm hover:bg-primary/5">
                    <ShoppingBag className="w-3 h-3" />
                    Etiquetas
                  </button>
                  <button className="flex items-center gap-1.5 text-primary text-xs font-bold bg-white dark:bg-sidebar-dark border border-primary/20 px-2 py-1 rounded shadow-sm hover:bg-primary/5">
                    <Move className="w-3 h-3" />
                    Mover
                  </button>
                  <button className="flex items-center justify-center w-7 h-7 text-white bg-primary rounded shadow-md hover:bg-primary/90 transition-colors">
                    <CheckCircle className="w-3 h-3" />
                  </button>
                  <button className="flex items-center justify-center w-7 h-7 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors">
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Main Table */}
          <div className="flex-1 overflow-auto border-x border-b border-gray-200 dark:border-white/10 rounded-b-xl bg-white dark:bg-sidebar-dark">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead className="sticky top-0 bg-gray-50 dark:bg-sidebar-dark/50 z-10">
                <tr>
                  <th className="px-4 py-4 w-12 border-b border-gray-200 dark:border-white/10">
                    <input
                      type="checkbox"
                      checked={selectedContacts.size === filteredContacts.length && filteredContacts.length > 0}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="h-5 w-5 rounded border-gray-300 dark:border-white/20 text-primary focus:ring-primary/20 bg-white dark:bg-sidebar-dark"
                    />
                  </th>
                  <th className="px-6 py-4 text-gray-900 dark:text-gray-100 text-sm font-bold leading-normal border-b border-gray-200 dark:border-white/10">
                    Nombre
                  </th>
                  <th className="px-6 py-4 text-gray-900 dark:text-gray-100 text-sm font-bold leading-normal border-b border-gray-200 dark:border-white/10">
                    Teléfono
                  </th>
                  <th className="px-6 py-4 text-gray-900 dark:text-gray-100 text-sm font-bold leading-normal border-b border-gray-200 dark:border-white/10">
                    Cuenta Remitente
                  </th>
                  <th className="px-6 py-4 text-gray-900 dark:text-gray-100 text-sm font-bold leading-normal border-b border-gray-200 dark:border-white/10">
                    Etiquetas Activas
                  </th>
                  <th className="px-6 py-4 text-gray-900 dark:text-gray-100 text-sm font-bold leading-normal border-b border-gray-200 dark:border-white/10">
                    Segmento
                  </th>
                  <th className="px-6 py-4 border-b border-gray-200 dark:border-white/10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                {filteredContacts.map((contact, index) => {
                  const isSelected = selectedContacts.has(contact.id);
                  const initials = contact.name
                    .split(' ')
                    .map(n => n[0])
                    .join('')
                    .toUpperCase()
                    .slice(0, 2);
                  
                  // Mock sender accounts
                  const senderAccounts = ['WA_Sales_01', 'WA_Support_02', 'Unassigned'];
                  const senderAccount = index % 3 === 0 ? senderAccounts[0] : index % 3 === 1 ? senderAccounts[1] : senderAccounts[2];
                  const isUnassigned = senderAccount === 'Unassigned';
                  
                  // Mock segments
                  const segmentLabels = ['Cliente VIP', 'Nuevos Leads', 'Todos los Contactos'];
                  const segmentLabel = index % 3 === 0 ? segmentLabels[0] : index % 3 === 1 ? segmentLabels[1] : segmentLabels[2];
                  
                  return (
                    <tr
                      key={contact.id}
                      className={`hover:bg-gray-50 dark:hover:bg-white/5 transition-colors ${
                        isSelected ? 'bg-primary/5 dark:bg-primary/10' : ''
                      }`}
                    >
                      <td className="px-4 py-4">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={(e) => handleSelectContact(contact.id, e.target.checked)}
                          className={`h-5 w-5 rounded text-primary focus:ring-primary/20 bg-white dark:bg-sidebar-dark ${
                            isSelected ? 'border-primary' : 'border-gray-300 dark:border-white/20'
                          }`}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs">
                            {initials}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
                              {contact.name}
                            </span>
                            <span className="text-[10px] text-gray-500 dark:text-gray-400">
                              Última actividad: {index % 4 === 0 ? 'hace 2h' : index % 4 === 1 ? 'hace 1d' : index % 4 === 2 ? 'hace 3h' : 'hace 5m'}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {contact.phone}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className={`flex items-center gap-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-3 py-1.5 rounded-lg w-fit ${
                          isUnassigned ? 'opacity-50' : ''
                        }`}>
                          {isUnassigned ? (
                            <Ban className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          ) : senderAccount.includes('Sales') ? (
                            <MessageCircle className="w-4 h-4 text-primary" />
                          ) : (
                            <Headphones className="w-4 h-4 text-primary" />
                          )}
                          <span className="text-xs font-bold text-gray-900 dark:text-gray-100">
                            {senderAccount}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {contact.tags.slice(0, 2).map((tag) => {
                            const colorClasses: Record<string, string> = {
                              vip: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
                              lead: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
                              customer: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
                            };
                            const defaultClass = 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300';
                            return (
                              <span
                                key={tag}
                                className={`px-2 py-1 rounded text-[11px] font-bold ${
                                  colorClasses[tag] || defaultClass
                                }`}
                              >
                                {tag}
                              </span>
                            );
                          })}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            segmentLabel === 'Cliente VIP'
                              ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                              : segmentLabel === 'Nuevos Leads'
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          {segmentLabel}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors">
                          <MoreVertical className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Footer / Pagination */}
          <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-sidebar-dark border border-t-0 border-gray-200 dark:border-white/10 rounded-b-xl shadow-sm">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Mostrando 1-{filteredContacts.length} de {mockContacts.length} contactos
            </span>
            <div className="flex items-center gap-2">
              <button
                className="flex items-center justify-center size-8 rounded border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100 disabled:opacity-30"
                disabled
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="size-8 rounded bg-primary text-white text-xs font-bold">1</button>
              <button className="size-8 rounded text-gray-900 dark:text-gray-100 text-xs font-medium hover:bg-gray-50 dark:hover:bg-white/5">
                2
              </button>
              <button className="size-8 rounded text-gray-900 dark:text-gray-100 text-xs font-medium hover:bg-gray-50 dark:hover:bg-white/5">
                3
              </button>
              <span className="text-gray-500 dark:text-gray-400">...</span>
              <button className="size-8 rounded text-gray-900 dark:text-gray-100 text-xs font-medium hover:bg-gray-50 dark:hover:bg-white/5">
                107
              </button>
              <button className="flex items-center justify-center size-8 rounded border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
