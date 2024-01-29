import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../static/css/home.css"; // Assuming you have a CSS file for styling

const HiddenTextComponent = ({ title, initialText, icon }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleText = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <MDBCol>
      <MDBCard className="feature_card">
        <div onClick={toggleText}>
          <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBIcon className="ms-1 p-2" icon={icon} size="8x" />
            <MDBCardText
              className={isTextVisible ? "visible-text" : "hidden-text"}
            >
              {initialText}
            </MDBCardText>
          </MDBCardBody>
        </div>
      </MDBCard>
    </MDBCol>
  );
};

export default HiddenTextComponent;
