

const searchReducer = (state, action) => {
    switch (action.type) {
      case 'SET_SEARCH_RESULTS':
        return { ...state, searchResults: action.payload };
      case 'SET_SEARCH_QUERY':
        return { ...state, searchQuery: action.payload };
      case 'SET_PAGE':
        return { ...state, page: action.payload };
      default:
        return state;
    }
  };
  
  export default searchReducer;
  