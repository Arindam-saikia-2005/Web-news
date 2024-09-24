
import React from 'react'
import "./Footer.css";
import { Link} from 'react-router-dom';

function Footer() {
  return (
    <div className="first">
      <div className="second">
      <div className="resources">
        <h2>RESOURCES</h2>
        <br/>
        <p>News</p>
        <br/>
        <Link to="/about"><p>About</p></Link>
        <br/>
        <Link to="/contact"><p>Contact</p></Link>
      </div>
      <div className="follow">
        <h2>FOLLOW US</h2>
        <br/>
        <a href='https://github.com/'><p>Github</p></a>
        <br/>
        <p>Discord</p>
      </div>
      <div className="legal">
        <h2>LEGAL</h2>
        <br/>
        <p>Privacy Policy</p>
        <br/>
        <p>Terms & Conditions</p>
      </div>
      </div>
    </div>
  )
}

export default Footer;