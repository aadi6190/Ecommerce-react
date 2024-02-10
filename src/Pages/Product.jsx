import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'

const Product = () => {
  const{all_product}= useContext(ShopContext)
  const{productID} = useParams();
  const product = all_product.find((e)=> e.id=== Number(productID));
    return (
    <div >
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
    </div>
  )
}

export default Product
