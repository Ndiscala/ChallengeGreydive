import React from 'react';
import '../header/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
        <nav style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    margin: '40px' }}>
            
                    <Link to="/cliente/viamo" >
                      <button className="button" style={{verticalAlign: 'middle'}}>
                          <span>
                              Viamo 
                          </span>
                      
                      </button>
                    </Link>
                    
                    <Link to="/cliente/nebula">
                      <button className="button" style={{verticalAlign: 'middle'}}>
                          <span>
                              Nebula 
                          </span>
                      </button>   

                    </Link>            
        </nav>

    </header>
  )
}

export default Navbar;