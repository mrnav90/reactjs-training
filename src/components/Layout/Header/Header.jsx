import React, {Component} from 'react';

export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header id="header" className="header header-responsive">
        <div className="container">
          <div className="logo text-center">
            <a href="index-2.html">
              <img src="images/logo.png" alt="" />
            </a>
          </div>
        </div>
        <nav className="pi-navigation" data-menu-responsive="1200">
          <div className="container">
            <div className="open-menu">
              <span className="item item-1" />
              <span className="item item-2" />
              <span className="item item-3" />
            </div>
            <div className="close-menu" />
            <ul className="navlist off-canvas">
              <li className="menu-item-has-children current-menu-parent">
                <a href="index-2.html">Home</a>
                <span className="submenu-toggle">
                  <i className="fa fa-angle-right" />
                </span>
                <ul className="sub-menu">
                  <li className="back-mb">
                    <a href="#">Back</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="grid.html">Grid</a>
                    <span className="submenu-toggle">
                      <i className="fa fa-angle-right" />
                    </span>
                    <ul className="sub-menu">
                      <li className="back-mb">
                        <a href="#">Back</a>
                      </li>
                      <li>
                        <a href="grid.html">Fullwidth</a>
                      </li>
                      <li>
                        <a href="grid-rightsidebar.html">Right sidebar</a>
                      </li>
                      <li>
                        <a href="grid-leftsidebar.html">Left sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="list.html">List</a>
                    <span className="submenu-toggle">
                      <i className="fa fa-angle-right" />
                    </span>
                    <ul className="sub-menu">
                      <li className="back-mb">
                        <a href="#">Back</a>
                      </li>
                      <li>
                        <a href="list.html">Fullwidth</a>
                      </li>
                      <li>
                        <a href="list-rightsidebar.html">Right sidebar</a>
                      </li>
                      <li>
                        <a href="list-leftsidebar.html">Left sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="timeline.html">Timeline</a>
                    <span className="submenu-toggle">
                      <i className="fa fa-angle-right" />
                    </span>
                    <ul className="sub-menu">
                      <li className="back-mb">
                        <a href="#">Back</a>
                      </li>
                      <li>
                        <a href="timeline.html">Fullwidth</a>
                      </li>
                      <li>
                        <a href="timeline-rightsidebar.html">Right sidebar</a>
                      </li>
                      <li>
                        <a href="timeline-leftsidebar.html">Left sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children current-menu-parent">
                    <a href="index-2.html">Standard</a>
                    <span className="submenu-toggle">
                      <i className="fa fa-angle-right" />
                    </span>
                    <ul className="sub-menu">
                      <li className="back-mb">
                        <a href="#">Back</a>
                      </li>
                      <li>
                        <a href="standard.html">Fullwidth</a>
                      </li>
                      <li className="current-menu-item">
                        <a href="index-2.html">Right sidebar</a>
                      </li>
                      <li>
                        <a href="standard-leftsidebar.html">Left sidebar</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="category.html">Category</a>
              </li>
              <li>
                <a href="category.html">Restaurant</a>
              </li>
              <li className="megamenu col-5 menu-item-has-children">
                <a href="category.html">Mega menu</a>
                <span className="submenu-toggle">
                  <i className="fa fa-angle-right" />
                </span>
                <ul className="sub-menu">
                  <li className="back-mb">
                    <a href="#">Back</a>
                  </li>
                  <li>
                    <div className="post">
                      <div className="post-media">
                        <div className="image-wrap">
                          <img src="images/popular-post/1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="post-body">
                        <div className="post-title">
                          <h2>
                            <a href="single.html">Ut sit amet massa</a>
                          </h2>
                        </div>
                        <span className="post-date">March 05, 2015</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="post">
                      <div className="post-media">
                        <div className="image-wrap">
                          <img src="images/popular-post/2.jpg" alt="" />
                        </div>
                      </div>
                      <div className="post-body">
                        <div className="post-title">
                          <h2>
                            <a href="single.html">Ut sit amet massa</a>
                          </h2>
                        </div>
                        <span className="post-date">March 05, 2015</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="post">
                      <div className="post-media">
                        <div className="image-wrap">
                          <img src="images/popular-post/3.jpg" alt="" />
                        </div>
                      </div>
                      <div className="post-body">
                        <div className="post-title">
                          <h2>
                            <a href="single.html">Ut sit amet massa</a>
                          </h2>
                        </div>
                        <span className="post-date">March 05, 2015</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="post">
                      <div className="post-media">
                        <div className="image-wrap">
                          <img src="images/popular-post/1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="post-body">
                        <div className="post-title">
                          <h2>
                            <a href="single.html">Ut sit amet massa</a>
                          </h2>
                        </div>
                        <span className="post-date">March 05, 2015</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="post">
                      <div className="post-media">
                        <div className="image-wrap">
                          <img src="images/popular-post/2.jpg" alt="" />
                        </div>
                      </div>
                      <div className="post-body">
                        <div className="post-title">
                          <h2>
                            <a href="single.html">Ut sit amet massa</a>
                          </h2>
                        </div>
                        <span className="post-date">March 05, 2015</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <a href="single.html">Single</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
            <div className="search-box">
              <span className="icon-search">
                <i className="fa fa-search" />
              </span>
              <form action="http://xgio.net/winters/GET">
                <input type="search" value="Search and hit enter" />
              </form>
            </div>
            <div className="share-box">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-dribbble" />
              </a>
              <a href="#">
                <i className="fa fa-pinterest" />
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
