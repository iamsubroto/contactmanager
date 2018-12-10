import React from 'react';
import { Link } from 'react-router-dom'

const  Header = (props) => {
    const {branding} = props;
  return (                      
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-3">
    <div className="container">                                                                                       
      <a href="/" className="navbar-brand">{branding}</a>
      <div>
        <ul className="navbar-nav mr-auto">
        <Link to="/" className="nav-link"><span className="fas fa-home"></span> Home</Link>
        <Link to="/addContact" className="nav-link"><span className="fas fa-plus"></span> Add</Link>
        <Link to="/about" className="nav-link"><span className="fas fa-question"></span> About</Link>
        </ul>
      </div>
    </div>
    </nav>
  )
}
Header.defaultProps = {
  branding: "My Contacts"
}
export default Header;