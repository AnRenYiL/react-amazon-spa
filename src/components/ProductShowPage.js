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
        this.deleteReview = this.deleteReview.bind(this);
    }
    deleteReview(reviewId) {
        this.setState((state) => {
            return {
                product: {
                    ...state.product,
                    reviews: state.product.reviews.filter((review) => review.id !== reviewId)
                }
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Product</h1>
                <ProductDetails
                    {...this.state.product}
                />
                <ReviewList onReviewDelete={this.deleteReview} reviews={this.state.product.reviews} />
            </div>
        );
    }
}

export default ProductShowPage;