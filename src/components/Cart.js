import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import currencyFormatter from "currency-formatter";
import {BsDash, BsPlus} from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
const Cart = () => {
    const {products,totalQuantities,totalPrice} = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
    return (
        <div className="cart">
            <div className="container">
                <h3>Giỏ hàng của bạn: </h3>
                {products.length > 0 ? <>
                <div className="row">
                    <div className="col-9">
                    <div className="cart__heading">
                        <div className="row">
                            <div className="col-2">Ảnh sản phẩm</div>
                            <div className="col-2">Tên sản phẩm</div>
                            <div className="col-2">Giá sản phẩm</div>
                            <div className="col-2">Số lượng</div>
                            <div className="col-2">Tổng tiền</div>
                            <div className="col-2">Xóa</div>
                        </div>
                    </div>
                    {products.map(product => (
                        <div className="row verticalAlign" key={product.id}>
                         <div className="col-2">
                             <div className="cart__image">
                                 <img src={`/images/${product.image}`} alt=""/>
                            </div>   
                         </div>
                         <div className="col-2">
                             <div className="cart__name">
                                 {product.name}
                             </div>
                         </div>
                         <div className="col-2">
                             <div className="cart__price">
                                 {currencyFormatter.format(product.price, {code: 'VND'})}/Kg
                             </div>
                         </div>
                         <div className="col-2">
                         <div className="details__info cart__incDec">
                    <div className="details__incDec">
                    <span className="dec" onClick={() => dispatch({type: 'DEC', payload: product.id})}><BsDash /></span>
    <span className="quantity">{product.quantity}</span>
    <span className="inc" onClick={() => dispatch({type: 'INC', payload: product.id})}><BsPlus/></span>
    </div>
                </div>
                         </div>
                         <div className="col-2">
                             <div className="cart__total text-center">
                                 {currencyFormatter.format(product.price * product.quantity, {code: 'VND'})}
                             </div>
                         </div>
                         <div className="col-2">
                             <div className="cart__remove" onClick={() => dispatch({type: 'REMOVE', payload: product.id})}>
                                 <BsTrash />
                             </div>
                         </div>
                        </div>
                    ))}
                    </div>
                    <div className="col-3 summary-col">
                        <div className="summary">
                            <div className="summary__heading">
                                Giỏ hàng đợi thanh toán
                            </div>
                            <div className="summary__details">
                                <div className="row mb-10">
                                    <div className="col-6">
                                        Số lượng: 
                                    </div>
                    <div className="col-6">{totalQuantities} Kg</div>
                                </div>
                                <div className="row mb-10">
                                    <div className="col-6">
                                        Tổng tiền: 
                                    </div>
                                    <div className="col-6">
                                        {currencyFormatter.format(totalPrice, {code: 'VND'})}
                                    </div>
                                </div>
                                <button type="button" className="checkout">Thanh toán</button>
                            </div>
                        </div>
                    </div>
                </div>
                </> : 'Không có sản phẩm nào trong giỏ hàng của bạn'}
            </div>
        </div>
    )
}

export default Cart
