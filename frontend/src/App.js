import React, { Component } from 'react';
import './App.scss';
import Ads from './components/Ads';
import ProductList from './components/ProductList';

class App extends Component {
	state = {
        products: []
	}

	componentDidMount() {
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

					<Ads />
				</header>

				<section className="products">
					<ProductList
						products={this.state.products}
					/>
				</section>
			</div>
		);
	}
}

export default App;
