<h1 align="center">Quiver</h1>

<p align="center">
 An open source finance analysis tool built with <a href="https://supabase.io">Supabase</a> and <a href="https://nextjs.org">Next.js</a>.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#stack"><strong>Stack</strong></a> ·
  <a href="#clone-and-run-locally"><strong>Clone and run locally</strong></a> ·
  <a href="#feedback-and-issues"><strong>Feedback and issues</strong></a>
  <a href="#more-supabase-examples"><strong>More Examples</strong></a>
</p>
<br/>

## Features

- all NYSX, NASDAQ, and TSX stocks (more to come)
- lightning fast search across all stocks
- stock detail pages with:
  - price history
  - financials
  - news
  - social media
  - and more

# Roadmap

- [ ] add more stocks
- [ ] add stock detail pages with price history, financials, news, social media, and more
- [ ] ai chat bot to ask questions about stocks
- [ ] stock comparison tool
- [ ] portfolio builder/tracker
- [ ] authentication

## Stack

- Works across the entire [Next.js](https://nextjs.org) stack
  - App Router
  - Pages Router
  - Middleware
  - Client
  - Server
  - It just works!
- supabase-ssr. A package to configure Supabase Auth to use cookies
- Styling with [Tailwind CSS](https://tailwindcss.com)
- Optional deployment with [Supabase Vercel Integration and Vercel deploy](#deploy-your-own)
  - Environment variables automatically assigned to Vercel project

## Clone and run locally

1. You'll first need a Supabase project which can be made [via the Supabase dashboard](https://database.new)

2. Create a Next.js app using the Supabase Starter template npx command

   ```bash
   git clone git@github.com:zlwaterfield/quiver.git
   ```

3. Use `cd` to change into the app's directory

   ```bash
   cd quiver
   ```

4. Rename `.env.local.example` to `.env.local` and update the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)

5. You can now run the Next.js local development server:

   ```bash
   npm run dev
   ```

   The starter kit should now be running on [localhost:3000](http://localhost:3000/).

> Check out [the docs for Local Development](https://supabase.com/docs/guides/getting-started/local-development) to also run Supabase locally.

## Feedback and issues

Please file feedback and issues over on the [quiver issues](https://github.com/zlwaterfield/quiver/issues/new).