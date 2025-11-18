# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/77310ec3-8241-4e56-963a-dba9db9095a5

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/77310ec3-8241-4e56-963a-dba9db9095a5) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/77310ec3-8241-4e56-963a-dba9db9095a5) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

---

## Contact & Notification Features

This app now includes:

- Contact form for students to inquire or express interest before enrollment opens.
- Notification signup to subscribe for updates when the date and time are announced.

### Toggle Enrollment Flow

Set the following environment variable to control whether the enrollment form is shown:

- `VITE_ENROLLMENT_OPEN` = `true` to show the enrollment form
- `VITE_ENROLLMENT_OPEN` = `false` (or unset) to show the course page with contact + notification forms

Add to `.env`:

```
VITE_ENROLLMENT_OPEN=false
```

### Optional Supabase Integration

If you want inquiries and signups to be stored, configure Supabase:

Add to `.env`:

```
VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_PUBLISHABLE_KEY=<your-supabase-anon-key>
```

Create two tables in your Supabase project:

```sql
-- Inquiries from the contact form
create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- Notification signups
create table if not exists public.interest_signups (
  id uuid primary key default gen_random_uuid(),
  name text null,
  email text not null,
  created_at timestamptz not null default now()
);

-- Basic RLS example (adjust to your needs)
alter table public.inquiries enable row level security;
create policy "Allow inserts" on public.inquiries for insert using (true);

alter table public.interest_signups enable row level security;
create policy "Allow inserts" on public.interest_signups for insert using (true);
```

The Supabase client is available at `@/integrations/supabase/client`. The forms will insert into these tables and show toast feedback.
