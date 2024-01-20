import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import "../static/css/about.css";
import Footer from "./footer";

const History = () => {
  return (
    <>
      <MDBContainer className="text-center about-cont" fluid>
        <p className="fs-1 fw-bold"> Our History!</p>
      </MDBContainer>
      <div className="about-bg">
        <MDBContainer className="py-5 px-4 text-wrap lh-lg about-text">
          <p className="fs-4">
            Picture this: 1924, a world in transition, and Daadasaheb Khaparde
            lays the cornerstone of our iconic institution. Fast forward to
            today, and you're standing at the threshold of a living, breathing
            history - New High School Mains, Amaravati.
          </p>
          <p className="fs-4">
            🚀 Our story is not a mere timeline; it's a gripping narrative woven
            with threads of resilience, passion, and a touch of rebellion.
            Daadasaheb Khaparde's dream was not just about bricks and mortar; it
            was about fostering a generation that would script its destiny.
          </p>
          <p className="fs-4">
            🎭 Dive into the drama of our evolution – from the early days of the
            Berar Education Society in 1902 to the flamboyant rebirth as the New
            Education Society in 1924. The birth of New High School (Main) was
            our grand entrance, a stage set for the performance of a lifetime.
          </p>
          <p className="fs-4">
            🌈 Over the years, our hallways echoed with the footsteps of
            luminaries - politicians, artists, athletes - each leaving an
            indelible mark on the canvas of our history. Lokmanya Tilak's vision
            echoed in our classrooms, and our alumni became the torchbearers of
            change.
          </p>
          <p className="fs-4">
            🎉 As we unveil the treasure trove of a century, we invite you to
            not just witness but be a part of our history in the making. Join us
            in celebrating a saga of grit, glory, and grandeur. New High School
            (Main) isn’t just a school; it’s a story waiting to be written.
            Let’s script the next chapter together! 🚀📜
          </p>
        </MDBContainer>
      </div>

      <Footer />
    </>
  );
};

export default History;
