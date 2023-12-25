import React from "react";
import "../static/home.css";
import logo from "../static/logo7.png";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";

import useWindowSize from "../utils/userWindowSize";

const Home = () => {
  const size = useWindowSize();
  return (
    <>
      <MDBContainer className="my-3">
        {size.width > 1000 ? (
          <MDBRow center>
            <MDBCol size="4">
              <img
                src={logo}
                style={{ width: 400, height: "auto" }}
                className="img-fluid"
                alt="..."
              />
            </MDBCol>
            <MDBCol size="4">
              <p>
                Cillum nisi sit dolore aliquip adipisicing tempor qui tempor
                fugiat <a href="#">Learn More...</a>
              </p>
            </MDBCol>
          </MDBRow>
        ) : (
          <>
            <img
              src={logo}
              style={{ width: 400, height: "auto" }}
              className="img-fluid"
              alt="..."
            />
            <p>
              Cillum nisi sit dolore aliquip adipisicing tempor qui tempor
              fugiat <a href="#">Learn More...</a>
            </p>
          </>
        )}
      </MDBContainer>
      <MDBContainer className="px-0" fluid>
        <MDBCarousel fade>
          <MDBCarouselItem itemId={1} interval={1700}>
            <img
              src="https://mdbootstrap.com/img/new/slides/041.jpg"
              className="d-block w-100"
              alt="..."
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2} interval={1700}>
            <img
              src="https://mdbootstrap.com/img/new/slides/042.jpg"
              className="d-block w-100"
              alt="..."
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3} interval={1700}>
            <img
              src="https://mdbootstrap.com/img/new/slides/043.jpg"
              className="d-block w-100"
              alt="..."
            />
          </MDBCarouselItem>
        </MDBCarousel>
      </MDBContainer>
      <br />
      <br />
      <MDBContainer className="bg_principle p-5">
        <p className="fw-bold fs-1">FROM THE PRINCIPAL’s DESK!</p>
        <MDBCard style={{ maxWidth: "700px" }}>
          <MDBRow className="g-0">
            <MDBCol md="4">
              <MDBCardImage
                src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp"
                alt="..."
                fluid
              />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle>Priciple Mam Picture</MDBCardTitle>
                <MDBCardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
                <MDBCardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>

        <p className="lh-lg py-5 fs-3">
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Donec sed odio dui. Cras mattis pannenkoek purus sit amet fermentum.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis
          consectetur purus sit amet fermentum.
        </p>
      </MDBContainer>

      <br />
      <br />
      <MDBContainer>
        <MDBRow className="row-cols-1 row-cols-md-2 g-4">
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/041.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/042.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Home;
