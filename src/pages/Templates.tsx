import { useState } from 'react';
import {
  Search,
  Plus,
  Edit,
  Globe,
  Network,
} from 'lucide-react';

interface Template {
  id: string;
  name: string;
  category: 'Marketing' | 'Utility' | 'Authentication';
  status: 'approved' | 'pending' | 'rejected';
  language: string;
  content: string;
  lastUpdated: string;
  rejectionReason?: string;
}

const mockTemplates: Template[] = [
  {
    id: '1',
    name: 'summer_sale_2024',
    category: 'Marketing',
    status: 'approved',
    language: 'en_US',
    content: "Hola {{1}}! No te pierdas nuestra oferta exclusiva de verano. Obtén un 20% de descuento en tu próxima compra usando el código VERANO20.",
    lastUpdated: 'hace 2h',
  },
  {
    id: '2',
    name: 'order_confirmation',
    category: 'Utility',
    status: 'pending',
    language: 'pt_BR',
    content: 'Su compra {{1}} fue confirmada! Puede seguir el estado de su pedido haciendo clic en el botón de abajo.',
    lastUpdated: 'Enviado a Meta hace 1d',
  },
  {
    id: '3',
    name: 'auth_otp_code',
    category: 'Authentication',
    status: 'rejected',
    language: 'es_ES',
    content: 'Su código de verificación es {{1}}. No comparta este código con nadie por razones de seguridad.',
    lastUpdated: '',
    rejectionReason: 'Violación de política',
  },
  {
    id: '4',
    name: 'loyalty_reward_q4',
    category: 'Marketing',
    status: 'approved',
    language: 'en_US',
    content: '¡Has alcanzado el estado VIP! 🏆 Disfruta de tus nuevos beneficios y una recompensa especial en tu cuenta.',
    lastUpdated: 'hace 1 semana',
  },
  {
    id: '5',
    name: 'appointment_reminder',
    category: 'Utility',
    status: 'approved',
    language: 'fr_FR',
    content: 'Recordatorio: Su cita está programada para mañana a las {{1}}. Por favor confirme su asistencia.',
    lastUpdated: 'hace 3d',
  },
];

export function Templates() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const getStatusBadge = (status: Template['status']) => {
    switch (status) {
      case 'approved':
        return (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-current"></span>
            Aprobado
          </span>
        );
      case 'pending':
        return (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-current"></span>
            Pendiente
          </span>
        );
      case 'rejected':
        return (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400 flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-current"></span>
            Rechazado
          </span>
        );
    }
  };

  const filteredTemplates = mockTemplates.filter((template) => {
    const categoryMatch = selectedCategory === 'all' || template.category === selectedCategory;
    const statusMatch = selectedStatus === 'all' || template.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  return (
    <div className="p-8 space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-sidebar-dark p-4 rounded-xl shadow-sm border border-gray-200 dark:border-white/10">
        <div className="relative flex-1 w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            className="w-full bg-gray-100 dark:bg-white/5 border-none rounded-lg pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary"
            placeholder="Buscar plantillas por nombre..."
            type="text"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-gray-100 dark:bg-white/5 border-none rounded-lg text-sm px-4 py-2.5 focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
          >
            <option value="all">Todas las Categorías</option>
            <option value="Marketing">Marketing</option>
            <option value="Utility">Utilidad</option>
            <option value="Authentication">Autenticación</option>
          </select>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-gray-100 dark:bg-white/5 border-none rounded-lg text-sm px-4 py-2.5 focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
          >
            <option value="all">Todos los Estados</option>
            <option value="approved">Aprobado</option>
            <option value="pending">Pendiente</option>
            <option value="rejected">Rechazado</option>
          </select>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="bg-white dark:bg-sidebar-dark rounded-xl border border-gray-200 dark:border-white/10 shadow-sm overflow-hidden flex flex-col group"
          >
            <div className="p-5 flex-1">
              <div className="flex justify-between items-start mb-4">
                {getStatusBadge(template.status)}
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <Globe className="w-3 h-3" />
                  {template.language}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                {template.name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{template.category}</p>
              <div className="bg-gray-50 dark:bg-white/5 rounded-lg p-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                {template.content}
              </div>
            </div>
            <div className="px-5 py-3 bg-gray-50 dark:bg-white/5 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
              <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium italic">
                {template.rejectionReason ? (
                  <span className="text-red-500">{template.rejectionReason}</span>
                ) : (
                  template.lastUpdated
                )}
              </span>
              <button className="flex items-center gap-1 text-sm font-bold text-primary hover:underline">
                <Edit className="w-3 h-3" />
                Editar
              </button>
            </div>
          </div>
        ))}
        <button className="border-2 border-dashed border-gray-200 dark:border-white/10 rounded-xl flex flex-col items-center justify-center p-8 gap-3 text-gray-500 dark:text-gray-400 hover:border-primary hover:text-primary transition-all group">
          <div className="w-12 h-12 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            <Plus className="w-6 h-6" />
          </div>
          <span className="font-bold text-sm">Crear Nueva Plantilla</span>
        </button>
      </div>

      {/* Meta API Connection Status */}
      <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-sm">Conexión API de Meta WhatsApp</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              La sincronización de plantillas está habilitada. Los estados se actualizan automáticamente cada 15 minutos.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
              Última Sincronización
            </span>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Hoy, 10:42 AM</span>
          </div>
          <div className="h-8 w-px bg-primary/20"></div>
          <button className="px-4 py-2 bg-white dark:bg-sidebar-dark border border-primary/20 text-primary text-xs font-bold rounded-lg hover:bg-primary/5 transition-colors">
            Forzar Sincronización
          </button>
        </div>
      </div>
    </div>
  );
}

