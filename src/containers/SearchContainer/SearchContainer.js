import React, {Component} from "react";
import {Header, SearchBox} from "../../components";
import * as service from "../../services/search";

class SearchContainer extends Component{

  constructor(props){
    super();

    this.state = {
      searchText : "",
      searchTextMeaning : "",
      goodsPoint : 42
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handlePointUpAndDown = this.handlePointUpAndDown.bind(this);
  }

  handleSearchChange(searchText){
    this.setState({
      searchText
    });
  }

  handleSearchClick(searchText){
    service.getSearchResult(this.state.searchText)
    .then( response => {
      console.log(response.statusText);
    })
    .catch( response => {
      console.log(response.statusText);
    });

  }

  handlePointUpAndDown(count){
    service.getSearchResult(this.state.searchText)
    .then( response => {
      this.setState({
        goodsPoint : this.state.goodsPoint + 1
      });
      console.log(this.state);
    })
    .catch( response => {
      console.log(response.statusText);
    });
  }

  render(){

    const meaning = "[명사] 확실히 그렇다고 여김";
    const goods = 42;
    const bads = 21;

    return (
      <div>
        <Header
          onClick={this.handleSearchClick}
          onChange={this.handleSearchChange}
          onKeyPress={this.handleKeyEnterPress}
        />
        <SearchBox
          onClick={this.handlePointUpAndDown}
          text={this.state.searchText}
          meaning={meaning}
          goods={this.state.goodsPoint}
          bads={bads}
        />
      </div>
    );
  }
}

export default SearchContainer;
