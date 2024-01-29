import {
  MDBContainer,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import React from "react";
import "../static/css/about.css";
import Footer from "./footer";
import { useState } from "react";
import yourPhotos from "../static/json/staffimages.json";

const PhotoGallery = ({ yourPhotos }) => {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  const adminData = yourPhotos.filter((item) => item.department === "admin");
  const teacherData = yourPhotos.filter(
    (item) => item.department === "teacher"
  );
  const ntData = yourPhotos.filter((item) => item.department === "nt");
  const manageData = yourPhotos.filter(
    (item) => item.department === "management"
  );

  return (
    <div>
      <MDBTabs className="mb-3">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick("tab4")}
            active={basicActive === "tab4"}
          >
            Management
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick("tab1")}
            active={basicActive === "tab1"}
          >
            Administrative Department
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick("tab2")}
            active={basicActive === "tab2"}
          >
            Teachers Department
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick("tab3")}
            active={basicActive === "tab3"}
          >
            Non Teaching Staff
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      {manageData &&
        manageData.map((record) => {
          console.log(record.src);
          return (
            <div>
              <MDBTabsContent>
                <MDBTabsPane open={basicActive === "tab4"}>
                  <MDBContainer className="py-3 pb-4 d-flex justify-content-center text-center lora-font">
                    <MDBCard
                      className="p-3 border border-secondary"
                      style={{ maxWidth: "550px" }}
                    >
                      <MDBRow className="g-0">
                        <MDBCol lg="4">
                          <MDBCardImage
                            className="img-fluid rounded"
                            src={require(`../static/staff/${record.src}`)}
                            alt="..."
                            width={200}
                            height={200}
                            fluid
                          />
                        </MDBCol>
                        <MDBCol lg="8">
                          <MDBCardBody>
                            <MDBCardText className="fs-4">
                              <b className="text-muted">
                                Designition: {record.subject}
                              </b>
                            </MDBCardText>
                            <MDBCardTitle className="fs-4">
                              <b>Name: {record.name}</b>
                            </MDBCardTitle>
                          </MDBCardBody>
                        </MDBCol>
                      </MDBRow>
                    </MDBCard>
                  </MDBContainer>
                </MDBTabsPane>
              </MDBTabsContent>
            </div>
          );
        })}

      {adminData &&
        adminData.map((record) => {
          console.log(record.src);
          return (
            <div>
              <MDBTabsContent>
                <MDBTabsPane open={basicActive === "tab1"}>
                  <MDBContainer className="py-3 pb-4 d-flex justify-content-center text-center lora-font">
                    <MDBCard
                      className="p-3 border border-secondary"
                      style={{ maxWidth: "550px" }}
                    >
                      <MDBRow className="g-0">
                        <MDBCol lg="4">
                          <MDBCardImage
                            className="img-fluid rounded"
                            src={require(`../static/staff/${record.src}`)}
                            alt="..."
                            width={200}
                            height={200}
                            fluid
                          />
                        </MDBCol>
                        <MDBCol lg="8">
                          <MDBCardBody>
                            <MDBCardTitle>Name: {record.name}</MDBCardTitle>
                            <MDBCardText>
                              Qualification: {record.qualification}
                            </MDBCardText>
                            <MDBCardText>
                              <small className="text-muted">
                                DESIGNITION: {record.subject}
                              </small>
                            </MDBCardText>

                            <MDBCardText>
                              <small className="text-muted">
                                Year of Experience:
                                {record.experience}
                              </small>
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCol>
                      </MDBRow>
                    </MDBCard>
                  </MDBContainer>
                </MDBTabsPane>
              </MDBTabsContent>
            </div>
          );
        })}

      {teacherData &&
        teacherData.map((record) => {
          console.log(record.src);
          return (
            <div>
              <MDBTabsContent>
                <MDBTabsPane open={basicActive === "tab2"}>
                  <MDBContainer className="py-3 pb-4 d-flex justify-content-center text-center lora-font">
                    <MDBCard
                      className="p-3 border border-secondary"
                      style={{ maxWidth: "550px" }}
                    >
                      <MDBRow className="g-0">
                        <MDBCol lg="4">
                          <MDBCardImage
                            className="img-fluid rounded"
                            src={require(`../static/staff/${record.src}`)}
                            alt="..."
                            width={200}
                            height={200}
                            fluid
                          />
                        </MDBCol>
                        <MDBCol lg="8">
                          <MDBCardBody>
                            <MDBCardTitle>Name: {record.name}</MDBCardTitle>
                            <MDBCardText>
                              Qualification: {record.qualification}
                            </MDBCardText>
                            <MDBCardText>
                              <small className="text-muted">
                                Subject: {record.subject}
                              </small>
                            </MDBCardText>

                            <MDBCardText>
                              <small className="text-muted">
                                Year of Experience:
                                {record.experience}
                              </small>
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCol>
                      </MDBRow>
                    </MDBCard>
                  </MDBContainer>
                </MDBTabsPane>
              </MDBTabsContent>
            </div>
          );
        })}

      {ntData &&
        ntData.map((record) => {
          console.log(record.src);
          return (
            <div>
              <MDBTabsContent>
                <MDBTabsPane open={basicActive === "tab3"}>
                  <MDBContainer className="py-3 pb-4 d-flex justify-content-center text-center lora-font">
                    <MDBCard
                      className="p-3 border border-secondary"
                      style={{ maxWidth: "550px" }}
                    >
                      <MDBRow className="g-0">
                        <MDBCol lg="4">
                          <MDBCardImage
                            className="img-fluid rounded"
                            src={require(`../static/staff/${record.src}`)}
                            alt="..."
                            width={200}
                            height={200}
                            fluid
                          />
                        </MDBCol>
                        <MDBCol lg="8">
                          <MDBCardBody>
                            <MDBCardTitle>Name: {record.name}</MDBCardTitle>
                            <MDBCardText>
                              Qualification: {record.qualification}
                            </MDBCardText>
                            <MDBCardText>
                              <small className="text-muted">
                                Subject: {record.subject}
                              </small>
                            </MDBCardText>

                            <MDBCardText>
                              <small className="text-muted">
                                Year of Experience:
                                {record.experience}
                              </small>
                            </MDBCardText>
                          </MDBCardBody>
                        </MDBCol>
                      </MDBRow>
                    </MDBCard>
                  </MDBContainer>
                </MDBTabsPane>
              </MDBTabsContent>
            </div>
          );
        })}
    </div>
  );
};

const Staff = () => {
  return (
    <>
      <PhotoGallery yourPhotos={yourPhotos} />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Staff;
