import React, { Component } from "react";
import Product from "./Product";
import data from "../../data.json";
import "./Products.scss";

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "--",
      price: "--",
      products: data, // array de objetos [{},{},{},{}]
    };
  }

  addProduct = (product) => {
    this.setState(product);
    this.setState({ products: [...this.state.products, product] });

    /* alert(
      `Producto añadido. Nombre:${name} Precio:${price} Empresa:${empresa}`
    ); */
  };

  renderProducts = () =>
    this.state.products.map((product, i) => (
      <Product data={product} key={i} remove={() => this.removeOneProduct(i)} />
    ));

  removeAllProducts = () => this.setState({ products: [] });

  removeOneProduct = (i) => {
    let filteredArray = this.state.products.filter((item, j) => i !== j);
    this.setState({ products: filteredArray });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let name = event.target.elements.name.value;
    let price = event.target.elements.price.value;
    let empresa = event.target.elements.empresa.value;

    this.addProduct({ name, price, empresa });
  };

  render() {
    return (
      <article className="Products">
        <h2>Lista de productos</h2>

        <form className="add-item-form" onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" id="name" name="name" />

          <label>Price:</label>
          <input type="number" id="price" name="price" />

          <label>Empresa:</label>
          <input type="text" id="empresa" name="empresa" />

          <input type="submit" value="Enviar" />
        </form>

        <div className="container">
          {this.renderProducts()}
        </div>

        <p>Último producto añadido: {this.state.name}</p>

        <button onClick={this.removeAllProducts}>Borrar todo</button>
      </article>
    );
  }
}
