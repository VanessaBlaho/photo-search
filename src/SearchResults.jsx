

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSearchContext } from './contexts/SearchContext';
import keys from './keys';

export default function SearchResults() {
  const { state, dispatch } = useSearchContext();
  const apiKey = keys.YOUR_ACCESS_KEY;

  useEffect(() => {
    if (state.searchQuery) {
      const loadSearch = async () => {
        try {
          const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${state.searchQuery}&client_id=${apiKey}&per_page=12&page=${state.page}`
          );
          const data = await response.json();
          dispatch({ type: 'SET_SEARCH_RESULTS', payload: data.results });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      loadSearch();
    }
  }, [state.searchQuery, state.page]);

  const handleLoadMore = () => {
    dispatch({ type: 'SET_PAGE', payload: state.page + 1 });
  };

  const handleLoadPrevious = () => {
    dispatch({ type: 'SET_PAGE', payload: state.page - 1 });
  };

  return (
    <div className="search_results_container">
      <h2>Search Results</h2>
      <div className="search-mini">
        {state.searchResults.map((result) => (
          <div className="image_container" key={result.id}>
            <h3>
              Author: <Link to={`/author/${result.user.username}`}>{result.user.name}</Link>
            </h3>
            <p>Description: {result.alt_description}</p>
            <img src={result.urls.small} alt={result.alt_description} />
          </div>
        ))}
      </div>
      <br />
      <div className="button_div">
        <button onClick={handleLoadPrevious} disabled={state.page === 1}>
          Previous
        </button>
        <button onClick={handleLoadMore}>Next</button>
      </div>
      <br />
      Current Page: {state.page}
    </div>
  );
}

