import '../css/Header.css';
import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
              <div className="container">
                <div className="header-top">
                  <img
                    src="https://gamelandvn.com/wp-content/uploads/anh/2021/04/sbtc-esports-giai-the-thumbnail.jpg"
                    alt="logo"
                    className="logo"
                  />
                  <nav className="nav">
                    <ul className="menu">
                      <li className="menu-item">
                        <a href="/" className="menu-link">
                          HOME
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="/" className="menu-link">
                          TEAM
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="/" className="menu-link">
                          SHOP
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="/" className="menu-link">
                          ABOUT SBTC
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="/" className="menu-link">
                          NEWS
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          );
    }
}

