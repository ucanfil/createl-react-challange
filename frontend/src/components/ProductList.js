import React, { Component } from 'react';
import * as ProductsAPI from './ProductsAPI';
import Ads from './Ads';

class ProductList extends Component {
    state = {
        isLoading: false,
        hasMore: true,
        products: [],
        pageNum: 1
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
                    hasMore: state.products.length !== 500,
                    pageNum: state.pageNum + 1
                }))
            })
            .catch(err => console.log(err))
    }

    checkScrollPosition = () => {
        if (document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight === 0) {
            this.loadProducts()
        }
    }
    // FIXME:
    componentDidMount() {
		this.loadProducts()

        window.addEventListener('scroll', this.checkScrollPosition)
    }

    render() {
        return (
            <ul className="products_container">
                {this.state.products.map((product, i) => (
                    ((i + 1) % 20 === 0 && i !== 0) ? (<Ads key={i}/>) : (
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
        )
    }
}

export default ProductList;