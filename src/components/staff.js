import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import "../static/css/about.css";
import Footer from "./footer";

const Staff = () => {
  return (
    <>
      <MDBContainer className="text-center about-cont" fluid>
        <p className="fs-1 fw-bold"> Our Staff!</p>
      </MDBContainer>
      <div className="about-bg">
        <MDBContainer className="py-5 px-4 text-wrap lh-lg about-text">
          <p className="fs-3">
            Lorem qui nulla dolore ad officia laborum cillum ullamco culpa
            excepteur voluptate cillum excepteur. Nostrud sint nostrud ut
            pariatur ad anim laborum dolore veniam sint. Fugiat sunt dolor
            aliquip sunt nostrud ullamco cupidatat ullamco cillum minim magna eu
            exercitation. Minim enim duis duis consectetur do eu dolor amet
            occaecat velit minim duis sunt officia. Nisi quis amet velit eiusmod
            id occaecat dolor ex et amet id anim amet.
          </p>
          <p className="fs-3">
            Non ea exercitation veniam laborum nisi excepteur anim anim
            incididunt dolor tempor deserunt tempor voluptate. Tempor sunt
            cillum aliquip ea qui excepteur ullamco velit consequat esse
            voluptate dolor. Tempor id exercitation reprehenderit enim et cillum
            dolore aliquip culpa sit velit. Ullamco cillum officia dolor sunt
            Lorem aliquip adipisicing aliqua quis. Tempor laborum laboris elit
            occaecat deserunt.
          </p>
        </MDBContainer>
      </div>

      <Footer />
    </>
  );
};

export default Staff;
