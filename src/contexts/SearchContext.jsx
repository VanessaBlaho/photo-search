
import React, { createContext, useReducer, useContext } from 'react';
import searchReducer from './searchReducer';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, {
    searchResults: [],
    searchQuery: '',
    page: 1,
  });

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
};

export { SearchProvider, useSearchContext };
