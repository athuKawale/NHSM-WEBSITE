import React from "react";
import "../static/css/home.css";
import logo from "../static/Logo.png";
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
  MDBRipple,
} from "mdb-react-ui-kit";

import useWindowSize from "../utils/userWindowSize";
import Footer from "./footer";
import Testimonials from "../utils/testimonials";

const Home = () => {
  const size = useWindowSize();
  return (
    <div className="custom-cursor">
      <MDBContainer className="my-3 text-center" fluid>
        {size.width > 1000 ? (
          <MDBRow center>
            <MDBCol size="4">
              <MDBRipple rippleTag="a">
                <img
                  src={logo}
                  style={{ width: 200, height: "auto" }}
                  className="img-fluid"
                  alt="..."
                />
              </MDBRipple>
            </MDBCol>
            <MDBCol size="4 my-auto">
              <p>
                Join us as we celebrate a century of excellence in education at
                New High School Main's 100th-anniversary
                <a href="https://www.canva.com/design/DAF4znLXz68/FjINr3r5GltaB_UMu3Jx9w/view?utm_content=DAF4znLXz68&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                  {" "}
                  Know More...
                </a>
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
          <MDBCarouselItem itemId={1} interval={3000}>
            <MDBRipple rippleTag="a">
              <img
                src={require("../static/images/image_home/carousel1.JPG")}
                className="d-block w-100"
                alt="..."
              />
            </MDBRipple>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2} interval={3000}>
            <MDBRipple rippleTag="a">
              <img
                src={require("../static/images/image_home/carousel.JPG")}
                className="d-block w-100"
                alt="..."
              />
            </MDBRipple>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3} interval={1700}>
            <MDBRipple rippleTag="a">
              <img
                src={require("../static/images/image_home/carousel3.JPG")}
                className="d-block w-100"
                alt="..."
              />
            </MDBRipple>
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
                  <MDBCardText className="truncated-text">
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
                  <MDBCardText className="truncated-text">
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
                  <MDBCardText className="truncated-text">
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
                  <MDBCardText className="truncated-text">
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
                  <MDBCardText className="truncated-text">
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
                  <MDBCardText className="truncated-text">
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
        <div className="text-center">
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
                  <MDBCardTitle>Miss. Varsha S. Yadav (Jadbansi)</MDBCardTitle>
                  <MDBCardText>
                    Dear students, your education is the passport to your
                    future. Embrace challenges, work hard, and believe in
                    yourselves. You have the power to shape your success. Dream
                    big and make us proud and happy!
                  </MDBCardText>
                  <MDBCardText>
                    <small className="text-muted">
                      Administrative Department!
                    </small>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </div>

        <p style={{ textAlign: "justify" }} className="lh-lg py-5 fs-5">
          Kailaswasi Dadasaheb Khaparde, with extraordinary vision, established
          the New High School Main on the occasion of its centenary year. It is
          a matter of great pleasure to welcome everyone to this website. Since
          its inception over a century ago, the school has been tirelessly
          working towards the all-round development of students, preservation of
          culture, growth, language development, and creating highly creative
          and skilled individuals in the fields of science and medicine.
          Adapting to changing times, the school continuously undertakes new
          initiatives that are essential for the well-being and overall
          development of the students. The school achieves this by introspecting
          and implementing changes, ensuring the welfare and holistic
          development of the students. In the coming centuries, the school will
          continue its commitment to shaping students who are not only
          academically proficient but also culturally enriched. The school
          acknowledges the cooperation and support received from all, and we
          believe that with your continued collaboration, the school will
          further prosper. This testimony of trust comes from all the teachers,
          staff, and members of the governing body. We sincerely request your
          ongoing cooperation and support in the future endeavors of the school.
        </p>
      </MDBContainer>

      <br />
      <br />
      <br />

      <MDBContainer className="padding-percent fw-bold text-center" fluid>
        <h2 className="fs-1 fst-italic">Percent bar for school performance!</h2>
        <p>
          -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </p>
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
    </div>
  );
};

export default Home;
