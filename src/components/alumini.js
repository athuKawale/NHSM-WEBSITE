import {
  MDBContainer,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";
import React from "react";

const Alumini = () => {
  return (
    <MDBContainer className="py-5">
      <h3>Note: this page is under development!</h3>
      <MDBCard background="dark" className="text-white p-2">
        <MDBCardImage
          overlay
          src={require("../static/images/Alumini/IMG-20231125-WA0055.jpg")}
          alt="..."
        />
        <MDBCardOverlay>
          <MDBCardTitle>
            <b>Batch 2017</b>
          </MDBCardTitle>
        </MDBCardOverlay>
      </MDBCard>

      <MDBCard background="dark" className="text-white p-2 mt-4">
        <MDBCardImage
          overlay
          src={require("../static/images/Alumini/IMG-20231125-WA0011.jpg")}
          alt="..."
        />
        <MDBCardOverlay>
          <MDBCardTitle>
            <b>Batch 1977</b>
          </MDBCardTitle>
        </MDBCardOverlay>
      </MDBCard>
    </MDBContainer>
  );
};

export default Alumini;
