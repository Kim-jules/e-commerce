import React from "react";
{
  /* Import React InstantSearch */
}
import { liteClient as algoliasearch } from "algoliasearch/lite";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_APP_ID!,
  process.env.NEXT_PUBLIC_ALGORIA_SEARCH_API_KEY!
);

const Hit = ({ hit }: { hit: any }) => (
  <div>
    <h2>{hit.name}</h2>
    <h3>{hit.slug}</h3>
    <h4>{hit.brand}</h4>
    <p>{hit.description}</p>
  </div>
);

const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="products">
      <SearchBox placeholder="Search for shoes, jackets, etc..." />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
};

export default Search;
