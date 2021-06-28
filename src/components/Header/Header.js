import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>Super App React. Fecha: {new Date(Date.now()).toDateString()}</h1>
            </header>
        )
    }
}
