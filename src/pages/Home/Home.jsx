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
import { getAllProducts } from "../../services/homeService";
import Loader from "../../components/Loader/Loader";
import { toast } from "react-toastify";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log("allProducts", allProducts);
  const data = [
    {
      name: "tiana",
      price: 269,
      photo: {
        data: { type: "Buffer", data: [20, 143, 310] },
        contentType: "image/jpeg",
      },
    },
    {
      name: "cecre",
      price: 642,
      photo: {
        data: { type: "Buffer", data: [21, 123, 390] },
        contentType: "image/jpeg",
      },
    },
    {
      name: "acyre",
      price: 209,
      photo: {
        data: { type: "Buffer", data: [20, 123, 390] },
        contentType: "image/jpeg",
      },
    },
  ];
  useEffect(() => {
    const bufferToBase64 = (buffer) => {
      const binary = buffer.reduce(
        (acc, byte) => acc + String.fromCharCode(byte),
        ""
      );
      return btoa(binary);
    };
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await getAllProducts();
        if (res.status && res.status === 200) {
          setIsLoading(false);
          const modifiedData = res.data.product.map((product) => {
            const base64String = bufferToBase64(product.photo.data.data);
            const imgSrc = `data:${product.photo.contentType};base64,${base64String}`;
            return { ...product, imgSrc };
          });
          setAllProducts(modifiedData);
        } else {
          setIsLoading(false);
          toast.error("Something went wrong");
        }
      } catch (err) {
        setIsLoading(false);
        toast.error("Something went wrong");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main-body-container">
      <Loader isLoading={isLoading} />
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
              {allProducts?.length > 0 && !isLoading > 0 ? (
                <>
                  {allProducts?.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
