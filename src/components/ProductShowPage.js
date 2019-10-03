import React, { Component } from 'react';
import productData from './oneProductData';
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';

class ProductShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: { ...productData }
        };
    }
    render() {
        return (
            <div>
                <h1>Product</h1>
                <ProductDetails
                    {...this.state.product}
                />

                <ReviewList reviews={this.state.product.reviews} />
            </div>
        );
    }
}

export default ProductShowPage;