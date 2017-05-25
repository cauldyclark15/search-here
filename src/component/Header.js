import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/modules/search-here-redux';

class Header extends Component {
  constructor (props) {
    super(props);
    
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleSetGrid = this.handleSetGrid.bind(this);
    this.handleSetList = this.handleSetList.bind(this);
  }
  handleClickSearch () {
    this.props.setSearchTerm(this.search.value);
  }
  handleSetGrid () {
    this.props.toggleGridList(true);
  }
  handleSetList () {
    this.props.toggleGridList(false);
  }
  render () {
    return (
      <header className="search-header">
        <h3 className="logo">Search Here!</h3>
        <div className="input-group search-input-button">
          <input 
            ref={node => { this.search = node }}
            type="text"
            className="form-control"
          />
          <span className="input-group-btn">
            <button onClick={this.handleClickSearch} className="btn btn-default">Search</button>
          </span>
        </div>
        <div className="btn-group grid-list-toggle" role="group">
          <button onClick={this.handleSetGrid} type="button" className="btn btn-success">Grid</button>
          <button onClick={this.handleSetList} type="button" className="btn btn-info">List</button>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps, actions)(Header);
