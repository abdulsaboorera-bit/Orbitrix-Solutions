import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from "../../Images/logo.png";
import { Flex } from 'antd';

const Navbar = () => {

const navigate = useNavigate();

  return (
 <header>

<nav className="navbar navbar-expand-lg w-100" style={{ backgroundColor: "#fdfaf3" }}>
  <div className="container-fluid px-4">
    <Link className="navbar-brand m-0" to="/">
      <img src={logo} alt="Logo" style={{ height: 'auto', maxWidth: '350px' ,marginLeft: '21%' }} />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
       
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/" style={{ fontSize: '2.0rem' }}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" style={{ fontSize: '2.0rem' }}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact" style={{ fontSize: '2.0rem' }}>Contact</Link>
        </li>
      </ul>

      <div className='nav-btns' role="search" style={{ display: 'flex', flexDirection: 'row', gap: '8px', marginRight: '10%' }}>
   


<button className='btn' onClick={() => navigate('/login')}>Login</button>
<button className='btn' onClick={() => navigate('/register')}>Register</button>


      </div>
    </div>
  </div>
</nav>

 </header>
 
  )
}

export default Navbar