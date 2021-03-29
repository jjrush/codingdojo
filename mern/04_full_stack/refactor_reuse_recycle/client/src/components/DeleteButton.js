import React from 'react'
import axios from 'axios';
const DeleteButton = (props) => {
    const { productId, successCallback } = props;
    const deleteProduct = e => {
        console.log(productId)
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                console.log("here");
                successCallback();
            })
    }
    return (
        <button className="btn-delete" onClick={deleteProduct}>
            Delete
        </button>
    )
}
export default DeleteButton;
