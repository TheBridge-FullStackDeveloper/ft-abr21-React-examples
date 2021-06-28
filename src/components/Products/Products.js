import React, { Component } from 'react'
import Product from '../Product/Product'
import data from '../../data.json'

export default class Products extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"--",
            price:"--",
            products:data // array de objetos [{},{},{},{}]
        }
    }
    
    addProduct = (product) => {
        let {name,price,empresa} = product
        this.setState(product)
        this.setState({products:[...this.state.products,product]})

        alert(`Producto añadido. Nombre:${name} Precio:${price} Empresa:${empresa}`)
    }

    renderProducts = () => this.state.products
                            .map((product,i) => <Product data={product} key={i} remove={()=>this.removeOneProduct(i)}/>)
    
    removeAllProducts = () => this.setState({products:[]})

    removeOneProduct = (i) =>{
        let filteredArray = this.state.products.filter((item, j) => i !== j);
        this.setState({products:filteredArray});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let name = event.target.elements.name.value
        let price = event.target.elements.price.value
        let empresa = event.target.elements.empresa.value

        this.addProduct({name,price,empresa});
      }
     
    render() {
        return (
            <article>
                <h2>Lista de productos</h2>

                <form onSubmit={this.handleSubmit}>

                    <label>Name:</label><br/>
                    <input type="text" id="name" name="name"/><br/>
                    
                    <label>Price:</label><br/>
                    <input type="number" id="price" name="price"/><br/>
                    
                    <label >Empresa:</label><br/>
                    <input type="text" id="empresa" name="empresa"/><br/><br/>
                    
                    <input type="submit" value="Enviar"/>
                </form> 

                {this.renderProducts()}

                {/* <button onClick={this.addProduct}>Añadir producto</button> */}
                <p>Último producto añadido: {this.state.name}</p>
                <button onClick={this.removeAllProducts}>Borrar todo</button>
            </article>
        )
    }
}
