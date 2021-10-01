import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../reviewItems/ReviewItems';

const OrderReview = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products)
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        deleteFromDb(key)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(cartProduct => <ReviewItems key={products.key} handleRemove={handleRemove} product={cartProduct}></ReviewItems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>            
        </div>
    );
};

export default OrderReview;