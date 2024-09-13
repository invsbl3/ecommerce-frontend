import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'
const baseurl = 'https://ecommerce-api-ebon-five.vercel.app/';

const Popular = (props) => {

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch(baseurl + 'api/product/popularin/' + props.category)
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
  }, [])




  return (
    <div className='popular'>
      <h1>POPULAR IN {props.category}</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular
