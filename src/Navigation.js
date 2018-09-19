import React, { Component } from 'react';
import './Navigation.css'
class Navigation extends Component {
    render() {
        const sections=['Home', 'Services', 'Portfolio', 'About', 'Contact']
        const NavLinks=sections.map(section=>{
            return (
            <li><a href={'#' + section}>{section}</a></li>
            )
        });
      return (
            <nav >
                <h2 className="logo">
                    React Project
                </h2>
                
                <ul>
                    {NavLinks}
                </ul>
            </nav>
      );
    }
  }
export default Navigation;
