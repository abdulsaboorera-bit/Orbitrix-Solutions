import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Images/logo.png";

const Navbar = () => {
  return (
    <header>
      <nav className="site-nav navbar navbar-expand-lg w-100">
        <div className="container-fluid px-4">
          <Link className="navbar-brand m-0" to="/">
            <img src={logo} alt="Orbitrix Solutions logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/terms-and-conditions">Terms</Link>
              </li>
            </ul>

            <div className="nav-btns d-flex ms-lg-3 align-items-center gap-2">
              <Link className="btn nav-cta" to="/contact">Get a Quote</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar