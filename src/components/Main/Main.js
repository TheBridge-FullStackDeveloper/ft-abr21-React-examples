import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Products from '../../pages/Products';
import Staff from '../../pages/Staff';
import Location from '../../pages/Location';
import Contact from '../../pages/Contact';
import Login from '../../pages/Login/Login';
import Counter from '../../pages/Counter/Counter'
import './Main.scss';

export default class Main extends Component {
    render() {
        return (
            <main className='Main'>
                <div className="wrapper">
                    <Switch>
                        <Route path="/" component={Products} exact />
                        <Route path="/staff" component={Staff} />
                        <Route path="/location" component={Location} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/login" component={Login} />
                        <Route path="/Counter" component={Counter} />
                    </Switch>
                </div>
            </main>
        )
    }
}

