import React from 'react';
import Button from 'react-bootstrap/Button'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header>
      <div className="row jumbotron">
          <div className="column-1">
            <div className="jumbotron-major">
              Jess White
            </div> 
            <h1>
              Web Developer
            </h1>
            <h4>"All my wire sculptures start from the same loop." 
              </h4>
              <h4> - 
              <a href="https://ruthasawa.com/"> Ruth Asawa</a></h4>
              <Button className="header-button" href="https://github.com/Jess-White/"><i className="fa fa-2x fa-github-square" aria-hidden="true"></i></Button>
              <Button className="header-button" href="https://www.linkedin.com/in/jess-white-chicago/"><i className="fa fa-2x fa-linkedin-square" aria-hidden="true"></i></Button>  
          </div>
          <div className="column-2">
            <img src="/jess_headshot.jpg" alt="headshot"/>
          </div>
      </div>
    </header>
  );
}

export default Header;

