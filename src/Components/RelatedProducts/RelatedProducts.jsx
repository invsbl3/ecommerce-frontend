import React, { useContext, useState, useEffect } from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'

const baseurl = 'https://ecommerce-api-ebon-five.vercel.app/';


const RelatedProducts = (props) => {

  const [popularProducts, setPopularProducts] = useState(null);
  const product = props.product;

  function getData(category) {
    fetch(baseurl + 'api/product/popularin/' + category)
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
  }

  useEffect(() => {
    getData(product.category)
  }, [])

  if (popularProducts) {
    return (
      <div className='relatedproducts'>
        <h1>Related Products</h1><hr />
        <div className="relatedproducts-item">
          {popularProducts.map((item, i) => {
            if (product.category === item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
            }
            else { getData(product.category); return null; }
          })}

        </div>

      </div>
    )
  } else { }
}

export default RelatedProducts
