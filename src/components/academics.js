import React, { useState } from "react";
import {
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBContainer,
  MDBAccordion,
  MDBAccordionItem,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import Footer from "./footer";

export default function Academics() {
  const [iconsActive, setIconsActive] = useState("tab1");

  const handleIconsClick = (value) => {
    if (value === iconsActive) {
      return;
    }

    setIconsActive(value);
  };

  return (
    <>
      <MDBTabs className="mb-3">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleIconsClick("tab1")}
            active={iconsActive === "tab1"}
          >
            <MDBIcon fas icon="university" className="me-2" /> Courses
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleIconsClick("tab2")}
            active={iconsActive === "tab2"}
          >
            <MDBIcon fas icon="chart-line" className="me-2" /> Rules and
            Regulations
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleIconsClick("tab3")}
            active={iconsActive === "tab3"}
          >
            <MDBIcon fas icon="trophy" className="me-2" /> Awards and
            Achievements
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane open={iconsActive === "tab1"}>
          <MDBContainer style={{ height: 600 }}>
            <MDBAccordion className="pt-5" initialActive={1}>
              <MDBAccordionItem collapseId={1} headerTitle="Course No #1">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </MDBAccordionItem>
              <MDBAccordionItem collapseId={2} headerTitle="Course No #2">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </MDBAccordionItem>
              <MDBAccordionItem collapseId={3} headerTitle="Course No #3">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </MDBAccordionItem>
            </MDBAccordion>
          </MDBContainer>
        </MDBTabsPane>
        <MDBTabsPane open={iconsActive === "tab2"}>
          <MDBContainer className="pt-5" style={{ height: 600 }}>
            <MDBListGroup light numbered style={{ minWidth: "22rem" }}>
              <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
              <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
              <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
              <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
              <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
            </MDBListGroup>
          </MDBContainer>
        </MDBTabsPane>
        <MDBTabsPane open={iconsActive === "tab3"}>
          <MDBContainer style={{ height: 600 }}>
            <MDBAccordion className="pt-5" initialActive={1}>
              <MDBAccordionItem collapseId={1} headerTitle="Award No #1">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </MDBAccordionItem>
              <MDBAccordionItem collapseId={2} headerTitle="Award No #2">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </MDBAccordionItem>
              <MDBAccordionItem collapseId={3} headerTitle="Award No #3">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </MDBAccordionItem>
            </MDBAccordion>
          </MDBContainer>
        </MDBTabsPane>
      </MDBTabsContent>

      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}
