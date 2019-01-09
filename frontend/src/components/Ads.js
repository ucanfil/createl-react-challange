import React, { Component } from 'react';
import * as ProductsAPI from './ProductsAPI';

class Ads extends Component {
    state = {
        adNum: 0,
    }

    componentDidMount() {
        this.randomAdGenerator()
    }

    /**
     * Function generates random consecutively different numbers
     * 
     * @return Number
     */
    randomAdGenerator = () => {
        let currentAdNum
        do {
            currentAdNum = Math.floor(Math.random() * 10)
        } while (currentAdNum === this.state.adNum)
        this.setState({ adNum: currentAdNum })
        return this.state.adNum
    }

    render() {
        return (
            <div className="advertisement_container">
                <img className="ad" src={`${ProductsAPI.API_URL}/ads/?r=${this.state.adNum}`} alt="advertisement"/>
            </div>
        )
    }
}

export default Ads;