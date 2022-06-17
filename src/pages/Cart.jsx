import React , { useEffect , useState} from 'react'

import {useSelector} from "react-redux"

import productData from '../assets/fake-data/products'

import Helmet from '../components/Helmet'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import numberWidthCommas from '../untils/numberWidthCommas'
import CartItem from '../components/CartItem'
const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value)
  console.log(cartItems);
  const [cartProducts,setcartProducts] = useState([])
 
  const [totalProducts,setTotalProducts] = useState(0)

  const [totalPrice,setTotalPrice] = useState(0)

  useEffect(() => {
    setcartProducts(productData.getCartItemsInfo(cartItems))
    setTotalProducts(cartItems.reduce((total,item) => total + Number(item.quantity), 0 ))
    setTotalPrice(cartItems.reduce((total,item) => total + (Number(item.quantity) * Number(item.price)),0))
  },[cartItems])


  return (
    <Helmet title="giỏ hàng"> 
        <div className="cart">
          <div className="cart__info">
            <div className="cart__info__txt">
              <p>
                {
                  `Bạn đang có ${totalProducts} sản phẩm`
                } 
              </p>
              <div className="cart__info__txt__price">
                <span>Thành tiền</span>
                <span>{numberWidthCommas(totalPrice)}</span>
              </div>
            </div>
            <div className="cart__info__btn">
                  <Button size="block"> Đặt hàng </Button>
                  <Link to="/catalog">
                      <Button size="block">Tiếp tục mua hàng </Button>
                  </Link>
            </div>
          </div>
          <div className="cart__list">
             {
             console.log(cartProducts)
              }
          </div>
        </div>
    </Helmet>
  )
}

export default Cart
