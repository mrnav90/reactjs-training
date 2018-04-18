import React, {Component} from 'react';
import Logo from 'assets/images/logo.png';
import menu from './menu';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

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
              <img src={Logo} alt="" />
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
              {
                menu.map((item, idx) => {
                  return (
                    <li key={idx}
                      className={classNames({
                        'menu-item-has-children': item.subMenu && item.subMenu.length > 0,
                        'megamenu col-5 menu-item-has-children': !item.link && item.subMenu && item.subMenu.length > 0
                      })}>
                      <Link to={item.link ? item.link : ''}>{item.name}</Link>
                      {
                        item.link && item.subMenu && item.subMenu.length > 0 ? (
                          <ul className="sub-menu">
                            {
                              item.subMenu.map((subItem, key) => {
                                return (
                                  <li key={key}>
                                    <Link to={subItem.link}>{subItem.name}</Link>
                                  </li>
                                );
                              })
                            }
                          </ul>
                        ) : null
                      }
                      {
                        !item.link && item.subMenu && item.subMenu.length > 0 ? (
                          <ul className="sub-menu">
                            {
                              item.subMenu.map((subItem, key) => {
                                return (
                                  <li key={key}>
                                    <div className="post">
                                      <div className="post-media">
                                        <div className="image-wrap">
                                          <img src={subItem.image} alt="" />
                                        </div>
                                      </div>
                                      <div className="post-body">
                                        <div className="post-title">
                                          <h2>
                                            <Link to={subItem.link}>{subItem.title}</Link>
                                          </h2>
                                        </div>
                                        <span className="post-date">{subItem.date}</span>
                                      </div>
                                    </div>
                                  </li>
                                );
                              })
                            }
                          </ul>
                        ) : null
                      }
                    </li>
                  );
                })
              }
            </ul>
            <div className="search-box">
              <span className="icon-search">
                <i className="fa fa-search" />
              </span>
              <form>
                <input type="search"/>
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
