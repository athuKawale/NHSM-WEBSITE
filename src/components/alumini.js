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
    <MDBContainer className="py-4">
      <MDBCard background="dark" className="text-white">
        <MDBCardImage
          overlay
          src="https://mdbootstrap.com/img/new/slides/017.webp"
          alt="..."
        />
        <MDBCardOverlay>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </MDBCardText>
          <MDBCardText>Last updated 3 mins ago</MDBCardText>
        </MDBCardOverlay>
      </MDBCard>

      <MDBCard background="dark" className="text-white mt-4">
        <MDBCardImage
          overlay
          src="https://mdbootstrap.com/img/new/slides/017.webp"
          alt="..."
        />
        <MDBCardOverlay>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </MDBCardText>
          <MDBCardText>Last updated 3 mins ago</MDBCardText>
        </MDBCardOverlay>
      </MDBCard>
    </MDBContainer>
  );
};

export default Alumini;
