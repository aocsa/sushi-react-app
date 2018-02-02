import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';
import { connect } from "redux-zero/react";
import Footer from './footer';
import Header from './header';
import ShoppingCart from './shoppingCart';
import { dishes, shopDishes } from './dishes';
import { deleteAll } from './actions';

const Checkout = ({ shopDishes }) => {
    const Listdishs = shopDishes.map((item, index) => {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div class="cart-image-wrapper">
                                <img src={item.image} /></div>
                            <span class="product-name" data-bind="text: item.name">{item.name}</span>
                        </td>
                        <td><input type="number" class="inputnumber k-widget k-numerictextbox" name="lastname" value={item.count} /></td>
                        <td>
                            <p class="table-price" data-bind="text: itemPrice"> ${item.price}</p><p></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        );

    });


    let totalDishes = shopDishes.length;
    let totalPrice = shopDishes.reduce(function (total, dish) {
        return total + (dish.price * dish.count);
    }, 0);

    console.log("lis", Listdishs)
    console.log("lis", shopDishes)
    // primera vista
    return (
        <section id="content" className="style section-final" >
            <div>
                <div id="checkout-top-image"></div>
                <div id="details-checkout">
                    <h1>Order Details</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th></th>
                                <th>Quantity</th>
                                <th className="text-right">Price</th>
                            </tr>
                        </thead>
                    </table>
                    {Listdishs}
                    <p id="total-checkout"><em>total:</em><span data-bind="text: totalPrice">${totalPrice}</span></p>
                    <NavLink to={"/home"} className="cancel-order" href="#" data-bind="click: emptyCart" onClick={() => deleteAll()}>cancel order</NavLink>
                    <NavLink to={"/home"} className="btn btn order-now" data-bind="click: proceed" onClick={() => deleteAll()}>order now! </NavLink>
                </div>
                <div id="checkout-bottom-image"></div>
            </div>
        </section>
    )
}

const CheckoutView = ({ shopDishes }) => {
    return (
        <div id='application' >
            <div>
                <div id='wrapper'>
                    <Header shopDishes={shopDishes} />
                    <div id='main-section'>
                        {shopDishes.length != 0 ? <ShoppingCart shopDishes={shopDishes} /> : <div id='header'></div>}
                        <Checkout shopDishes={shopDishes} />
                    </div>
                    <Footer />
                </div>
            </div>
        </div >
    )
}

const mapToProps = ({shopDishes}) => ({shopDishes});
export default connect(mapToProps)(CheckoutView);
