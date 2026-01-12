import type { Contact, Campaign, Message, DashboardStats } from '@/types';

export const mockContacts: Contact[] = [
  {
    id: '1',
    phone: '+1234567890',
    name: 'John Doe',
    email: 'john@example.com',
    tags: ['vip', 'lead'],
    status: 'active',
  },
  {
    id: '2',
    phone: '+1234567891',
    name: 'Jane Smith',
    email: 'jane@example.com',
    tags: ['customer'],
    status: 'active',
  },
  {
    id: '3',
    phone: '+1234567892',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    tags: ['lead'],
    status: 'active',
  },
  {
    id: '4',
    phone: '+1234567893',
    name: 'Alice Williams',
    email: 'alice@example.com',
    tags: ['vip'],
    status: 'blocked',
  },
  {
    id: '5',
    phone: '+1234567894',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    tags: ['customer'],
    status: 'active',
  },
];

export const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'Summer Sale 2024',
    status: 'sending',
    stats: { sent: 1250, read: 890, delivered: 1200 },
    scheduled_at: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    name: 'Product Launch',
    status: 'scheduled',
    stats: { sent: 0, read: 0 },
    scheduled_at: '2024-02-01T09:00:00Z',
  },
  {
    id: '3',
    name: 'Welcome Campaign',
    status: 'draft',
    stats: { sent: 0, read: 0 },
  },
  {
    id: '4',
    name: 'Holiday Greetings',
    status: 'completed',
    stats: { sent: 500, read: 420, delivered: 495 },
    scheduled_at: '2024-12-25T08:00:00Z',
  },
];

export const mockMessages: Message[] = [
  {
    id: '1',
    contact_id: '1',
    direction: 'inbound',
    content: 'Hello, I have a question about your product',
    status: 'read',
    timestamp: '2024-01-20T10:30:00Z',
  },
  {
    id: '2',
    contact_id: '1',
    direction: 'outbound',
    content: 'Hi John! How can I help you today?',
    status: 'read',
    timestamp: '2024-01-20T10:32:00Z',
  },
  {
    id: '3',
    contact_id: '2',
    direction: 'inbound',
    content: 'Thank you for the quick response!',
    status: 'read',
    timestamp: '2024-01-20T11:00:00Z',
  },
  {
    id: '4',
    contact_id: '3',
    direction: 'outbound',
    content: 'Check out our new features',
    status: 'delivered',
    timestamp: '2024-01-20T12:00:00Z',
  },
  {
    id: '5',
    contact_id: '5',
    direction: 'inbound',
    content: 'When will the next update be released?',
    status: 'read',
    timestamp: '2024-01-20T14:15:00Z',
  },
];

export const mockDashboardStats: DashboardStats = {
  totalContacts: 1250,
  activeCampaigns: 2,
  messagesToday: 342,
  responseRate: 78.5,
};

// Helper to get messages for a specific contact
export function getMessagesForContact(contactId: string): Message[] {
  return mockMessages.filter(msg => msg.contact_id === contactId);
}

// Helper to get contact by ID
export function getContactById(contactId: string): Contact | undefined {
  return mockContacts.find(contact => contact.id === contactId);
}


