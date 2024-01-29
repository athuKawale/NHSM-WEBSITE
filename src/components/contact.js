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
import "../static/css/contact.css";
import Footer from "./footer";
import Map from "../utils/map";

const Contact = () => {
  return (
    <>
      <MDBContainer className="text-center contact-cont" fluid>
        <p className="fs-1 fw-bold"> Contact Us!</p>
      </MDBContainer>

      <MDBContainer className="p-5">
        <MDBRow center>
          <MDBCol>
            <div className="text-start">
              <p className="fs-3">Address!</p>
              <p className="fs-6">
                Jog Chowk, Sham Square
                <br />
                Amravati Post,
                <br />
                Amravati-444601.
              </p>

              <p className="fs-3">Call!</p>
              <p className="fs-6">
                Phone : +91 721 295 1588 <br />
                Mobile : +91- 9503653157
                <br />
                Alternate Mobile : +91- 9403053107
              </p>

              <p className="fs-3">Contact Timings!</p>
              <p className="fs-6">
                Monday – Friday : 11 am to 5.30 pm <br />
                Saturday : 7.30 am to 12.30 pm
                <br />
                Email : principal.nhsm@gmail.com
              </p>
            </div>
          </MDBCol>
          <MDBCol>
            <div>
              <p className="fs-4">Have Any Questions? Let Us Know</p>
              <p className="pb-2">_______________</p>
              <form>
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
                <div className="text-center py-2">
                  <MDBBtn outline rounded className="mx-auto" color="dark">
                    Submit
                  </MDBBtn>
                </div>
              </form>
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
