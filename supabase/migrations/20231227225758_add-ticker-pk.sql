alter table "public"."tickers" drop constraint "tickers_pkey";

drop index if exists "public"."tickers_pkey";

alter table "public"."tickers" add column "uuid" uuid not null default uuid_generate_v4();

CREATE UNIQUE INDEX tickers_pkey ON public.tickers USING btree (uuid);

alter table "public"."tickers" add constraint "tickers_pkey" PRIMARY KEY using index "tickers_pkey";


