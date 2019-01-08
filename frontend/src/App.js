import React, { Component } from 'react';
import './App.scss';
import Ads from './components/Ads';
import ProductList from './components/ProductList';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<h1>Products Grid</h1>

					<p>Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.</p>

					<p>But first, a word from our sponsors:</p>

					<Ads />
				</header>

				<ProductList />
			</div>
		);
	}
}

export default App;
