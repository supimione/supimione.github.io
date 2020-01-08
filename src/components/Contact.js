import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Contact.css';

class Contact extends Component{
    render(){
        return(
            <section className="contact-section">
                <h3 className="Heading">Contact</h3>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <p>It is a long established fact that a reader will bedistracted by the readable content of a page when looking at its layout. The point ofusing Lorem Ipsum is that it has a more-or-less normal distribution of letters, asopposed to using 'Content here,content here', making it look like readable English.
                        </p>
                        <ul className="list-inline">
                            <li><i className="fa fa-envelope-o" aria-hidden="true"></i>supratim0003@gmail.com</li>
                                <li><i className="fa fa-phone" aria-hidden="true"></i>+91 9933606242</li>
                                <li><i className="fa fa-globe" aria-hidden="true"></i>Kolkata, India</li>
                            </ul>
                    </div>
                </div>   
            </section>
        );
    }
}

export default Contact;