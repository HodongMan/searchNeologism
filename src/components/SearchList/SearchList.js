import React from "react";

const SearchList = ({text, meaning, goods, bads, onClick}) => (
  <div className="search-box-dec">
      <div className="search-box-text">
          <h3>{text}</h3>
          <p>{meaning}</p>
      </div>
      <div className="search-box-btn">
          <button onClick={
            () => onClick()
          }>
              <img src="img/up.png" alt="up" title="up"/>
              <p className="red">추천 <span>{goods}</span></p>
          </button>
          <button onClick={
            () => onClick()
          }>
              <img src="img/down.png" alt="down" title="down"/>
              <p className="gray" >비추천 <span>{bads}</span></p>
          </button>
      </div>
  </div>
);

export default SearchList;
