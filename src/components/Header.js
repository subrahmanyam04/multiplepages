import React from 'react';

import{Link} from "react-router-dom";

function Header() {
  return (
   
<div>    
<nav className="navbar navbar-expand-lg bar  ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
        <li class="nav-item ">
          {/* <a class="nav-link active font-monospace link-info" aria-current="page" href=".\home.html">Home</a> */}
          <Link to="/" className="nav-link active font-monospace link-dark" target="_self">Home</Link>
        </li>
        <li class="nav-item ">
          {/* <a class="nav-link font-monospace link-primary" href=".\About.html" target="_self"> About</a> */}
          <Link to="/About" className="nav-link  font-monospace link-dark" target="_self">About</Link>
        </li> 
        <li class="nav-item ">
          {/* <a class="nav-link font-monospace link-primary" href=".\catagory.html" target="_self"> Catagories</a> */}
          <Link to="/Products" className="nav-link  font-monospace link-dark" target="_self">Products</Link>
        </li> 
        <li class="nav-item ">
          {/* <a class="nav-link font-monospace link-primary" href=".\catagory.html" target="_self"> Catagories</a> */}
          <Link to="/Services" className="nav-link  font-monospace link-dark" target="_self">Services</Link>
        </li>
        <li class="nav-item ">
          {/* <a class="nav-link font-monospace link-primary" href=".\catagory.html" target="_self"> Catagories</a> */}
          <Link to="/Contact" className="nav-link  font-monospace link-dark" target="_self">Contact</Link>
        </li>     
      </ul> 
    </div>
  </div>
</nav>
</div>

  );
}
export default Header;