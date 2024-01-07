import React, { useState, useEffect } from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import "../static/css/testimonials.css";

const items = [
  "Enim non adipisicing cillum qui Lorem tempor proident ex consequat. Eiusmod laboris exercitation consectetur Lorem laborum dolor proident dolor Lorem incididunt ad laborum. Cillum ad ut ex pariatur aliquip deserunt commodo cillum non duis. Reprehenderit ea ea nulla reprehenderit exercitation. Est anim et Lorem in dolore elit quis in exercitation officia ad laborum ipsum reprehenderit. --Parents Name",
  "Commodo id adipisicing exercitation occaecat. Fugiat nisi qui officia mollit cupidatat occaecat proident eu anim consectetur eiusmod adipisicing. Dolore ea Lorem amet qui enim nulla culpa mollit. Magna do pariatur quis enim tempor aute incididunt fugiat fugiat nisi. --Parents Name",
  "Consectetur occaecat deserunt laborum adipisicing sunt dolore mollit laborum qui pariatur deserunt occaecat. Aliquip deserunt pariatur fugiat elit veniam sint duis aute voluptate ullamco laboris sit. Aliquip sit ipsum cillum ipsum ullamco commodo anim Lorem in dolore veniam. --Parents Name",
  "Aute elit cillum voluptate duis exercitation non dolore. Incididunt duis magna nostrud non. Eu Lorem pariatur cillum officia magna laboris eiusmod tempor. Adipisicing anim laboris culpa magna id minim in anim. Nulla elit in elit culpa proident veniam duis ea laborum irure. Eiusmod cillum id proident aute. Sint ea cupidatat id do. --Parents Name",
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // Change the interval duration as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);
  return (
    <MDBContainer className="text-center">
      <div
        className="p-5 rounded rounded-7"
        style={{
          backgroundColor: "black",
          color: "white",
          fontFamily: "sans-serif",
          opacity: 0.8,
        }}
      >
        <p className="fs-1">TESTIMONIALS</p>
        <p className="fst-italic">What our Parents have to say about Us</p>

        <div className="carousel-container">
          {items.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <p className="">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </MDBContainer>
  );
};

export default Testimonials;
