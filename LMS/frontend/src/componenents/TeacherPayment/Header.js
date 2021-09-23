import React from "react";
import {Link} from 'react-router-dom';

function Header(){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-itNameem active">
            
              <Link to="/WithdrawHome" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add">Create Bank</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/update/:id">Update Bank</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/selectbank/:id">Select Bank</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/withdraw">withdraw payment</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/pendingPayments">Pending Payments</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/test">Test</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/test2">Test2</a>
            </li>
          </ul>
        </div>
      </nav>  

    )
}
export default Header;