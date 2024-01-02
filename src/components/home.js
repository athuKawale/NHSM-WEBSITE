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
  MDBTypography,
  MDBProgress,
  MDBProgressBar,
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
      <MDBContainer className="get-features p-5" fluid>
        <MDBContainer>
          <MDBRow className="row-cols-1 row-cols-md-2 g-4 text-center">
            <MDBCol>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Interactive Board</MDBCardTitle>
                  <MDBCardText>
                    Transforming traditional classrooms, our interactive boards
                    facilitate engaging and dynamic learning experiences. With
                    touch-sensitive technology and interactive software,
                    educators can create immersive lessons, fostering a
                    participatory environment for students.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Solar Energy Project</MDBCardTitle>
                  <MDBCardText>
                    Committing to sustainability, our solar energy project
                    harnesses renewable power to reduce our carbon footprint.
                    Through strategically placed solar panels, we generate clean
                    electricity, providing an eco-friendly solution and serving
                    as an educational tool for students interested in
                    environmental conservation.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Advanced Computer Labs</MDBCardTitle>
                  <MDBCardText>
                    Our computer labs, armed with cutting-edge tech, offer an
                    ideal space for students to develop digital skills.
                    High-performance computers and modern software empower
                    exploration in programming, design, and other computing
                    disciplines, promoting innovation and keeping pace with tech
                    advancements.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Seminar Hall</MDBCardTitle>
                  <MDBCardText>
                    Our spacious seminar hall is a hub for intellectual
                    exchange. Designed for seminars, workshops, and conferences,
                    it offers a platform for experts and thought leaders to
                    share insights, fostering a culture of intellectual
                    curiosity among students and the broader community.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>School Vans and Buses</MDBCardTitle>
                  <MDBCardText>
                    Ensuring safe and reliable transportation, our fleet of
                    school vans and buses, operated by trained drivers, provides
                    students with a secure commute. This service not only
                    facilitates access to education but also gives parents
                    confidence that their children are in capable hands during
                    their journeys.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Library</MDBCardTitle>
                  <MDBCardText>
                    Our library, a haven for avid readers, houses a diverse
                    collection of books, journals, and digital resources. With
                    dedicated study areas, it serves as a focal point for
                    academic excellence, encouraging students to delve into the
                    joy of reading and expand their intellectual horizons.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>

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

      <MDBContainer className="padding-percent fw-bold text-center" fluid>
        <h2 className="fs-1 fst-italic font-monospace">
          Percent bar for school performance!
        </h2>
        <p className="fs-3 pt-4 font-monospace">Passing Percentage</p>
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

        <p className="fs-3 pt-4 font-monospace">
          Critical Thinking and Problem-Solving
        </p>
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

        <p className="fs-3 pt-4 font-monospace">Parental Involvement</p>
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

        <p className="fs-3 pt-4 font-monospace">
          Effort / Improvement & Classroom Behavior
        </p>
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

      <Testimonials />

      <br />
      <br />
      <Footer />
    </>
  );
};

export default Home;
