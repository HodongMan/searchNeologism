import React, {Component} from "react";
import {Header, SearchBox, SearchList} from "../../components";
import * as service from "../../services/search";

class SearchContainer extends Component{

  constructor(props){
    super();

    this.state = {
      searchText : "",
      searchTextMeaning : "",
      text : "인정",
      meaning : "[명사] 확실히 그렇다고 여김",
      goods : 42,
      bads : 21
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handlePointUp = this.handlePointUp.bind(this);
    this.handlePointDown = this.handlePointDown.bind(this);
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

  handlePointUp(count){
    service.getSearchResult(this.state.searchText)
    .then( response => {
      let goods = this.state.goods + count;
      this.setState({
        goods : goods
      });
      console.log(response.statusText);
    })
    .catch( response => {
      console.log(response.statusText);
    });
  }

  handlePointDown(count){
    service.getSearchResult(this.state.searchText)
    .then( response => {
      let bads = this.state.bads + count;
      this.setState({
        bads : bads
      });
      console.log(response.statusText);
    })
    .catch( response => {
      console.log(response.statusText);
    });
  }

  render(){

    return (
      <div>
        <Header
          onClick={this.handleSearchClick}
          onChange={this.handleSearchChange}
          onKeyPress={this.handleKeyEnterPress}
        />
        <SearchBox
          onClickUp={this.handlePointUp}
          onClickDown={this.handlePointDown}
          textList = {this.state}
        />
      </div>
    );
  }
}

export default SearchContainer;
