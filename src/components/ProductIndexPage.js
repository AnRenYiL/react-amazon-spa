import React, { Component } from 'react';
import ProductShow from './ProductShowPage'
import productsData from './productsData'
import DeleteButton from './DeleteButton';
import NewProductForm from './NewProductForm';

class ProductIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [...productsData]
        };
        this.createProduct = this.createProduct.bind(this);
    }
    createProduct(params) {
        console.log(params);
        this.setState((state) => {
            return {
                products: [
                    {
                        ...params,
                        created_at: new Date(),
                        id: Math.max(...state.products.map((product) => product.id)) + 1,
                        seller: { full_name: "Mao" }
                    },
                    ...state.products
                ]
            };
        });
    }
    deleteProduct(id) {
        this.setState((state, props) => {
            return {
                products: state.products.filter((q) => q.id !== id)
            };
        });
    }
    render() {
        return (
            <main>
                <h1>Products</h1>
                <NewProductForm onCreateProduct={this.createProduct} />
                <ul>
                    {this.state.products.map((product, index) => (
                        <li key={index}>
                            <p>
                                {product.title}
                                <DeleteButton onDeleteClick={() => this.deleteProduct(product.id)} />
                                <br />
                                <small>Price: {product.price} </small>
                                <br />
                                <small>Created at: {new Date(product.created_at).toLocaleDateString()}</small>
                                <br />
                                <small>Seller: {product.seller.full_name}</small>
                                <br />
                            </p>
                        </li>
                    ))}
                </ul>
                <ProductShow />
            </main>
        );
    }
}

export default ProductIndexPage;