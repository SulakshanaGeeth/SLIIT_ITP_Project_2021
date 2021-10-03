import React from "react";


function Header(){

 return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <a className="navbar-brand" href="#" style={{color:"red"}} >Imax Institute</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/profile">Profile <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="/class">
        
        Courses</a>
        <a className="nav-item nav-link" href="/payment">Payment</a>
        <a className="nav-item nav-link" href="/add">Request</a>
      
    </div>
  </div>
</nav>
 )

}

export default Header;

