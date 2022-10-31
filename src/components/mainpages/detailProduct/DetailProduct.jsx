import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'
import ProductItem from '../productItem/ProductItem'

const DetailProduct = () => {
    const params = useParams()
    const state  = useContext(GlobalState)
    const [products] = state.ProductsAPI.products
    const [detailProduct, setDetailProduct] = useState([])
    useEffect(()=>{
        if(params.id){
            products.forEach(product => {
                if(product._id === params.id) setDetailProduct(product)
            });
        }
    },[params , products])
    if(detailProduct.length === 0) return null;
    return (
        <>
        <div className='detail'>
            <img src={detailProduct.images.url} alt=""/>
            <div className="box-detail">
                <div className="row">
                    <h2>{detailProduct.title}</h2>
                    <h6>#id: {detailProduct.product_id}</h6>
                </div>
                <span>${detailProduct.price}</span>
                <p>${detailProduct.description}</p>
                <p>${detailProduct.content}</p>
                <p>${detailProduct.sold}</p>
                <Link to="/cart" className="cart" ><button type='button'>Buy Now</button></Link>
            </div>
        </div>
            <div>
                <h2>Related products</h2>
                <div className="products">
                    {
                        products.map(product =>{
                            return product.category === detailProduct.category
                            ? <ProductItem key={product._id} product={product} /> : null
                        })
                    }
                </div>
            </div>
        </>
        
  )
}

export default DetailProduct