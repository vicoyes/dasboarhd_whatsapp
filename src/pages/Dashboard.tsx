import { Users, Send, Eye, Zap, TrendingUp, PauseCircle, Megaphone, UserPlus, Workflow, Database } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="p-8 space-y-8">
        {/* KPI Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-sidebar-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total de Contactos</p>
              <Users className="text-gray-400 w-5 h-5" />
            </div>
            <p className="text-3xl font-extrabold">24,512</p>
            <div className="flex items-center gap-1 text-emerald-500 text-sm font-bold">
              <TrendingUp className="w-4 h-4" />
              <span>+12.5%</span>
              <span className="text-gray-400 font-normal ml-1">vs mes pasado</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-sidebar-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Mensajes Enviados</p>
              <Send className="text-gray-400 w-5 h-5" />
            </div>
            <p className="text-3xl font-extrabold">128,400</p>
            <div className="flex items-center gap-1 text-emerald-500 text-sm font-bold">
              <TrendingUp className="w-4 h-4" />
              <span>+5.2%</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-sidebar-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Tasa de Lectura</p>
              <Eye className="text-gray-400 w-5 h-5" />
            </div>
            <p className="text-3xl font-extrabold">84.2%</p>
            <div className="w-full bg-gray-100 dark:bg-white/10 h-1.5 rounded-full mt-2">
              <div className="bg-primary h-full rounded-full w-[84%]"></div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-sidebar-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-white/5 flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Campañas Activas</p>
              <Zap className="text-gray-400 w-5 h-5" />
            </div>
            <p className="text-3xl font-extrabold">12</p>
            <div className="flex items-center gap-1 text-amber-500 text-sm font-bold">
              <PauseCircle className="w-4 h-4" />
              <span>3 en pausa</span>
            </div>
          </div>
        </div>

        {/* Middle Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Section */}
          <div className="lg:col-span-2 bg-white dark:bg-sidebar-dark rounded-xl border border-gray-100 dark:border-white/5 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold">Rendimiento de Campañas</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Volumen Diario de Mensajes (Últimos 7 Días)</p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-xs font-bold border border-gray-200 dark:border-white/10 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5">Semanal</button>
                <button className="px-3 py-1.5 text-xs font-bold bg-primary/10 text-primary border border-primary/20 rounded-lg">Diario</button>
              </div>
            </div>
            <div className="h-64 flex flex-col">
              <svg className="flex-1 w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 500 150">
                <defs>
                  <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#e0001a" stopOpacity="0.2"></stop>
                    <stop offset="100%" stopColor="#e0001a" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <path d="M0,120 Q50,60 100,80 T200,40 T300,100 T400,60 T500,20 L500,150 L0,150 Z" fill="url(#chartGradient)"></path>
                <path d="M0,120 Q50,60 100,80 T200,40 T300,100 T400,60 T500,20" fill="none" stroke="#e0001a" strokeWidth="3"></path>
              </svg>
              <div className="flex justify-between pt-4 px-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Mon</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Tue</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Wed</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Thu</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Fri</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Sat</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Sun</span>
              </div>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="bg-white dark:bg-sidebar-dark rounded-xl border border-gray-100 dark:border-white/5 shadow-sm p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Actividad Reciente</h3>
              <button className="text-xs text-primary font-bold hover:underline">Ver Todo</button>
            </div>
            <div className="space-y-6 flex-1 overflow-y-auto pr-2">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center shrink-0">
                  <Megaphone className="text-blue-600 dark:text-blue-400 w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold">Promoción de Verano lanzada</p>
                  <p className="text-xs text-gray-500">Enviado a 4,200 contactos</p>
                  <span className="text-[10px] text-gray-400 mt-1">hace 2 minutos</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <UserPlus className="text-emerald-600 dark:text-emerald-400 w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold">Nuevo Lead Generado</p>
                  <p className="text-xs text-gray-500">Contacto: +1 (555) 012-3456</p>
                  <span className="text-[10px] text-gray-400 mt-1">hace 15 minutos</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Zap className="text-primary w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold">Respuesta Automática IA Enviada</p>
                  <p className="text-xs text-gray-500">Flujo: "Soporte al Cliente L1"</p>
                  <span className="text-[10px] text-gray-400 mt-1">hace 1 hora</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center shrink-0">
                  <Workflow className="text-purple-600 dark:text-purple-400 w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold">Flujo n8n Actualizado</p>
                  <p className="text-xs text-gray-500">Sincronización Shopify Webhook v2.1</p>
                  <span className="text-[10px] text-gray-400 mt-1">hace 3 horas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer / Status Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center">
                <Workflow className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Motor de Automatización n8n</h4>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <p className="text-xs text-emerald-600 font-medium">Conectado y Activo</p>
                </div>
              </div>
            </div>
            <button className="px-4 py-2 bg-white dark:bg-sidebar-dark border border-primary/20 text-primary text-xs font-bold rounded-lg hover:bg-primary/5 transition-colors">Gestionar Flujos</button>
          </div>
          <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Rendimiento del Sistema</h4>
                <p className="text-xs text-gray-500">Retraso de sincronización: <span className="text-slate-900 dark:text-white font-medium">120ms</span></p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-24 h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[98%]"></div>
              </div>
              <span className="text-[10px] font-bold text-gray-400">98% Salud</span>
            </div>
          </div>
        </div>
      </div>
  );
}


