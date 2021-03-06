import React from 'react'
import '../App.css';
import {
  Link
} from "react-router-dom";
export default function Navbar() {
    return (
        <div>
            <nav className="navbar  navbar-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Its Your Boy Prabh</Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{backgroundColor:'rgba(0,0,0,0.5)',borderRadius:'10px',paddingLeft:'3%',marginTop:'1%' }}>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor:'rgba(0,0,0,0.5)',borderRadius:'10px',paddingLeft:'3%' }}>
            <li><Link className="dropdown-item" to="/" style={{color:'white'}}>Action</Link></li>
            <li><Link className="dropdown-item" to="/" style={{color:'white'}}>Another action</Link></li>
            <li><hr className="dropdown-divider" to="/" style={{color:'white'}}/></li>
            <li><Link className="dropdown-item" to="/" style={{color:'white'}}>Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="/"  aria-disabled="true">Disabled</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}
