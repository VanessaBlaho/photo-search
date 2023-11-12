import SearchResults from './SearchResults';
import SearchBar from './Searchbar';
import { useSearchContext } from './contexts/SearchContext';
import { useState } from 'react';

export default function SearchParent() {
  const { dispatch } = useSearchContext();

  const handleSearch = (query) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
    dispatch({ type: 'SET_PAGE', payload: 1 });
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <SearchResults />
    </>
  );
}
