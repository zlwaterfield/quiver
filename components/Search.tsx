"use client";

import { Database } from "@/supabase/database.types";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useState } from "react";

const supabase = createClient();

export const Search = () => {
  const [searchResults, setSearchResults] = useState<Database['public']['Tables']['tickers']['Row'][]>([]);
  const [searchCount, setSearchCount] = useState(0) as [number, any];
  const [requestTime, setRequestTime] = useState<number | null>();
  
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const startTime = Date.now();

    if (!e.target.value || e.target.value.length === 0) {
      setSearchResults([]);
      setSearchCount(0);
      setRequestTime(null);
      return;
    }
    
    const { data, count, error } = await supabase
      .from("tickers")
      .select("*", {count: 'exact'})
      .ilike("ticker", `%${e.target.value}%`)
      .ilike("name", `%${e.target.value}%`)
      .range(0, 14);

    const endTime = Date.now();
    const timeTaken = endTime - startTime;

    if (error || !data) {
      console.error(error || "No data returned");
      return;
    }
    
    setSearchResults(data);
    setSearchCount(count);
    setRequestTime(timeTaken);
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <input type="text" placeholder="Search" onChange={handleSearch} className="w-full py-3 px-4 rounded-xl border"/>
      <p className="mt-1.5 text-gray-500">{searchResults?.length} of {searchCount} results ({requestTime}ms)</p>
      <ul className="mt-4 space-y-2">
        {searchResults.map((result, i) => (
          <li key={i}>
            <Link href={`/ticker/${result.ticker}`} className="hover:underline">
              {result.ticker} - {result.name} ({result.exchange})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}