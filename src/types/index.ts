export interface Contact {
  id: string;
  phone: string; // E.164 format
  name: string;
  email?: string;
  tags: string[];
  status: 'active' | 'blocked';
}

export interface Campaign {
  id: string;
  name: string;
  status: 'draft' | 'scheduled' | 'sending' | 'completed';
  stats: {
    sent: number;
    read: number;
    delivered?: number;
  };
  scheduled_at?: string; // ISO timestamp
}

export interface Message {
  id: string;
  contact_id: string;
  direction: 'inbound' | 'outbound';
  content: string;
  status: 'sent' | 'delivered' | 'read';
  timestamp: string; // ISO timestamp
}

export interface Webhook {
  id: string;
  target_url: string;
  events: string[];
  is_active: boolean;
}

export interface DashboardStats {
  totalContacts: number;
  activeCampaigns: number;
  messagesToday: number;
  responseRate: number;
}


