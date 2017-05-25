import React, { Component } from 'react';
import { Provider } from 'react-redux';
import preload from './data.json';

import ProductSearch from './container/ProductSearch';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ProductSearch products={preload.products} />
      </Provider>
    );
  }
}

export default App;
