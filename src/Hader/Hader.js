import React from 'react'
import {  BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom";
import About from '../About'
import Contact from '../Contact'
import Home from '../Home'
function Hader() {
    return (
        
        <Router>
            <div className="header">
            <ul className="navbar">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/contact">contact</Link></li>
            </ul>
            </div>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        </Switch>
       </Router>
        
    )
}

export default Hader
