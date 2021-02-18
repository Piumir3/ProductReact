import React, { Component } from 'react';
import ProductItem from './ProductItem';

class Products extends Component {
    render() {

        return this.props.products.map((product) => (           //props.products = in app.js //.map((product) = any variable name 
            <ProductItem key={product.Product_ID} product={product} deleteProduct={this.props.deleteProduct}/>
        ));
    }
}

export default Products;