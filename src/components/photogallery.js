import React from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import slides from "../utils/slides";
import "yet-another-react-lightbox/styles.css";
import { MDBContainer } from "mdb-react-ui-kit";

const PhotoGallery = () => {
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      <MDBContainer className="p-4" fluid>
        <PhotoAlbum
          layout="rows"
          photos={slides}
          targetRowHeight={150}
          onClick={({ index: current }) => setIndex(current)}
        />

        <Lightbox
          index={index}
          slides={slides}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
      </MDBContainer>
    </>
  );
};

export default PhotoGallery;
