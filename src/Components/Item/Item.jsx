import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
       <Link to={`/product/${props.id}`}> <img src={props.image} alt="" /></Link>
        <p>{props.image}</p>
        <div className="item-prices">
            <div className="item-price-new">
             {props.new_price}
            </div>
            <div className="item-price-old">
                rs{props.old_price}
            </div>
        </div>
      
    </div>
  )
}

export default Item
