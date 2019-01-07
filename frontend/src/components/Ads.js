import React from 'react';
import * as ProductsAPI from './ProductsAPI';

/**
 * Function generates random consecutively different numbers
 * 
 * @return Number
 */
const randomAdGenerator = () => {
    let previousAdNum
    do {
        previousAdNum = Math.floor(Math.random() * 10)
    } while (previousAdNum === randomAdGenerator.currentAdNum)
    randomAdGenerator.currentAdNum = previousAdNum
    return previousAdNum
}

/**
 * React stateless component as pure function
 */
const Ads = () => (
    <div className="advertisement_container">
        <img className="ad" src={`${ProductsAPI.API_URL}/ads/?r=${randomAdGenerator()}`} alt="advertisement"/>
    </div>
)

export default Ads;