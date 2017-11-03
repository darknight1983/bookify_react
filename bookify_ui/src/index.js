import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'normalize.css'
import './index.css';
import './app.css';
import App from './app';
import RegisterForm from './register';
// var GOOGLE_API_KEY = AIzaSyDGbeWcI9o5f2jmPLff4wNkUgGdYHhVD_M


ReactDOM.render(<Router>
                  <Route path="/" component={App}/>
                  <Route path="/register" component={RegisterForm}/>
                </Router>, document.getElementById('root'));
