import React, { Component } from 'react';
import Products from '../Products/Products';
import './Main.scss';

export default class Main extends Component {
    render() {
        return (
            <main className='Main'>
                <div className="wrapper">
                     <Products/> 
                </div>
            </main>
        )
    }
}

