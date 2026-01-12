import { useState } from 'react';
import type { Contact, Message } from '@/types';
import { getMessagesForContact } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

interface ChatListProps {
  contacts: Contact[];
  selectedContactId?: string;
  onSelectContact: (contactId: string) => void;
}

export function ChatList({ contacts, selectedContactId, onSelectContact }: ChatListProps) {
  return (
    <div className="w-80 border-r border-gray-200 overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold">Conversations</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {contacts.map((contact) => {
          const messages = getMessagesForContact(contact.id);
          const lastMessage = messages[messages.length - 1];
          const isSelected = selectedContactId === contact.id;

          return (
            <button
              key={contact.id}
              onClick={() => onSelectContact(contact.id)}
              className={cn(
                "w-full p-4 text-left hover:bg-gray-50 transition-colors",
                isSelected && "bg-gray-100"
              )}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="font-semibold truncate">{contact.name}</div>
                  {lastMessage && (
                    <div className="text-sm text-gray-600 truncate mt-1">
                      {lastMessage.content}
                    </div>
                  )}
                </div>
                {lastMessage && (
                  <div className="text-xs text-gray-500 ml-2">
                    {new Date(lastMessage.timestamp).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}


