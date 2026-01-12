import { useState } from 'react';
import { mockContacts } from '@/lib/mock-data';
import { ChatList } from '@/components/features/chat/ChatList';
import { ChatWindow } from '@/components/features/chat/ChatWindow';

export function Chat() {
  const [selectedContactId, setSelectedContactId] = useState<string | undefined>();

  return (
    <div className="flex h-[calc(100vh)]">
      <ChatList
        contacts={mockContacts}
        selectedContactId={selectedContactId}
        onSelectContact={setSelectedContactId}
      />
      <ChatWindow contactId={selectedContactId} />
    </div>
  );
}

