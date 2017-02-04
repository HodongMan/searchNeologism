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
      bads : 21,
      display : "none"
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handlePointUp = this.handlePointUp.bind(this);
    this.handlePointDown = this.handlePointDown.bind(this);
    this.handleSearchBoxHidden = this.handleSearchBoxHidden.bind(this);
  }

  handleSearchChange(searchText){

    this.setState({
      text : searchText,
      display : "block"
    });
  }

  handleSearchBoxHidden(){
    this.setState({
      display : "none"
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
    let style = {
      "display" : this.state.display
    };
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
          onClickHidden={this.handleSearchBoxHidden}
          textList = {this.state}
          style = {style}
        />
      </div>
    );
  }
}

export default SearchContainer;
