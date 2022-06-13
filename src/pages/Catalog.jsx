import React from 'react'
import Helmet from '../components/Helmet'
import Checkbox from '../components/Checkbox'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import productData from '../assets/fake-data/products'
import category from '../assets/fake-data/category'
import colors  from '../assets/fake-data/product-color'
import sizes from '../assets/fake-data/product-size'
import Button from '../components/Button'
import { useState } from 'react'
const Catalog = () => {

  const initFilter = {
    category : [],
    color : [],
    size : [],
  }

  const productList = productData.getAllProducts();

  const [products,setProducts] = useState(productList);

  const [filter,setFilter] = useState(initFilter);


  const filterSelect = (type , checked ,item) =>{
      if(checked){
          switch(type){
              case "CATEGORY":
                setFilter({...filter, category : [...filter.category , item.categorySlug]})
                break;
               case "COLOR":
                setFilter({...filter, category : [...filter.color , item.color]})
                break;
               case "SIZE":
                setFilter({...filter, category : [...filter.size , item.size]})
                break;
                default:
          }
      }else{
        switch(type){
              case "CATEGORY":
                const newCategory = filter.category.filter(e => e !== item.categorySlug)
                setFilter({...filter, category : newCategory})
                break;
               case "COLOR":
                const newColor = filter.color.filter(e => e !== item.color)
                setFilter({...filter, color : newColor})
                break;
               case "SIZE":
                const newSize = filter.size.filter(e => e !== item.size)
                setFilter({...filter, size : newSize})
                break;
                default:
          }
      }
  }

  return (
    <Helmet title="sản phẩm">
      {
        console.log(filter)
      }
        <div className='catalog'>
            <div className="catalog__filter">
                <div className="catalog__filter__widget">
                    <div className="catalog__filter__widget__title">
                      danh mục sản phẩm 
                    </div>
                    <div className="catalog__filter__widget__content">
                        {
                          category.map((item,index) => {
                              return (
                                <div key={index} 
                                className="catalog__filter__widget__content__item">
                                  <Checkbox
                                    label={item.display}
                                    onChange = {(input) => filterSelect(
                                      "CATEGORY" , input.checked , item
                                    )}
                                  />
                                </div>
                              )
                          })
                        }
                    </div>
                </div>
                <div className="catalog__filter__widget">
                    <div className="catalog__filter__widget__title">
                      màu sắc
                    </div>
                    <div className="catalog__filter__widget__content">
                        {
                          colors.map((item,index) => {
                              return (
                                <div key={index} 
                                className="catalog__filter__widget__content__item">
                                  <Checkbox
                                    label={item.display}
                                    onChange = {(input) => filterSelect(
                                      "COLOR" , input.checked , item
                                    )}
                                  />
                                </div>
                              )
                          })
                        }
                    </div>
                </div>
                <div className="catalog__filter__widget">
                    <div className="catalog__filter__widget__title">
                        kích cỡ
                    </div>
                    <div className="catalog__filter__widget__content">
                        {
                          sizes.map((item,index) => {
                              return (
                                <div key={index} 
                                className="catalog__filter__widget__content__item">
                                  <Checkbox
                                    label={item.display}
                                    onChange = {(input) => filterSelect(
                                      "SIZE",input.checked , item
                                    )}
                                  />
                                </div>
                              )
                          })
                        }
                    </div>
                </div>
                <div className="catalog__filter__widget">
                      <div className="catalog__filter__widget__content">
                        <Button size="sm">xóa bộ lọc</Button>
                      </div>
                </div>
            </div>
            <div className="catalog__content">
              <Grid
                col={3}
                mdCol={2}
                smCol={1}
                gap={20}
              >
                {
                    products.map((item,index) => {
                        return (
                        <ProductCard 
                          key={index}
                          img01={item.image01}
                          img02={item.image02}
                          name={item.title}
                          price={Number(item.price)}
                          slug={item.slug}
                        />
                        )
                    })
                }
              </Grid>
            </div>
        </div>
    </Helmet>
  )
}

export default Catalog
