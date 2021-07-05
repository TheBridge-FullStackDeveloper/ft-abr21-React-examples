import React, { Component } from 'react'
import  './Product.scss';



export default class Product extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             empresa:"Empresa guay SA",
             price:"N/A"
        }
    }
    
    render() {

        let {name,price,empresa} = this.props.data;
        return (
            <section className='Product'>
                <h3>Producto: {name}</h3>
                <p>Precio: {price || this.state.price} €</p>
                <p>Empresa: {empresa?empresa:this.state.empresa}</p>
                <button onClick={this.props.remove}>Borrar</button>
            </section>
        )
    }
}
