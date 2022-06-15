import React , {useEffect} from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import Button from "../components/Button"
import numberWidthCommas from '../untils/numberWidthCommas';
import { widthRouter} from 'react-router';
const ProductView = props => {
  const product = props.product;
  const [previewImg,setPreviewImg] = useState(product.image01)


  const [descriptionExpand,setDescriptionExpand] = useState(false);

  const [color,setColor] = useState(undefined);
  const [size,setSize] = useState(undefined);
  const [quanlity,setQuanlity] = useState(1); 

  const updateQuanlity = (type) => {
    if(type === 'plus'){
        setQuanlity(quanlity + 1);
    }else{
        setQuanlity(quanlity - 1 < 1 ? 1 : quanlity - 1);
    }
  }

  useEffect(() => {
    setPreviewImg(product.image01)
    setQuanlity(1)
    setColor(undefined)
    setSize(undefined)
  },[product])

  const check = () => {
    let res = true;

    if(color === undefined){
        alert("Vui lòng chọn màu sắc");
        return false;
    }

    if(size === undefined){
        alert("Vui lòng chọn size");
        return false;
    }

    return true;
  }
  
  const addtoCart = () => {
        if(check()){
            alert(color);
        }
  }

  const gotoCart = () => {
    if(check()){
        props.history.push('/cart');
    }
  }

  return (
    <div className="product">
         <div className="product__images">
            <div className="product__images__list">
                <div className='product__images__list__item' onClick={() => {setPreviewImg(product.image01)}}>
                    <img src={product.image01} alt="" />
                </div>
                 <div className='product__images__list__item' onClick={() => {setPreviewImg(product.image02)}}>
                    <img src={product.image02} alt="" />
                </div>
            </div>
            <div className="product__images__main">
                <img src={previewImg} alt="" />
            </div>
            <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product-descriptiom__title">
                    Chi tiết sản phầm
                </div>
                <div className="product-description__content"
                dangerouslySetInnerHTML={{__html : product.description}}
                ></div>
                <div className="product-description__toggle">
                    <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                        {
                            descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                        }
                    </Button>
                </div>
            </div>
         </div>
         <div className="product__info">
                <h1 className="product__info__title">{product.title}</h1>
                <div className="product__info__item">
                    <span className="product__info__tit">
                        {
                            numberWidthCommas(product.price)
                        }
                    </span>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                    Màu sắc 
                    </div>
                <div className="product__info__item__list">
                    {
                        product.colors.map((item,index) => {
                            return (
                                <div 
                                key={index} 
                                className={`product__info__item__list__item ${color === item ? 'active' : ''}`}
                                onClick = {() => setColor(item  )}
                                >
                                    <div className={`circle bg-${item}`}></div>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Kích thước
                    </div>
                <div className="product__info__item__list">
                    {
                        product.size.map((item,index) => {
                            return (
                                <div 
                                key={index} 
                                className={`product__info__item__list__item ${size === item ? 'active' : '' }`}
                                onClick = {() => setSize(item)}
                                >
                                <span key={index} className="product__info__item__list__item_size">    
                                        {item}
                                </span>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Số lượng 
                    </div>
                <div className="product__info__item__quanlity">
                    <div className='product__info__item__quanlity__btn'
                    onClick = {() => updateQuanlity()}
                    >
                        <i className="bx bx-minus"></i>
                    </div>
                    <div className='product__info__item__quanlity__btn'>
                        {quanlity}
                    </div>
                    <div className='product__info__item__quanlity__btn'
                    onClick = {() => updateQuanlity("plus")}
                    >
                        <i className="bx bx-plus"></i>
                    </div>
                </div>
                </div>
                <div className="product__info__item">
                    <Button onClick={() => addtoCart()}>Thêm vào giỏ</Button>
                    <Button onClick={() => gotoCart()}>Mua ngay</Button>
                </div>
         </div>
    </div>
  )
}

ProductView.propTypes = {
    product : PropTypes.object.isRequired
}

export default ProductView
