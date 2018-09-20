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
                    <div class="list-group">
                        <a class="list-group-item" href="#"><ion-icon name="tv"></ion-icon>Movies</a>
                        <a class="list-group-item" href="#"><ion-icon name="logo-facebook"></ion-icon>Facebook</a>
                        <a class="list-group-item" href="#"><ion-icon name="logo-github"></ion-icon>Github</a>
                        <a class="list-group-item" href="#"><ion-icon name="help"></ion-icon>Questions</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;