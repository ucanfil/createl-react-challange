import React, { Component } from 'react';
import './App.css';
import getProducts from './components/ProductsAPI';

class App extends Component {
  state = {
    products: [],
    pageNum: 1
  }

  componentDidMount() {
    getProducts(this.state.pageNum).then(products => (
      this.setState({ products })
    ))
  }

  formatPrice(price) {
    return `$${price/100}`
  }

  render() {
    return (
      <div className="App">
        <header>
            <h1>Products Grid</h1>

            <p>Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.</p>

            <p>But first, a word from our sponsors:</p>
            <script>document.write('<img class="ad" src="/ads/?r=' + Math.floor(Math.random()*1000) + '"/>');</script>
        </header>

        <section class="products">
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
