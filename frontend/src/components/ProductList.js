import React, { Component } from 'react';
import * as ProductsAPI from './ProductsAPI';
import SortProducts from './SortProducts';
import Ads from './Ads';
import loadingLogo from '../loadingLogo.svg';

class ProductList extends Component {
    state = {
        isLoading: false,
        hasMore: true,
        products: [],
        pageNum: 1,
        prevY: 0,
        sortQuery: 'size'
    }
    /**
     * Function changes the price format into '$3.52' format
     * 
     * @param Number price
     * @return String
     */
    formatPrice(price) {
        return `$${price / 100}`
    }

    /**
     * Function calculates the difference between now and the date item added to the db
     * 
     * @param Number date
     * @return String or Date object
     */
    calculateDate(date) {
        const oneWeekOfMilliSecs = 604800000
        const dateAdded = new Date(date)
        const diffMilliSecs = new Date() - dateAdded
        const days = diffMilliSecs / 1000 / 60 / 60 / 24
        if (diffMilliSecs > oneWeekOfMilliSecs) {
            return date
        } else {
            return `${Math.round(days)} days ago`
        }
    }

	/**
	 * Function fetches data based on pagination and loads products
	 * @param Number pageNum
	 * 
	 * @return Void
	 */
	loadProducts = () => {
        this.setState({ isLoading: true })
		ProductsAPI.getProducts(this.state.pageNum)
			.then(products => {
                this.setState(state => ({
                    products: [...state.products, ...products],
                    isLoading: false,
                    hasMore: [...state.products, ...products].length !== 500,
                    pageNum: state.pageNum + 1
                }))
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0
        }
        // Create an observer
        this.observer = new IntersectionObserver(
            this.handleObserver.bind(this), //callback
            options
        )
        //Observ the `loadingRef`
        this.observer.observe(this.loadingRef)
    }

    // Callback function triggers while 600px left to the bottom of the page,
    // pre-fetches new products
    handleObserver(entities, observer) {
        const y = entities[0].boundingClientRect.y
        if (this.state.prevY > y) {
            this.loadProducts(this.state.pageNum)
        }
        this.setState({ prevY: y })
    }

    changeSortQuery = (sortQuery) => {
        this.setState({ sortQuery })
    }

    render() {
        return (
            <section className="products">
                <SortProducts
                    onSortQuery={this.changeSortQuery}
                />
                <ul className="products_container">
                    {this.state.products.map((product, i) => (
                        // Showing an random ad after every 20 product
                        ((i + 1) % 21 === 0 ) ? (<Ads key={i}/>) : (
                            <li
                                className="product"
                                key={product.id}
                            >
                                <div
                                    className="product_face"
                                    style={{ fontSize: product.size }}
                                >
                                    {product.face}
                                </div>
                                <div className="product_content">
                                    <div className="product_price"><span className="label">Price: </span>{this.formatPrice(product.price)}</div>
                                    <div className="product_size"><span className="label">Size: </span>{product.size}px</div>
                                    <div className="product_date"><span className="label">Date added: </span>{this.calculateDate(product.date)}</div>
                                </div>
                            </li>)
                    ))}
                </ul>
                <div
                    className="loading_container"
                    ref={loadingRef => this.loadingRef = loadingRef}
                >
                {this.state.isLoading && (
                    <div className="loading">Loading ... <img className="loading_logo" src={loadingLogo} alt="loading logo"></img></div>
                )}
                {!this.state.hasMore && (
                    <div className="end">~ end of catalogue ~</div>
                )}
                </div>
            </section>
        )
    }
}

export default ProductList;