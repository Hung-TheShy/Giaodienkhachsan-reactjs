import React, { Component } from "react";

// import react-router-dom
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/rooms">Phòng</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
