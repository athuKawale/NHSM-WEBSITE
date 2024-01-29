import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      color="light"
      bgColor="dark"
      className="text-center text-lg-start text-muted"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                New High School Main
              </h6>
              <p>
                <p>
                  Join us as we celebrate a century of excellence in education
                  at New High School Main 100th-anniversary
                  <a href="https://www.canva.com/design/DAF4znLXz68/FjINr3r5GltaB_UMu3Jx9w/view?utm_content=DAF4znLXz68&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                    {" "}
                    Know More...
                  </a>
                </p>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Important Links</h6>
              <p>
                <a href="#/" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#/about" className="text-reset">
                  About
                </a>
              </p>
              <p>
                <a href="#/contact" className="text-reset">
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#/alumini" className="text-reset">
                  Alumini
                </a>
              </p>
              <p>
                <a href="#/academics" className="text-reset">
                  Academics
                </a>
              </p>
              <p>
                <a href="#/events" className="text-reset">
                  Events
                </a>
              </p>
              <p>
                <a href="#/photogallery" className="text-reset">
                  PhotoGallery
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New High School Main, Jog chowk, Amravati.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                principal.nhsm@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 721 295 1588
              </p>
              <p>
                <MDBIcon icon="mobile" className="me-3" /> +91- 950 365 315 7
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          NHSM1924.com
        </a>
      </div>
    </MDBFooter>
  );
}
