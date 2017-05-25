import { createStore, compose } from 'redux';
import searchReducer from './modules/search-here-redux';

const store = createStore(
  searchReducer,
  compose(
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
  )
);

export default store;
