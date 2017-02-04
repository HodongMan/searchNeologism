import React from "react";
import "./SearchRank.css";

const SearchRank = () => (
  <section id="search-list">
      <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center">
                  <img src="img/rank_title.png" alt="실시간 검색 순위" title="실시간 검색 순위"/>
                  <p className="search-list-assistant">신조어를 누르면 뜻을 알 수 있어요!</p>
              </div>
          </div>
          <div className="row search-list-in">
              <div>
                  <div className="col-md-6 portfolio-item">
                      <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                          <div className="search-item">
                              <div className="search-item-index">1</div>
                              <div className="search-item-content">
                                  <div className="search-item-text">
                                      <span>ㅇㅈ</span>
                                  </div>
                                  <div className="search-item-lanked">
                                      <img src="img/up.png" alt="up" title="up"/>
                                      <span className="red">1</span>
                                  </div>
                              </div>
                          </div>
                      </a>
                  </div>
                  <div className="col-md-6 portfolio-item">
                      <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                          <div className="search-item">
                              <div className="search-item-index">2</div>
                              <div className="search-item-content">
                                  <div className="search-item-text">
                                      <span>사바사</span>
                                  </div>
                                  <div className="search-item-lanked">
                                      <img src="img/down.png" alt="down" title="down"/>
                                      <span>1</span>
                                  </div>
                              </div>
                          </div>
                      </a>
                  </div>
                  <div className="col-md-6 portfolio-item">
                      <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                          <div className="search-item">
                              <div className="search-item-index">3</div>
                              <div className="search-item-content">
                                  <div className="search-item-text">
                                      <span>빼박캔트</span>
                                  </div>
                                  <div className="search-item-lanked">
                                      <img src="img/down.png" alt="down" title="down"/>
                                      <span>1</span>
                                  </div>
                              </div>
                          </div>
                      </a>
                  </div>
                  <div className="col-md-6 portfolio-item">
                      <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                          <div className="search-item">
                              <div className="search-item-index">4</div>
                              <div className="search-item-content">
                                  <div className="search-item-text">
                                      <span>시강</span>
                                  </div>
                                  <div className="search-item-lanked">
                                      <img src="img/none.png" alt="none" title="none"/>
                                      <span className="gray">0</span>
                                  </div>
                              </div>
                          </div>
                      </a>
                  </div>
                  <div className="col-md-6 portfolio-item">
                      <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                          <div className="search-item">
                              <div className="search-item-index">5</div>
                              <div className="search-item-content">
                                  <div className="search-item-text">
                                      <span>커엽다</span>
                                  </div>
                                  <div className="search-item-lanked">
                                      <img src="img/down.png" alt="down" title="down"/>
                                      <span>1</span>
                                  </div>
                              </div>
                          </div>
                      </a>
                  </div>
                  <div className="col-md-6 portfolio-item">
                      <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                          <div className="search-item">
                              <div className="search-item-index">6</div>
                              <div className="search-item-content">
                                  <div className="search-item-text">
                                      <span>버카</span>
                                  </div>
                                  <div className="search-item-lanked">
                                      <img src="img/down.png" alt="down" title="down"/>
                                      <span>1</span>
                                  </div>
                              </div>
                          </div>
                      </a>
                  </div>
              </div>

          </div>
      </div>
  </section>

);

export default SearchRank;
