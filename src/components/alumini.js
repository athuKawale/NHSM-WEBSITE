import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import Footer from "./footer";

const Alumini = () => {
  return (
    <>
      <MDBContainer style={{ height: 600 }} className="py-5">
        <p className="fs-2 lora-font text-center">
          Note: this page is under development!
        </p>
      </MDBContainer>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Alumini;
