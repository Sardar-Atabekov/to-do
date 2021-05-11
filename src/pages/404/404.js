import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./404.css";
class NotFound extends Component {
  render() {
    return (
      <div>
        <div className="NotFound">
          <div className="nf_block">
            {/* <h1 className="nf_h1">
              4
              <span className="nf_block">
                <img src={notFound} alt="notFound" className="nf_img" />
              </span>
              4
            </h1> */}
            <p className="nf_p">Страница в процессе разработки...</p>
            <Link to="/to-do/">
              <button className="nf_button">На главную</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
