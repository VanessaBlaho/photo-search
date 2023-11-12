import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './contexts/SearchContext';
import RoutesSwitch from './RoutesSwitch';

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <>
          <RoutesSwitch />
        </>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
