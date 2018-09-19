import React, { Component } from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Services extends Component {
  render() {
    return (
      <div className="Services">
        <h3>Services</h3>
        <h2>what we offer</h2>
        <div className="row">
            <div>
                
                Favorite Food: <FontAwesomeIcon icon={faCoffee} />

                
            </div>
        </div>
      </div>
    );
  }
}

export default Services;