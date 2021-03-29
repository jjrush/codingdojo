import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';
import ProductForm from '../components/ProductForm'

const ProductDetails = (props) => {
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const link = `http://localhost:8000/api/product/${props.id}`;

    useEffect(() => {
        axios.get(link)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])

    const updateProduct = (e) => {
        product.title = e.title;
        product.price = e.price;
        product.description = e.description;
        axios.put(link, product)
            .then(navigate("/"));
    }

    return (
        <div>
            <h1>Update a Product</h1>
            { loaded && (
                <>
                    <ProductForm
                        onSubmit={updateProduct}
                        initTitle={product.title}
                        initPrice={product.price}
                        initDescription={product.description}
                    />
                    <DeleteButton productId={product.id} successCallback={() => navigate("/")}/>
                </>
            )}
        </div>
    )
}
export default ProductDetails;








            {/* <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
                
            </form> */}
