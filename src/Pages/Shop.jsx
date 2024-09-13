import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import banner from '../Components/Assets/4.png'
import './CSS/Shop.css'
import exclusive_banner from '../Components/Assets/6.png'

const Shop = () => {
  return (
    <div>
      <div className="shop-container">
        <img className='shop-banner' src={banner} alt="" />
      </div>
      <NewCollections />
      <div className="off">
        <img src={exclusive_banner} />
      </div>
      <Popular category="women" />
      <Offers />
      <Popular category="mens" />
      <Popular category="kids" />
      <NewsLetter />

    </div>
  )
}

export default Shop
