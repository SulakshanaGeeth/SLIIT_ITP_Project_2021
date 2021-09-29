import React from "react";


function Header(){
   
    return(
       <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={{color:"red"}}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active"  href="/vali" aria-current="page">Login</a>
        
        <a className="nav-link" href="/notice/add/">Addnotices</a>
        <a className="nav-link" href="/notieboard">Notice Board</a>
        <a className="nav-link" href="/nav">Adminpanel</a>
        <a className="nav-link" href="/pdf">DownloadPdf</a>
       </div>
      </div>
      </div>
      </nav>


       </div>


    )
        

        
    

}

export default Header;