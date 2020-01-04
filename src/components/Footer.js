import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer className="footer-section">
                <div>
                <Link to="#" target="_blank">Designed &amp; Developed by Supratim Das</Link>
                </div>
            </footer>
        );
    }
}

export default Footer;