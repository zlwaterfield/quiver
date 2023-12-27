create table "public"."tickers" (
    "ticker" text not null,
    "name" text not null,
    "currency" text not null,
    "exchange" text not null,
    "mic_code" text,
    "country" text not null,
    "type" text not null,
    "sub_type" text,
    "sector" text,
    "industry" text,
    "employees" bigint,
    "website" text,
    "description" text,
    "ceo" text,
    "address" text,
    "city" text,
    "zip" bigint,
    "state" text,
    "phone" text
);


alter table "public"."tickers" enable row level security;

CREATE UNIQUE INDEX tickers_pkey ON public.tickers USING btree (ticker);

alter table "public"."tickers" add constraint "tickers_pkey" PRIMARY KEY using index "tickers_pkey";


