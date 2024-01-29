import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import "../static/css/about.css";
import Footer from "./footer";

const About = () => {
  return (
    <>
      <MDBContainer className="text-center about-cont" fluid>
        <p className="fs-1 fw-bold"> About Us!</p>
      </MDBContainer>
      <div className="about-bg">
        <MDBContainer className="py-5 mb-5 px-4 text-wrap lh-lg about-text">
          <p className="fs-4">
            🚀 Dive into the heart of a century-long saga at New High School
            Main, Amaravati! Our journey, ignited in 1924 by the visionary
            Daadasaheb Khaparde, has been nothing short of a thrilling
            adventure. We're not just a school; we are a living, breathing
            narrative of passion, patriotism, and academic brilliance!
          </p>
          <p className="fs-4">
            🎓 As proud members of the New Education Society, we've sculpted the
            destinies of leaders, visionaries, and trailblazers. From the
            vibrant hues of Lokmanya Tilak's vision to the modern vibrancy of
            our state-of-the-art facilities, we've embraced the evolution of
            education.
          </p>
          <p className="fs-4">
            🏫 Nestled in the historical city of Amaravati, our campus buzzes
            with the energy of a century's worth of lessons, laughter, and
            luminaries. Our modern gymnasium, optics lab, computer hub, and
            sprawling sports fields are not just spaces; they're canvases for
            dreams and achievements.
          </p>
          <p className="fs-4">
            🎉 Join us in celebrating a century of New High School Main! We're
            not just marking a milestone; we're embracing the future. Step into
            our vibrant community, where every student, teacher, and alumni
            contribute to the tapestry of our rich legacy. Let's create history
            together! 🚀📚
          </p>
        </MDBContainer>
      </div>

      <Footer />
    </>
  );
};

export default About;
