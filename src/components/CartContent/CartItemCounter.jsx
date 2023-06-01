import React from 'react'

const CartItemCounter = ({cantidad}) => {
  return (
    <>
    <p className='counterButton'> - </p>
    <p> {cantidad} </p>
    <p className='counterButton'> + </p>
    </>
  )
}

export default CartItemCounter