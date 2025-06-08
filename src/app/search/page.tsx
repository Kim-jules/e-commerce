"use client";

import { liteClient as algoliasearch } from "algoliasearch/lite";
import { useEffect, useRef, useState } from "react";
import {
  Hits,
  InstantSearch,
  SearchBox,
  useInstantSearch,
  type InstantSearchProps,
} from "react-instantsearch";
import { HiClock } from "react-icons/hi2";

// Initialize Algolia client
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_APP_ID!,
  process.env.NEXT_PUBLIC_ALGORIA_SEARCH_API_KEY!
);

// Individual search result card
const Hit = ({ hit }: { hit: any }) => (
  <div className="bg-white p-4 rounded shadow-sm">
    <h2 className="text-lg font-semibold text-gray-900">{hit.name}</h2>
    <h3 className="text-sm text-gray-500 italic">{hit.slug}</h3>
    <h4 className="text-md font-medium text-gray-700 mt-2">{hit.brand}</h4>
    <p className="text-sm text-gray-600 mt-2 line-clamp-3">{hit.description}</p>
  </div>
);

// Recent searches component
const RecentSearches = () => {
  const { indexUiState } = useInstantSearch();
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("recentSearches");
    if (saved) setRecentSearches(JSON.parse(saved));
  }, []);

  useEffect(() => {
    const query = indexUiState.query?.trim();
    if (!query) return;

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setRecentSearches((prev) => {
        const updated = [query, ...prev.filter((s) => s !== query)].slice(0, 5);
        localStorage.setItem("recentSearches", JSON.stringify(updated));
        return updated;
      });
    }, 500);
  }, [indexUiState.query]);

  const clearAll = () => {
    setRecentSearches([]);
    localStorage.removeItem("recentSearches");
  };

  const showRecent = recentSearches.length > 0 && !indexUiState.query;

  return showRecent ? (
    <div className="bg-gray-100 p-4 rounded-md">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2 text-gray-500">
          <HiClock />
          <span>Recent Searches</span>
        </div>
        <button
          onClick={clearAll}
          className="text-sm text-gray-700 hover:underline"
        >
          Clear All
        </button>
      </div>
      <ul>
        {recentSearches.map((search) => (
          <li key={search} className="py-1 cursor-pointer hover:text-blue-600">
            {search}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

// Main search component
const Search = () => {
  type SearchState = InstantSearchProps["initialUiState"] & {
    query?: string;
  };

  const [searchState, setSearchState] = useState<SearchState>({});
  const [isFocused, setIsFocused] = useState(false);

  const onStateChange: InstantSearchProps["onStateChange"] = ({
    uiState,
    setUiState,
  }) => {
    setUiState(uiState);
    setSearchState(uiState);
  };

  return (
    <main className="absolute z-50 w-full h-full bg-white">
      <div className="relative w-full">
        <InstantSearch
          searchClient={searchClient}
          indexName="products"
          initialUiState={searchState as InstantSearchProps["initialUiState"]}
          onStateChange={onStateChange}
        >
          <SearchBox
            placeholder="Search for shoes, jackets, etc..."
            autoFocus
            searchAsYouType
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            resetIconComponent={({ classNames }) => (
              <button className={classNames.resetIcon}>Reset</button>
            )}
          />

          {isFocused && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-md rounded-md p-4">
              {searchState.query ? (
                <Hits hitComponent={Hit} />
              ) : (
                <RecentSearches />
              )}
            </div>
          )}
        </InstantSearch>
      </div>
    </main>
  );
};

export default Search;
