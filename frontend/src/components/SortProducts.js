import React, { Component } from 'react';

class SortProducts extends Component {
    state = {
        query: 'size'
    }

    updateQuery(query) {
        this.setState({ query })
    }

    render() {
        return (
            <form>
                <label htmlFor="sortby">Sort By:</label>
                <select
                    name="sortby"
                    onChange={event => {
                        this.updateQuery(event.target.value)
                        this.props.onSortQuery(event.target.value)
                    }}
                >
                    <option default value="size">Size</option>
                    <option value="price">Price</option>
                    <option value="id">Id</option>
                </select>
            </form>
        )
    }
}

export default SortProducts