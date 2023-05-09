import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Carousel} from "react-materialize";
import OpeningImg from "../images/openingburger1.jpg";
import PizzaImg1 from "../images/pizza1.jpg";
import BurgerImg2 from "../images/burger.jpg";
import PizzaImg2 from "../images/pizzaimg2.jpg";
import DemoImg from "../images/openingpng.png";
import { getAllPizzas } from "../actions/pizzaActions";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import Pizza from "../components/Pizza";
export default function Homescreen() {
  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div className="bg-dark bg-gradient">
<Carousel
  carouselId="Carousel-59"
  className="white-text center"
  options={{
    fullWidth: true,
    indicators: true
  }}
>
  <div className="picture1"  style={{
        backgroundImage: `url(${OpeningImg})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '550px',
      }}>
      <div className="innerImgContainer">
          <div className="inner-image" style={{
            backgroundImage: `url(${DemoImg})`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}>
            

          </div>

      </div>
      
 
  </div>
  <div className="picture2"  style={{
        backgroundImage: `url(${PizzaImg1})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '550px',
      }}>
  </div>
  <div className="picture3"  style={{
        backgroundImage: `url(${BurgerImg2})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '550px',
      }}>
  </div>
  <div className="picture4" style={{
        backgroundImage: `url(${PizzaImg2})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '550px',
      }}>
  </div>
</Carousel>
    <Filter/>
   
      <div className="row justify-content-center">
       
        {loading ? (
          <Loading/>
        ) : error ? (
          <Error error='Something went wrong'/>
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-3 m-3" key={pizza._id}>
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );

}
