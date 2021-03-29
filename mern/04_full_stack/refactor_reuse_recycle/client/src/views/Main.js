// imports
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// css
import '../css/main.css'

// components
import ProductForm from '../components/ProductForm';
import ShowAllProducts from '../components/ShowAllProducts';

const Main = () => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            });
    }, [])

    const createProduct = product => {
        axios.post('http://localhost:8000/api/product', product)
            .then( res => {
                setProducts([...products, res.data]);
            })
    }

    return (
        <div className="App">
            <h1>Product Manager</h1>
            <ProductForm className="productForm" 
                onSubmit={createProduct} 
                initTitle="" 
                initPrice={0} 
                initDescription=""
            />
            <hr/>
            { loaded && <ShowAllProducts products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}
export default Main;
