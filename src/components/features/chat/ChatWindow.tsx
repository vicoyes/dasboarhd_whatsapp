import { useState } from 'react';
import type { Contact, Message } from '@/types';
import { getMessagesForContact, getContactById } from '@/lib/mock-data';
import { MessageBubble } from './MessageBubble';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

interface ChatWindowProps {
  contactId?: string;
}

export function ChatWindow({ contactId }: ChatWindowProps) {
  const [inputValue, setInputValue] = useState('');
  
  if (!contactId) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center text-gray-500">
          <p className="text-lg">Select a conversation to start chatting</p>
        </div>
      </div>
    );
  }

  const contact = getContactById(contactId);
  const messages = getMessagesForContact(contactId);

  const handleSend = () => {
    if (inputValue.trim()) {
      // In a real app, this would send the message
      console.log('Sending message:', inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Chat Header */}
      <div className="border-b border-gray-200 p-4">
        <div className="font-semibold">{contact?.name}</div>
        <div className="text-sm text-gray-600">{contact?.phone}</div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            contactName={contact?.name}
          />
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}


