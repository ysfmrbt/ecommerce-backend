import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
const Card = ({ article }) => {
    const { addItem } = useShoppingCart();
    const addToCart = (product) => {
        const target = {
            id: product.id,
            title: product.designation,
            image: product.imageartpetitf,
            price: product.prixVente,
            qtestock: product.qtestock,
            quantity: 1
        };
        addItem(target);
        console.log('Item added to cart:', target);
    };
    return (
        <div className='card'>
            {article.imageart && <img src={article.imageart} alt={article.reference}
            />}
            <div className="card-content">
                <h1 className="card-title">{article.reference}</h1>
                <p className="card-description">{article.designation.substr(0, 20)}</p>
                <h1 className="card-title">Prix : {article.prix} TND</h1>

                <button
                    disabled={article.qtestock <= 1}
                    className="card-button"
                    onClick={() => addToCart(article)}>
                    <i className="fa-solid fa-basket-shopping"></i>
                    Add to cart
                </button>

            </div>
        </div>
    );
};
export default Card;