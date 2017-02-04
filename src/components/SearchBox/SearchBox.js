import React from "react";
import "./SearchBox.css";

const SearchBox = ({textList, onClickUp, onClickDown, style, onClickHidden}) => {
  return(
    <section id="search-box" style={style}>
        <div className="search-box-close" onClick={
            () => onClickHidden()
          }>
            <img src="img/close.png"/>
        </div>
        <div className="search-box-dec-wrap">
            <div className="search-box-dec">
                <div className="search-box-text">
                    <h3>{textList.text}</h3>
                    <p>{textList.meaning}</p>
                </div>
                <div className="search-box-btn">
                    <button onClick={
                      () => onClickUp(1)
                    }>
                        <img src="img/up.png" alt="up" title="up"/>
                        <p className="red">추천 <span>{textList.goods}</span></p>
                    </button>
                    <button onClick={
                      () => onClickDown(1)
                    }>
                        <img src="img/down.png" alt="down" title="down"/>
                        <p className="gray" >비추천 <span>{textList.bads}</span></p>
                    </button>
                </div>
            </div>
        </div>
    </section>
  );

};

export default SearchBox;
