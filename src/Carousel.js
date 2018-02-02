import React, { Component } from 'react';
import './Carousel.css';
// import {dishes, selectedFood} from './dishes'
import { connect } from 'redux-zero/react';
import { nextAction, previewAction } from './actions-diana';
import Header from './header';
import ShoppingCart from './shoppingCart';
import Footer from './footer';
import {addDishes} from './actions'

const InfoDish = ({ image, name, description, price, nutritional, nutritionalInfo, selectedFood }) => {
	return (
		<div
			className="carousel-inner text-center"
			role="listbox">
			<div className="item active">
				<div className="col-lg-3 pull-left">
					<img className="img1" src={image} />
				</div>
				<div className="col-lg-6 info-middle">
					<br />
					<h1 className="text-left">{name}</h1>
					<p className="text-left">{description}</p>
					<br /><hr />
					<div className="row">
						<div className="col-lg-6 price1">
							$ {price}.00
                		</div>
						<div className="col-lg-6">
							<button
								className="btn btn-danger pull-right"
								href="/article/show/sed-vel-lectus/9"
								onClick={() => addDishes(selectedFood)}
								>
								<i className="fa fa-long-arrow-right">
									+ADD TO CART
              					</i>
							</button>
						</div>
					</div>
				</div>
				<div className="col-lg-3 pull-right last-div">
					<h5>{nutritional}</h5>
					<br />
					<ul>
					{nutritionalInfo}
					</ul>
				</div>
			</div>
		</div>
	)
}

const Carousel = ({ dishes, selectedFood }) => {
	console.log("dishes", selectedFood)
	return (
		<div className="background-fish">
			<div className="container carousel">
				<div
					id="carousel-example-generic"
					className="carousel slide" data-ride="carousel">

					<div>
						<ol className="carousel-indicators">
							<li
								data-target="#carousel-example-generic"
								data-slide-to={selectedFood}
								className="active" />
						</ol>
						{/* Wrapper for slides */}
						<InfoDish
							name={dishes[selectedFood].name}
							image={dishes[selectedFood].image}
							price={dishes[selectedFood].price}
							description={dishes[selectedFood].description}
							nutritional={dishes[selectedFood].nutritional}
							nutritionalInfo={dishes[selectedFood].nutritionalInfo}
							selectedFood={selectedFood}
						/>
						<a
							className="left carousel-control next1"
							href="#carousel-example-generic"
							role="button"
							data-slide="prev"
							onClick={previewAction}
							id = "navigate-prev">
						</a>
						<a
							className="right carousel-control next2"
							href="#carousel-example-generic"
							role="button"
							data-slide="next"
							onClick={nextAction}
							id = "navigate-next">
						</a>
					</div>
				</div>
			</div>
		</div>
	);

}

const CarouselView = ({ dishes, selectedFood, shopDishes }) => {
	return (
		<div id='application'>
			<div>
				<div id='wrapper'>
					<Header shopDishes={shopDishes}/>
					<div id='main-section'>
						{shopDishes.length!=0?<ShoppingCart shopDishes={shopDishes} />:<div id='header'></div>}
						<Carousel dishes={dishes} selectedFood={selectedFood} />
					</div>
					<Footer />
				</div>
			</div>
		</div>
	)
}

const mapToProps = ({ dishes, selectedFood, shopDishes }) => ({ dishes, selectedFood, shopDishes });
export default connect(mapToProps)(CarouselView);