import React from 'react';
import Ads from './Ads';

/**
 * Function changes the price format into '$3.52' format
 * 
 * @param Number price
 * @return String
 */
const formatPrice = (price) => {
return `$${price/100}`
}

/**
 * Function calculates the difference between now and the date item added to the db
 * 
 * @param Number date 
 * @return String or Date object
 */
const calculateDate = (date) => {
    const oneWeekOfMilliSecs = 604800000
    const dateAdded = new Date(date)
    const diffMilliSecs = new Date() - dateAdded
    const days = diffMilliSecs/1000/60/60/24
    if (diffMilliSecs > oneWeekOfMilliSecs) {
        return date
    } else {
        return `${Math.round(days)} days ago`
    }
}

const ProductList = (props) => (
    <ul className="products_container">
        {props.products.map((product, i) => (
            ((i+1) % 20 === 0 && i !== 0) ? (<Ads />) : (
            <li
                className="product"
                key={product.id}
            >
                <div
                className="product_face"
                style={{fontSize: product.size}}
                >
                {product.face}
                </div>
                <div className="product_content">
                    <div className="product_price"><span className="label">Price: </span>{formatPrice(product.price)}</div>
                    <div className="product_size"><span className="label">Size: </span>{product.size}px</div>
                    <div className="product_date"><span className="label">Date added: </span>{calculateDate(product.date)}</div>
                </div>
            </li>)
        ))}
    </ul>
)

export default ProductList;