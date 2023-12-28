// Home.js
import React from "react";
import {
  MDBContainer,
  MDBInputGroup,
  MDBTextArea,
  MDBRow,
  MDBCol,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../static/contact.css";
import Footer from "./footer";
import Map from "../utils/map";

const Contact = () => {
  return (
    <>
      <MDBContainer className="text-center contact-cont" fluid>
        <p className="fs-1 fw-bold"> Contact Us!</p>
      </MDBContainer>

      <MDBContainer className="py-5">
        <MDBRow center>
          <MDBCol size="4">
            <div className="text-start">
              <p className="fs-3">Address!</p>
              <p className="fs-6">
                Survey No.43/1B & 45, Sulikunte Village, <br />
                Dommasandra Post,
                <br />
                Bangalore-562125.
              </p>

              <p className="fs-3">Call!</p>
              <p className="fs-6">
                Phone : 080-22518100 080-27822260 <br />
                Mobile : +91- 9663783617 +91- 6364547474
                <br />
                Cambridge : +91-9663115148 / 080 -22518130 080-22518140
              </p>

              <p className="fs-3">Contact Timings!</p>
              <p className="fs-6">
                Monday – Friday : 8.30 am to 3.30 pm <br />
                Saturday : 8.30 am to 12.30 pm
                <br />
                Fax : +91-80- 2657 2787 <br />
                Email : contact@east.dpsbangalore.edu.in ,
                admissions@east.dpsbangalore.edu.in
              </p>
            </div>
          </MDBCol>
          <MDBCol size="4">
            <div>
              <p className="fs-4">Have Any Questions? Let Us Know</p>
              <p className="pb-2">_______________</p>
              <MDBInputGroup className="mb-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name*"
                />
              </MDBInputGroup>
              <MDBInputGroup className="mb-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Phone*"
                />
              </MDBInputGroup>
              <MDBInputGroup className="mb-4" textAfter="@gmail.com">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email*"
                />
              </MDBInputGroup>
              <MDBInputGroup
                className="mb-4"
                textTag="div"
                textBefore={<MDBCheckbox />}
              >
                <input
                  className="form-control"
                  type="text"
                  placeholder="From Amravati?"
                />
              </MDBInputGroup>

              <MDBInputGroup className="mb-4">
                <MDBTextArea label="Message*" id="textAreaExample" rows={4} />
              </MDBInputGroup>
              <div className="text-center">
                <MDBBtn outline rounded className="mx-auto" color="dark">
                  Dark
                </MDBBtn>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer className="pb-5 px-5">
        <Map />
      </MDBContainer>
      <Footer />
    </>
  );
};

export default Contact;

//AIzaSyDmns_oO-ywOHEObdWcN1AtNQHAEoMetvA
