import React from 'react';
import bag1 from "../assets/bag_1.png";

function Product({productText, productImage, productDescription, productPrice}) {
    return (
        <article>
                    <span>
                        {productText}
                    </span>
            <img src={productImage} alt="Bag"/>
            <p>{productDescription}</p>
            <h4>€{productPrice},-</h4>
        </article>
    )
}

export default Product;