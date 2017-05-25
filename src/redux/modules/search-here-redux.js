// action constants

const INPUT_SEARCH = 'input_search_product';
const TOGGLE_GRID_LIST = 'toggle_grid_list';

// action creators

export function setSearchTerm(searchTerm) {
  return {
    type: INPUT_SEARCH,
    searchTerm
  };
}

export function toggleGridList(payload) {
  return {
    type: TOGGLE_GRID_LIST,
    payload
  }
}

const DEFAULT_STATE = {
  searchTerm: '',
  grid: true
}

function searchReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case INPUT_SEARCH:
      return Object.assign({}, state, {
        searchTerm: action.searchTerm
      });
    case TOGGLE_GRID_LIST:
      return Object.assign({}, state, {
        grid: action.payload
      });
    default:
      return state;
  }
}

export default searchReducer;
