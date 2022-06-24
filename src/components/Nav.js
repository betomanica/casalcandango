import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

export default function Nav(props) {

        return (<nav className="nav">
            <ul className='nav-links'>
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/Felinos">Felinos</Link></li>
              <li><Link to="/Receitas">Receitas</Link></li>
              <li><Link to="/Series">Séries</Link></li>
              <li><Link to="/Filmes">Filmes</Link></li>              
              <li><Link to="/Contato">Contato</Link></li>
          </ul>
        </nav>
        )
} 