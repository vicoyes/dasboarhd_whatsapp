# Project Context: WhatsApp Marketing Dashboard (React/Vite Edition)

## 1. Project Overview
We are building a **WhatsApp Marketing & CRM Platform** (SPA).
**Key Features:** Bulk campaigns, Unified Inbox (Chat), Contact management, and Automation (n8n).
**Current Phase:** **Frontend & UI Mockup**. Build the visual interface using hardcoded mock data first.
**Architecture:** Client-side React Application using Vite.

## 2. Tech Stack (Strict)
* **Build Tool:** Vite.
* **Framework:** React 18+ (TypeScript).
* **Routing:** `react-router-dom` (v6+).
* **Styling:** Tailwind CSS + **shadcn/ui** (Radix UI).
* **Icons:** `lucide-react`.
* **State Management:** React Hooks / Context.
* **Forms:** React Hook Form + Zod.
* **Backend:** Supabase (Auth, DB) - *Future integration, currently mocking*.

## 3. Design System & Branding (CRITICAL)
You must strictly adhere to the corporate color palette.
* **Primary Color (Action/Brand):** `#e2001a` (Red).
* **Sidebar:** `Black` (#000000) with White text.
* **Backgrounds:** `White` (#ffffff) or `Gray-50` (#f9fafb) for content areas.
* **UI Rules:**
    * **Buttons:** Primary buttons must use `bg-[#e2001a]`. Hover: `hover:bg-[#c00016]`.
    * **Active Links:** In the sidebar, the active route should have a subtle red accent or background `bg-white/10`.
    * **Rounded:** Use `rounded-md` (Standard shadcn radius).
    * **Typography:** Clean, sans-serif (Inter).

## 4. Directory Structure (src/)
Follow this strict component structure:

* **`/src`**:
    * `main.tsx`: Entry point.
    * `App.tsx`: Main Layout wrapper (Sidebar + Router Outlet).
    * **`/pages`**: Route Views.
        * `Dashboard.tsx`
        * `Chat.tsx` (The Inbox)
        * `Campaigns.tsx`
        * `Contacts.tsx`
        * `Settings.tsx`
    * **`/components`**:
        * **`/ui`**: Generic shadcn components (Button, Input, Table...).
        * **`/layout`**: `Sidebar.tsx`, `TopNav.tsx`.
        * **`/features`**:
            * `/chat`: `ChatWindow.tsx`, `ChatList.tsx`, `MessageBubble.tsx`.
            * `/campaigns`: `CampaignTable.tsx`, `CreateCampaignModal.tsx`.
    * **`/lib`**:
        * `utils.ts`: Tailwind generic merger.
        * `mock-data.ts`: **ALL** fake data (contacts, messages, stats).
    * **`/types`**: TypeScript interfaces (Mirroring the DB schema).

## 5. Database Schema (Blueprint for Types)
Use these fields to generate TypeScript interfaces (`/src/types/index.ts`).

```sql
-- 1. Contacts
create table contacts (
  id uuid,
  phone text, -- E.164
  name text,
  email text,
  tags text[], -- ['vip', 'lead']
  status text -- 'active', 'blocked'
);

-- 2. Campaigns
create table campaigns (
  id uuid,
  name text,
  status text, -- 'draft', 'scheduled', 'sending'
  stats jsonb, -- { sent: 10, read: 5 }
  scheduled_at timestamptz
);

-- 3. Messages (Inbox)
create table messages (
  id uuid,
  contact_id uuid,
  direction text, -- 'inbound', 'outbound'
  content text,
  status text, -- 'sent', 'read'
  timestamp timestamptz
);

-- 4. Webhooks
create table webhooks (
  id uuid,
  target_url text,
  events text[],
  is_active boolean
);