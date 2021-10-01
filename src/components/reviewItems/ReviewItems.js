import React from 'react';

const ReviewItems = (props) => {
    const {img, price, name, seller, quantity, key} = props.product
    const {handleRemove} = props
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <p>Name: {name}</p>
                <p>Price: {price}</p>
                <p>Seller: {seller}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => handleRemove(key)}className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItems;