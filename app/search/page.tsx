"use client";

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

const supabase = createClient();

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]) as any[];
  const [searchCount, setSearchCount] = useState(0) as [number, any];
  const [requestTime, setRequestTime] = useState(null);
  
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const startTime = Date.now();
    
    const { data, count, error } = await supabase
      .from("tickers")
      .select("*", {count: 'exact'})
      .ilike("ticker", `%${e.target.value}%`)
      .ilike("name", `%${e.target.value}%`)
      .range(0, 99);

    const endTime = Date.now();
    const timeTaken = endTime - startTime;
    
    setSearchResults(data);
    setSearchCount(count);
    setRequestTime(timeTaken);
  }

  return (
    <div className="w-full max-w-2xl p-10">
      <h1>Search</h1>
      <input type="text" placeholder="Search" onChange={handleSearch} className="w-full py-3 px-4 rounded-xl"/>
      <p className="mt-1 text-gray-500">{searchResults?.length} of {searchCount} results ({requestTime}ms)</p>
      <ul className="mt-4 space-y-2">
        {searchResults.map((result, i) => (
          <li key={i}>{result.ticker} - {result.name}</li>
        ))}
      </ul>
    </div>
  );
}