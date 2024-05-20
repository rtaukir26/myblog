import React, { useEffect, useState } from "react";
import carousel1 from "../../assets/images/carousel/travel1.jpg";
import carousel2 from "../../assets/images/carousel/shopping1.jpg";
import carousel3 from "../../assets/images/carousel/food.jpg";
import carousel4 from "../../assets/images/carousel/light1.webp";
import searchIcon from "../../assets/images/search.png";
import light1Icon from "../../assets/images/product/light1.png";
import light2Icon from "../../assets/images/product/light2.png";
import watch1Icon from "../../assets/images/product/watch1.jpg";
import watch2Icon from "../../assets/images/product/watch2.jpg";
import palnt1Icon from "../../assets/images/product/palnt1.jpg";
import palnt2Icon from "../../assets/images/product/palnt2.jpg";
import Carousel from "../../components/Carousel/Carousel";
import ProductCard from "./ProductCard";

const Home = () => {
  // const [activeCarousel, setActiveCarousel] = useState(1);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setActiveCarousel((prev) => (prev === 1 ? 2 : 1));
  //   }, 2000); // 5000 milliseconds = 5 seconds

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div className="main-body-container">
      <div className="body-wrapper">
        <div className="home-wrapper">
          {/* carousel */}
          <div className="carousel-con d-flex ">
            <div className="left">
              <h5>
                We're thrilled to have you join us on this exciting journey.
              </h5>
              <div className="search-con">
                <input type="text" placeholder="search..." />
                <img src={searchIcon} alt="search" />
              </div>
            </div>

            <div className="right d-flex justify-content-end">
              <Carousel
                img={{ img1: carousel1, img2: carousel2, img3: carousel4 }}
                indicatorId="carouselIndicators1"
                // delayTime={activeCarousel}
                // isActive={activeCarousel === 1 ? true : false}
              />
              <Carousel
                img={{ img1: carousel3, img2: carousel1, img3: carousel4 }}
                indicatorId="carouselIndicators2"
                // delayTime={activeCarousel}
                // isActive={activeCarousel === 2 ? true : false}
              />
            </div>
          </div>

          {/* home-body */}
          <div className="body d-flex">
            {/* Sidebar */}
            <div className="sidebar ps-5 me-2 ">
              <ul className="list-unstyled  fs-6">
                <li>Popular</li>
                <li>Rating</li>
                <li>Cost</li>
                <li>Clothes</li>
                <li>Popular</li>
                <li>Rating</li>
                <li>Cost</li>
                <li>Clothes</li>
              </ul>
            </div>
            {/* body - product card*/}
            <div className="body-content">
              <ProductCard
                img={palnt2Icon}
                description="Popuplar plant for home"
                price="773"
              />
              <ProductCard
                img={watch1Icon}
                description="Popuplar plant for home"
                price="819"
              />
              <ProductCard
                img={light1Icon}
                description="Popuplar plant for home"
                price="383"
              />
              <ProductCard
                img={palnt1Icon}
                description="Popuplar plant for home"
                price="675"
              />
              <ProductCard
                img={watch2Icon}
                description="Popuplar plant for home"
                price="839"
              />
              <ProductCard
                img={light2Icon}
                description="Popuplar plant for home"
                price="372"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
