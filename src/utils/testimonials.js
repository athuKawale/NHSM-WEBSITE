import React, { useState, useEffect } from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import "../static/css/testimonials.css";

const items = [
  "New High School Mains has been an absolute gem for our family. The teachers are dedicated, and the diverse range of activities keeps our child engaged. Regular updates and conferences make us feel connected, and we're grateful for the supportive community.",
  "Our experience at New High School Mains has had its ups and downs. While some teachers are fantastic, communication and administrative issues have been frustrating. The school could benefit from improvements in these areas for a more positive experience.",
  "We've been disappointed with New High School Mains. Lack of communication and limited extracurriculars are major concerns. We feel disconnected from the school community and believe there's room for improvement in fostering a more engaging educational environment.",
  "New High School Mains has exceeded our expectations. Teachers go above and beyond, and the emphasis on personalized learning is fantastic. The school's commitment to community involvement and academic excellence makes it a top choice for any parent.",
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
