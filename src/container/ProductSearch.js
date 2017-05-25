import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../component/Header';
import GridItem from '../component/GridItem';
import ListItem from '../component/ListItem';

class ProductSearch extends Component {
  constructor (props) {
    super(props);

    this.renderGrid = this.renderGrid.bind(this);
    this.renderList = this.renderList.bind(this);
  }
  renderGrid (products) {
    return (
      <div>
        {products.map(product => {
          return (
            <GridItem
              key={product.code}
              name={product.name}
              description={product.description}
              price={product.price}
              poster={product.poster}
            />
          )
        })}
      </div>
    )
  }
  renderList (products) {
    return (
      <div>
        {products.map(product => {
          return (
            <ListItem
              key={product.code}
              name={product.name}
              description={product.description}
              price={product.price}
              poster={product.poster}
            />
          )
        })}
      </div>
    )
  }
  render () {
    const { grid, searchTerm, products } = this.props;
    var filteredProducts = products.filter(product => {
      return `${product.name} ${product.description}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0;
    });
    return (
      <div>
        <Header/>
        <hr/>
        <section className="content-product">
          {grid ? this.renderGrid(filteredProducts) : this.renderList(filteredProducts)}
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  show: state.show,
  grid: state.grid,
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(ProductSearch);
