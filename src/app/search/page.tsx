"use client";

import { liteClient as algoliasearch } from "algoliasearch/lite";
import { useEffect, useState } from "react";
import {
  Hits,
  InstantSearch,
  SearchBox,
  Configure,
  useHits,
  InstantSearchProps,
  useInstantSearch,
} from "react-instantsearch";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_APP_ID!,
  process.env.NEXT_PUBLIC_ALGORIA_SEARCH_API_KEY!
);

const Hit = ({ hit }: { hit: any }) => (
  <div className="flex flex-col transition-shadow">
    <div className="flex flex-col bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-gray-900">{hit.name}</h2>
      {/* <h3 className="text-sm text-gray-500 italic">{hit.slug}</h3>
      <h4 className="text-lg font-medium text-gray-700 mt-2">{hit.brand}</h4>
      <p className="text-gray-600 mt-2 line-clamp-3">{hit.description}</p> */}
    </div>
  </div>
);

// Recent searches
const ResentSearches = () => {
  const { results } = useInstantSearch();
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const storedSearches = localStorage.getItem("recentSearches");
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  useEffect(() => {
    if (results?.query) {
      setRecentSearches((prevSearches) => {
        const updatedSearches = [
          results.query,
          ...prevSearches.filter((search) => search !== results.query),
        ].slice(0, 5);
        localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
        return updatedSearches;
      });
    }
  }, [results?.query]);
};

const Search = () => {
  const [searchState, setSearchState] = useState<any>({});

  const onStateChange: InstantSearchProps["onStateChange"] = ({
    uiState,
    setUiState,
  }) => {
    // Custom logic
    setUiState(uiState);
    setSearchState(uiState);
  };
  return (
    <main className="w-full h-full z-50">
      <div className="mt-24">
        <InstantSearch
          searchClient={searchClient}
          initialUiState={searchState}
          onStateChange={onStateChange}
          indexName="products"
        >
          <SearchBox placeholder="Search for shoes, jackets, etc..." />
          {/* {searchState.query && <Hits hitComponent={Hit} />} */}
          <Hits hitComponent={Hit} />
        </InstantSearch>
      </div>
    </main>
  );
};

export default Search;
