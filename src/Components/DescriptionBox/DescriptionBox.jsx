import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = (props) => {
  const product = props.product;
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-navbox">
            Description
        </div>
        <div className="descriptionbox-navbox fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        {product.description}
      </div>
    </div>
  )
}

export default DescriptionBox
