import React from 'react'
import PropTypes from 'prop-types'

const CartItem = props => {
  return (
    <div>
      {
        props.item.title
      }
    </div>
  )
}

CartItem.propTypes = {
    item : PropTypes.object
}

export default CartItem
