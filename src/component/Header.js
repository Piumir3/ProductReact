import React from 'react';
import './Header.css'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Header() {
    return (
        <div className='ui main container'>
            <div className="header">
                Product
                <br /><br />
                <Switch>
                    <Link to="/Form">Add   </Link>
                </Switch>

                <Switch>
                    <Link to="/Header">View</Link>
                </Switch>

            </div>
        </div>


    )
}



export default Header;

