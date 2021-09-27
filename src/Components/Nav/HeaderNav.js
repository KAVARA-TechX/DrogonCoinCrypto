import React from 'react';
import logo from '../../DROGONLogo.jpg';

const HeaderNav = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ margin: '0px', padding: "0px 15px 0px 0px" }}>
      <div className="parallelogram2">
        <div className="unskew-nav">
          <img src={logo} className="logo" alt="Drogon" />
          <a style={{ fontSize: '42px', fontWeight: '400' }} className="navbar-brand" href="#">Drogon</a>
        </div>
      </div>
      <div className="parallelogram3"></div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Ecosystem</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Buy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Baby Groot</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">More</a>
          </li>
        </ul>
        <div>
          <form className="d-flex">
            <button className="button" type="submit">Buy Now</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default HeaderNav;