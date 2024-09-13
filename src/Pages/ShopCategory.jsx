import React, { useContext, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import { useParams } from 'react-router-dom'


const baseUrl = 'https://ecommerce-api-ebon-five.vercel.app/';
const ShopCategory = (props) => {

  const [popularProducts, setPopularProducts] = useState([]);
  const [category, setCategory] = useState(props.category);

  console.log(category);

  useEffect(() => {
    fetch(baseUrl + 'api/product/popularin/' + category)
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
  }, [category])




  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing {popularProducts.length} </span> out of {popularProducts.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products">
        {
          popularProducts.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          })
        }

      </div>
      <div className="shopcategory-loadmore">Explore More</div>


    </div>
  )
}

export default ShopCategory
