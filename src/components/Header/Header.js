import React from "react";
import "./Header.css";

const Header = ({onClick, onChange}) => (
  <div>
      <header className="web">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="intro-text">
                          <span className="intro-text-assistant">궁금했던 신조어를 검색해 보세요!</span>
                          <img src="img/title.png" alt="신조어 변역기" title="신조어 변역기"/>
                      </div>
                      <div className="main-search-form">
                          <div>
                              <input type="text" placeholder="Ex) ㅇㅈ, 사바사, 세젤예, 커엽다 등" className="main-search-form-text"
                                onChange={
                                  (e) => onChange(e.target.value)
                                }
                                onKeyPress={
                                  (e) => {
                                    if(e.key==="Enter"){
                                      onClick()
                                    }
                                  }
                                }
                              />
                              <button className="main-search-form-btn"
                                onClick={
                                  () => onClick()
                                }
                              >
                                <img src="img/search.png" alt="search" title="search"
                              /></button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </header>

      <header className="mobile">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="intro-text">
                          <span className="intro-text-assistant">궁금했던 신조어를 검색해 보세요!</span>
                          <img src="img/m_title.png" alt="신조어 변역기" title="신조어 변역기"/>
                      </div>
                      <div className="main-search-form">
                          <div>
                              <input type="text" placeholder="Ex) ㅇㅈ, 사바사, 세젤예, 커엽다 등" className="main-search-form-text"/>
                              <button className="main-search-form-btn"><img src="img/search.png" alt="search" title="search"/></button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </header>
    </div>
);

export default Header;
