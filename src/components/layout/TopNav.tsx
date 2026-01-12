import { Search, Bell, Plus } from 'lucide-react';

export function TopNav({ title = "Resumen del Panel" }: { title?: string }) {
  return (
    <header className="h-16 border-b border-gray-200 dark:border-white/10 bg-white dark:bg-sidebar-dark px-8 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="h-4 w-px bg-gray-300 dark:bg-white/20 mx-2"></div>
        <div className="flex items-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
          <a className="text-primary border-b-2 border-primary py-5" href="#">Resumen</a>
          <a className="hover:text-primary transition-colors py-5" href="#">Analíticas</a>
          <a className="hover:text-primary transition-colors py-5" href="#">Informes</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            className="w-full bg-gray-100 dark:bg-white/5 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary" 
            placeholder="Buscar campañas..." 
            type="text"
          />
        </div>
        <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors text-sm">
          <Plus className="w-4 h-4" />
          Crear Nueva Campaña
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 ring-2 ring-gray-100 dark:ring-white/10"></div>
      </div>
    </header>
  );
}


