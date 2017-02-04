import React, {Component} from "react";
import {Header, SearchBox, SearchList} from "../../components";
import * as service from "../../services/search";

class SearchContainer extends Component{

  constructor(props){
    super();

    this.state = {
      searchText : "",
      searchTextMeaning : "",
      text : "",
      meaning : "",
      goods : "",
      bads : "",
      audioUrl : "",
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
      searchText : searchText,
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
      this.setState({
        text : response.data.text,
        meaning : response.data.meaning,
        goods : response.data.goods,
        bads : response.data.bads,
        display : "block",
        audioUrl : response.data.audioUrl
      });
    })
    .catch( response => {
      console.log(response);
    });

  }

  handlePointUp(count){
    service.getSearchResult(this.state.searchText)
    .then( response => {
      let goods = this.state.goods + count;
      this.setState({
        goods : goods
      });
    })
    .catch( response => {
      console.log(response);
    });
  }

  handlePointDown(count){
    service.getSearchResult(this.state.searchText)
    .then( response => {
      let bads = this.state.bads + count;
      this.setState({
        bads : bads
      });
    })
    .catch( response => {
      console.log(response);
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
          textList={this.state}

          style = {style}
        />
      </div>
    );
  }
}

export default SearchContainer;
