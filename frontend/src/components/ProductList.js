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
                <div><span className="label">Price: </span>{formatPrice(product.price)}</div>
                <div className="product_size"><span className="label">Size: </span>{product.size}px</div>
                </div>
            </li>)
        ))}
    </ul>
)

export default ProductList;