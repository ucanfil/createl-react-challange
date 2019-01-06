import React, { Component } from 'react';
import './App.scss';
import * as ProductsAPI from './components/ProductsAPI';

class App extends Component {
  state = {
    products: [],
    pageNum: 1
  }

  componentDidMount() {
    ProductsAPI.getProducts(this.state.pageNum).then(products => (
      this.setState({ products })
    ))
  }

  /**
   * Function changes the price format into '$3.52' format
   * 
   * @param Number price
   * @return String
   */
  formatPrice(price) {
    return `$${price/100}`
  }

  /**
   * Function generates random consecutively different numbers
   * 
   * @return Number
   */
  randomAdGenerator() {
    let previousAdNum
    do {
      previousAdNum = Math.floor(Math.random() * 10)
    } while (previousAdNum === this.randomAdGenerator.currentAdNum)
    this.randomAdGenerator.currentAdNum = previousAdNum
    return previousAdNum
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Products Grid</h1>

          <p>Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.</p>

          <p>But first, a word from our sponsors:</p>
          <img className="ad" src={`${ProductsAPI.API_URL}/ads/?r=${this.randomAdGenerator()}`} alt="advertisement"/>
          <img className="ad" src={`${ProductsAPI.API_URL}/ads/?r=${this.randomAdGenerator()}`} alt="advertisement"/>
        </header>

        <section className="products">
          <ul>
            {this.state.products.map((product, i) => (
              i < 10 && (
                <li
                  key={product.id}
                  style={{fontSize: product.size}}
                >
                  <span>{product.face}</span>
                  <span>{this.formatPrice(product.price)}</span>
                  <br />
                  <span>{product.size}</span>
                </li>
              )
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
