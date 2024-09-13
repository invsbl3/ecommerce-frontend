import React, { useContext, useEffect, useState, useSearchParams } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'
import { useParams } from 'react-router-dom'

const ProductDisplay = (props) => {
    const { addToCart } = useContext(ShopContext);

    const product = props.src;
    if (product) {
        return (
            <div className='productdisplay'>
                <div className="productdisplay-left">
                    <div className="productdisplay-img-list">
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>
                    <div className="productdisplay-img">
                        <img crossOrigin="anonymous" className='productdisplay-main-img' src={product.image} alt="" />
                    </div>
                </div>
                <div className="productdisplay-right">
                    <h1>{product.name}</h1>
                    <div className="producdisplay-right-star">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                        <p>(122)</p>
                    </div>
                    <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-price-old">
                            ${product.old_price}
                        </div>
                        <div className="productdisplay-right-price-new">
                            ${product.new_price}
                        </div>
                    </div>
                    <div className="productdisplay-right-description">
                        {product.description}
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-sizes">
                            <div>37</div>
                            <div>38</div>
                            <div>39</div>
                            <div>40</div>
                            <div>41</div>
                        </div>
                    </div>
                    <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                    <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt, Crop Top</p>
                    <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>

                </div>
            </div>
        );
    } else { return null };
}

export default ProductDisplay
