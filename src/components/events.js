import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";
import Footer from "./footer";

const Events = () => {
  return (
    <div>
      <MDBContainer className="pt-5">
        <MDBRow className="row-cols-1 row-cols-md-3 g-5">
          <MDBCol>
            <MDBCard className="h-100 hover-zoom">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                alt="..."
                position="top"
              />

              <MDBCardFooter>
                <small className="">Shatabdi Mahotsava 2024!</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100 hover-zoom">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                alt="..."
                position="top"
              />

              <MDBCardFooter>
                <small className="">Yearly Tree Plantation Drives</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100 hover-zoom">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/042.webp"
                alt="..."
                position="top"
              />

              <MDBCardFooter>
                <small className="">
                  Guest Lectures of Industry and Political Leaders
                </small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer className="pt-5">
        <MDBRow className="row-cols-1 row-cols-md-3 g-5">
          <MDBCol>
            <MDBCard className="h-100 hover-zoom">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                alt="..."
                position="top"
              />

              <MDBCardFooter>
                <small className="">NCC Training and Practices</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100 hover-zoom">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                alt="..."
                position="top"
              />

              <MDBCardFooter>
                <small className="">Yearly Sport Events!</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100 hover-zoom">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/042.webp"
                alt="..."
                position="top"
              />

              <MDBCardFooter>
                <small className="">Inauguration of Gym in the School</small>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Events;
