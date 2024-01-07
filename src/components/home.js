import React from "react";
import "../static/css/home.css";
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
  MDBTypography,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
} from "mdb-react-ui-kit";

import useWindowSize from "../utils/userWindowSize";
import Footer from "./footer";
import Testimonials from "../utils/testimonials";

const Home = () => {
  const size = useWindowSize();
  return (
    <>
      <MDBContainer className="my-3 text-center">
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
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem itemId={1} interval={1700}>
            <img
              src={require("../static/images/image_home/carousel1.JPG")}
              className="d-block w-100"
              alt="..."
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2} interval={1700}>
            <img
              src={require("../static/images/image_home/carousel.JPG")}
              className="d-block w-100"
              alt="..."
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3} interval={1700}>
            <img
              src={require("../static/images/image_home/carousel3.JPG")}
              className="d-block w-100"
              alt="..."
            />
          </MDBCarouselItem>
        </MDBCarousel>
      </MDBContainer>

      <br />
      <br />
      <MDBContainer className="get-features p-5" fluid>
        <MDBContainer>
          <MDBRow className="row-cols-1 row-cols-md-2 g-3 text-center">
            <MDBCol>
              <MDBCard className="feature_card">
                <MDBCardBody>
                  <MDBCardTitle>Interactive Board</MDBCardTitle>
                  <MDBIcon className="ms-1 p-2" icon="chalkboard" size="8x" />
                  <MDBCardText>
                    Our interactive boards transform classrooms into dynamic
                    learning spaces, fostering engagement with touch-sensitive
                    technology and interactive software for immersive lessons.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard className="feature_card">
                <MDBCardBody>
                  <MDBCardTitle>Solar Energy Project</MDBCardTitle>
                  <MDBIcon className="ms-1 p-2" icon="solar-panel" size="8x" />
                  <MDBCardText>
                    Our solar energy project reduces our carbon footprint by
                    harnessing renewable power through strategically placed
                    solar panels, providing clean electricity and serving as an
                    educational tool for environmental conservation.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard className="feature_card">
                <MDBCardBody>
                  <MDBCardTitle>Advanced Computer Labs</MDBCardTitle>
                  <MDBIcon className="ms-1 p-2" icon="desktop" size="8x" />
                  <MDBCardText>
                    Our cutting-edge computer labs empower students to develop
                    digital skills in programming, design, and computing
                    disciplines. High-performance computers and modern software
                    foster innovation, keeping pace with tech advancements and
                    skill develpement.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard className="feature_card">
                <MDBCardBody>
                  <MDBCardTitle>Seminar Hall</MDBCardTitle>
                  <MDBIcon className="ms-1 p-2" icon="home" size="8x" />
                  <MDBCardText>
                    Our spacious seminar hall is a hub for intellectual
                    exchange, designed for seminars, workshops, and conferences.
                    It provides a platform for experts and thought leaders to
                    share insights, fostering a culture of intellectual
                    curiosity among students and the broader community.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard className="feature_card">
                <MDBCardBody>
                  <MDBCardTitle>School Vans and Buses</MDBCardTitle>
                  <MDBIcon className="ms-1 p-2" icon="bus-alt" size="8x" />
                  <MDBCardText>
                    Our school vans and buses, ensure safe and reliable
                    transportation, providing students with a secure commute.
                    This service facilitates access to education and gives
                    parents confidence in their children's safety during
                    journeys.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard className="feature_card">
                <MDBCardBody>
                  <MDBCardTitle>Library</MDBCardTitle>
                  <MDBIcon className="ms-1 p-2" icon="book-open" size="8x" />
                  <MDBCardText>
                    Our library, a haven for avid readers, houses a diverse
                    collection of books, journals, and digital resources. With
                    dedicated study areas, it encourages academic excellence and
                    the joy of reading, expanding students' intellectual
                    horizons.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>

      <br />
      <br />
      <br />

      <MDBContainer className="bg_principle p-5">
        <figure className="text-start fs-2 mb-0">
          <MDBTypography blockquote>
            <p>Message!</p>
          </MDBTypography>
          <figcaption className="blockquote-footer mb-0">
            From the <cite title="Source Title">Principle’s Desk!</cite>
          </figcaption>
        </figure>
        <p className="fw-bold lead fs-1"></p>
        <MDBCard className="card_principle shadow">
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                className="rounded border"
                src={require("../static/images/image_home/principle.JPG")}
                alt="..."
                fluid
              />
            </MDBCol>
            <MDBCol className="card_body_principle" md="6">
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
      <br />

      <MDBContainer className="padding-percent fw-bold text-center" fluid>
        <h2 className="fs-1 fst-italic">Percent bar for school performance!</h2>
        <p>--------------------------------------------------------------</p>
        <p className="fs-3 pt-4">Passing Percentage</p>
        <MDBProgress height="20">
          <MDBProgressBar
            className="rounded"
            striped
            animated
            bgColor="success"
            width="98"
            valuemin={0}
            valuemax={100}
          >
            98%
          </MDBProgressBar>
        </MDBProgress>

        <p className="fs-3 pt-4">Critical Thinking and Problem-Solving</p>
        <MDBProgress height="20">
          <MDBProgressBar
            className="rounded"
            striped
            animated
            bgColor="info"
            width="62"
            valuemin={0}
            valuemax={100}
          >
            62%
          </MDBProgressBar>
        </MDBProgress>

        <p className="fs-3 pt-4">Parental Involvement</p>
        <MDBProgress height="20">
          <MDBProgressBar
            className="rounded"
            striped
            animated
            bgColor="warning"
            width="40"
            valuemin={0}
            valuemax={100}
          >
            40%
          </MDBProgressBar>
        </MDBProgress>

        <p className="fs-3 pt-4">Effort / Improvement & Classroom Behavior</p>
        <MDBProgress height="20">
          <MDBProgressBar
            className="rounded"
            striped
            animated
            width="92"
            valuemin={0}
            valuemax={100}
          >
            92%
          </MDBProgressBar>
        </MDBProgress>
      </MDBContainer>

      <br />
      <br />
      <br />

      <Testimonials />

      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Home;
