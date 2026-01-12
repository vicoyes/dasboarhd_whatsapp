import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Edit, 
  Clock, 
  Search, 
  PlusCircle, 
  Smile, 
  X,
  HelpCircle,
  Video,
  Phone,
  MoreVertical,
  Paperclip,
  Camera,
  Mic
} from 'lucide-react';

export function BuildCampaign() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'template' | 'custom'>('template');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>('flash-sale');
  const [messageContent, setMessageContent] = useState(`Hi {{name}}! 👋 

Get ready for our biggest sale yet! For the next 24 hours, enjoy {{sale_percent}} OFF everything in our store.

Shop now before it's gone: https://store.link/deals

Reply STOP to opt-out.`);
  const [variables, setVariables] = useState<string[]>(['name', 'sale_percent']);

  const characterCount = messageContent.length;
  const maxCharacters = 1024;

  const removeVariable = (variable: string) => {
    setVariables(variables.filter(v => v !== variable));
    setMessageContent(messageContent.replace(new RegExp(`{{${variable}}}`, 'g'), ''));
  };

  return (
    <main className="flex-1 flex flex-col overflow-hidden" style={{ minHeight: '100vh', height: '100vh' }}>
      {/* Header & Stepper */}
      <header className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 px-8 py-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Build Campaign</h2>
            <p className="text-sm text-gray-500 dark:text-zinc-400">Step 3: Craft your message content for your audience.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-zinc-800 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
            <HelpCircle className="w-4 h-4" />
            View Guidelines
          </button>
        </div>

        {/* Stepper Component */}
        <div className="flex items-center max-w-3xl mx-auto">
          <div className="flex flex-col items-center flex-1">
            <div className="flex items-center w-full">
              <div className="size-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                <Check className="w-4 h-4" />
              </div>
              <div className="h-1 flex-1 bg-green-500"></div>
            </div>
            <span className="text-xs mt-2 font-medium text-green-500 uppercase">Details</span>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="flex items-center w-full">
              <div className="size-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                <Check className="w-4 h-4" />
              </div>
              <div className="h-1 flex-1 bg-primary"></div>
            </div>
            <span className="text-xs mt-2 font-medium text-green-500 uppercase">Audience</span>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="flex items-center w-full">
              <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white">
                <Edit className="w-4 h-4" />
              </div>
              <div className="h-1 flex-1 bg-gray-200 dark:bg-zinc-800"></div>
            </div>
            <span className="text-xs mt-2 font-medium text-primary uppercase">Content</span>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="flex items-center w-full">
              <div className="size-8 rounded-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center text-gray-400">
                <Clock className="w-4 h-4" />
              </div>
              <div className="w-0"></div>
            </div>
            <span className="text-xs mt-2 font-medium text-gray-400 dark:text-zinc-500 uppercase">Schedule</span>
          </div>
        </div>
      </header>

      {/* Builder Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Side: Editor */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {/* Tab Selector */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm overflow-hidden">
            <div className="flex border-b border-gray-200 dark:border-zinc-800">
              <button
                onClick={() => setActiveTab('template')}
                className={`flex-1 px-6 py-4 text-sm font-bold transition-colors ${
                  activeTab === 'template'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-zinc-300'
                }`}
              >
                Select Template
              </button>
              <button
                onClick={() => setActiveTab('custom')}
                className={`flex-1 px-6 py-4 text-sm font-bold transition-colors ${
                  activeTab === 'custom'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-zinc-300'
                }`}
              >
                Custom Message
              </button>
            </div>
            <div className="p-6">
              {activeTab === 'template' ? (
                <>
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 focus:ring-primary focus:border-primary"
                      placeholder="Search templates..."
                      type="text"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      onClick={() => setSelectedTemplate('flash-sale')}
                      className={`p-4 rounded-lg border-2 cursor-pointer flex flex-col gap-1 transition-colors ${
                        selectedTemplate === 'flash-sale'
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded uppercase">
                          Marketing
                        </span>
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          selectedTemplate === 'flash-sale'
                            ? 'bg-primary border-primary'
                            : 'border-gray-300'
                        }`}></div>
                      </div>
                      <h4 className="font-bold text-sm">Flash Sale Announcement</h4>
                      <p className="text-xs text-gray-500 dark:text-zinc-400 line-clamp-2 italic">
                        Hi {'{{name}}'}, big news! We're launching a flash sale today just for you...
                      </p>
                    </div>
                    <div
                      onClick={() => setSelectedTemplate('order-confirmation')}
                      className={`p-4 rounded-lg border-2 cursor-pointer flex flex-col gap-1 transition-colors ${
                        selectedTemplate === 'order-confirmation'
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold text-gray-500 bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded uppercase">
                          Utility
                        </span>
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          selectedTemplate === 'order-confirmation'
                            ? 'bg-primary border-primary'
                            : 'border-gray-300'
                        }`}></div>
                      </div>
                      <h4 className="font-bold text-sm">Order Confirmation</h4>
                      <p className="text-xs text-gray-500 dark:text-zinc-400 line-clamp-2 italic">
                        Your order #{'{{order_id}}'} has been confirmed and is being processed.
                      </p>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>

          {/* Content Editor */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Message Content</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 transition-colors flex items-center gap-1">
                  <PlusCircle className="w-3 h-3" />
                  Insert Variable
                </button>
                <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 transition-colors flex items-center gap-1">
                  <Smile className="w-3 h-3" />
                  Emoji
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase mb-2">
                  Variables in use
                </label>
                <div className="flex flex-wrap gap-2">
                  {variables.map((variable) => (
                    <span
                      key={variable}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center gap-1"
                    >
                      {`{{${variable}}}`}
                      <button
                        onClick={() => removeVariable(variable)}
                        className="hover:bg-primary/20 rounded-full p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <textarea
                  value={messageContent}
                  onChange={(e) => setMessageContent(e.target.value)}
                  className="w-full p-4 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 focus:ring-primary focus:border-primary resize-none font-display text-sm leading-relaxed"
                  placeholder="Write your WhatsApp message here..."
                  rows={8}
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400">
                  {characterCount} / {maxCharacters} characters
                </div>
              </div>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900/30 rounded-lg flex gap-3">
                <HelpCircle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-yellow-700 dark:text-yellow-500 leading-normal">
                  Ensure your variables match the contact data exactly. WhatsApp may reject messages with empty or invalid variables.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Preview */}
        <div className="w-[400px] bg-gray-100 dark:bg-zinc-950 border-l border-gray-200 dark:border-zinc-800 flex flex-col items-center justify-center p-8">
          <div className="mb-4 text-center">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Live Preview</span>
          </div>
          {/* iPhone Mockup */}
          <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800 overflow-hidden">
            {/* Dynamic Island Style Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-black z-20 rounded-b-2xl"></div>
            <div className="w-full h-full rounded-[2rem] bg-white overflow-hidden flex flex-col">
              {/* WhatsApp Header */}
              <div className="bg-[#075e54] text-white p-4 pt-10 flex items-center gap-3">
                <ArrowLeft className="w-4 h-4" />
                <div className="size-8 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-bold leading-tight">Brand Name Official</h5>
                  <p className="text-[10px] opacity-80">Business Account</p>
                </div>
                <div className="flex gap-3">
                  <Video className="w-4 h-4" />
                  <Phone className="w-4 h-4" />
                  <MoreVertical className="w-4 h-4" />
                </div>
              </div>
              {/* Chat Area */}
              <div className="flex-1 bg-[#e5ddd5] p-4 space-y-4 overflow-y-auto" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%23d4c5b9' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)' /%3E%3C/svg%3E")`
              }}>
                <div className="flex justify-center">
                  <span className="bg-blue-100 dark:bg-blue-900/40 text-[10px] text-blue-800 dark:text-blue-300 px-3 py-1 rounded-md shadow-sm text-center">
                    Messages are end-to-end encrypted.
                  </span>
                </div>
                {/* Incoming Message Bubble */}
                <div className="max-w-[85%] bg-white rounded-lg p-3 shadow-sm relative">
                  <div className="absolute -left-1 top-0 w-3 h-3 bg-white" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
                  <p className="text-sm text-gray-800 leading-snug whitespace-pre-wrap">
                    {messageContent.replace(/\{\{(\w+)\}\}/g, (match, varName) => {
                      const replacements: Record<string, string> = {
                        name: 'Alex',
                        sale_percent: '40%',
                        order_id: '#12345'
                      };
                      return replacements[varName] || match;
                    })}
                  </p>
                  <div className="flex justify-end items-center gap-1 mt-1">
                    <span className="text-[10px] text-gray-400">10:42 AM</span>
                  </div>
                </div>
              </div>
              {/* Input Bar Mockup */}
              <div className="p-2 bg-gray-100 flex items-center gap-2">
                <div className="flex-1 bg-white rounded-full px-4 py-1.5 flex items-center gap-2">
                  <Smile className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-400 flex-1">Message</span>
                  <Paperclip className="w-4 h-4 text-gray-400" />
                  <Camera className="w-4 h-4 text-gray-400" />
                </div>
                <div className="size-8 rounded-full bg-[#128c7e] flex items-center justify-center">
                  <Mic className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      <footer className="bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate('/campaigns')}
          className="flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold text-gray-600 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 rounded-lg text-sm font-bold border border-primary text-primary hover:bg-primary/5 transition-colors">
            Save Draft
          </button>
          <button className="px-8 py-2 rounded-lg text-sm font-bold bg-primary text-white hover:bg-red-700 shadow-md transition-colors flex items-center gap-2">
            Next: Schedule
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </main>
  );
}
