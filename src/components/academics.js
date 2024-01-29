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
import "../static/css/academics.css";
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
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane open={iconsActive === "tab1"}>
          <MDBContainer style={{ height: 600 }}>
            <MDBAccordion className="pt-5" initialActive={1}>
              <MDBAccordionItem
                collapseId={1}
                headerTitle="5th to 10th State Board(Semi-English)"
              >
                This course follows the curriculum prescribed by the state board
                of education, with instruction in both English and Marathi. It
                covers a range of subjects, including mathematics, science,
                social studies, and language arts.
              </MDBAccordionItem>
              <MDBAccordionItem
                collapseId={2}
                headerTitle="5th to 10th State Board(Marathi Medium)"
              >
                This course follows the same curriculum as the Semi-English
                course, but with instruction in Marathi. This is a good option
                for students who are more comfortable learning in their native
                language.
              </MDBAccordionItem>
              <MDBAccordionItem
                collapseId={3}
                headerTitle="11-12th General Science"
              >
                This course covers the basics of physics, chemistry, biology,
                and astronomy. It is a good option for students who are
                interested in a broad range of science topics.
              </MDBAccordionItem>
              <MDBAccordionItem
                collapseId={4}
                headerTitle="11-12th Electronincs"
              >
                This course covers the fundamentals of electronics, including
                circuit theory, digital electronics, and microcontrollers. It is
                a good option for students who are interested in pursuing a
                career in electronics engineering.
              </MDBAccordionItem>

              <MDBAccordionItem collapseId={5} headerTitle="11-12th HSCVC">
                <strong>Our Branches Offered under HSCVC.</strong>
                <ul>
                  <li>Accounting and Office Management</li>
                  <li>Electronincs</li>
                  <li>Electrical</li>
                </ul>
                This course is specifically designed to prepare students for the
                HSCVC exam. It covers the same topics as the General Science V
                course, but in more depth.
              </MDBAccordionItem>
            </MDBAccordion>
          </MDBContainer>
        </MDBTabsPane>
        <MDBTabsPane open={iconsActive === "tab2"}>
          <MDBContainer className="pt-5 font_rules" style={{ height: 600 }}>
            <MDBListGroup light numbered style={{ minWidth: "22rem" }}>
              <MDBListGroupItem>
                <strong>Marathi First: </strong>Embrace Marathi as the primary
                language of communication and instruction. Encourage fluency and
                understanding through active use in academics, daily
                interactions, and cultural activities.
              </MDBListGroupItem>
              <MDBListGroupItem>
                <strong>Respect and Kindness:</strong> Treat everyone in the
                school community with respect and kindness, regardless of their
                background or differences. This includes teachers, staff, fellow
                students, and visitors. Practice active listening and be
                considerate of others' feelings and needs.
              </MDBListGroupItem>
              <MDBListGroupItem>
                <strong>Responsibility and Accountability: </strong>Come to
                school prepared and on time, with all necessary materials and
                completed assignments. Take ownership of your learning and
                complete tasks to the best of your ability. Be honest in your
                work and acknowledge mistakes as opportunities for growth.
              </MDBListGroupItem>
              <MDBListGroupItem>
                <strong>Safety and Security:</strong> Follow all school rules
                and regulations regarding safety procedures, emergency drills,
                and use of school facilities. Report any suspicious activity or
                potential danger to a trusted adult immediately. Maintain a
                clean and clutter-free environment to prevent accidents.
              </MDBListGroupItem>
              <MDBListGroupItem>
                <strong>Positive Attitude and Collaboration:</strong> Approach
                school with a positive attitude and a willingness to learn. Be
                helpful and collaborative in group work, and treat others with
                fairness and cooperation. Foster a positive learning environment
                for yourself and your classmates.
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBContainer>
        </MDBTabsPane>
        {/* <MDBTabsPane open={iconsActive === "tab3"}>
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
        </MDBTabsPane> */}
      </MDBTabsContent>

      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}
