import React, { Component } from 'react';
import Ads from './Ads';

class ProductList extends Component {

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
    // FIXME:
    // window.onscroll = () => {
    //     console.log('Scrolling...')
    // }

    render() {
        return (
            <ul className="products_container">
                {this.props.products.map((product, i) => (
                    ((i + 1) % 20 === 0 && i !== 0) ? (<Ads />) : (
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