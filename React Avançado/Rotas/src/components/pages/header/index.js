import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component{


    render(){
        return(
            <div>
                <h1>Meu projeto | Header</h1>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link> <br />
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </ul>
                <hr />
            </div>
            
        )
    }
}

export default Header;