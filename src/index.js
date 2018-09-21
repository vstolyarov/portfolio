import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Navigation from './Navigation';
import Header from './Header';
import Services from './Services';
import BasicExample from './BasicExample';

class App extends Component {
    render() {
      return (
        <div className="App">
            <Navigation LogoTitle="Vladyslav Stolyarov"/>
            <Header title="Showcase Portfolio" button="Find out More"/>
            <Services/>
        </div>
      );
    }
  }

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<BasicExample />, document.getElementById('root'));
registerServiceWorker();
