CREATE INDEX idx_tickers_name ON public.tickers USING btree (name);

CREATE INDEX idx_tickers_ticker ON public.tickers USING btree (ticker);

create policy "Enable read access for all users"
on "public"."tickers"
as permissive
for select
to public
using (true);



