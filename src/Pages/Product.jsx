import React, { useState, useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const baseUrl = 'https://ecommerce-api-ebon-five.vercel.app/';

const useProduct = (productId) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch(baseUrl + 'api/product/' + productId)
      .then((response) => response.json()
        .then(
          (product) => {
            return setProductData(product);
          }
        )
      );
  }, []);

  return productData;
};

const Product = () => {
  const { productId } = useParams('productId');
  const product = useProduct(productId);
  return (
    <div>
      <Breadcrum src={product} product={product} />
      <ProductDisplay src={product} product={product} />
      <DescriptionBox product={product} />
      <RelatedProducts src={product} product={product} />
    </div>
  );
};

export default Product;











/* 
const Product = () => {

  const [readyForRender, setReadyForRender] = useState(false);
  const [product, setProduct] = useState([]);

  const { productId } = useParams('productId');
  useEffect(() => {
    console.log("useEffect called");
    fetch('http://localhost:4000/api/product/' + productId)
      .then((response) => { response.json(); })
      .then((data) => { console.log('express product fetched:', data); setProduct(data); })
      .catch(error => console.error(error));
    setReadyForRender(true);
  }, []);


  if (readyForRender) {
    return (
      <div>
        <Breadcrum src={product} product={product} />
        <ProductDisplay src={product} product={product} />
        <DescriptionBox />
        <RelatedProducts />
      </div>
    );
  } else { return null; }

}
export default Product; */
