import React from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import slides from "../utils/slides";
import "yet-another-react-lightbox/styles.css";
import {
  MDBContainer,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";

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
      <MDBContainer className="text-center">
        <nav aria-label="Page navigation example">
          <MDBPagination center className="mb-0">
            <MDBPaginationItem disabled>
              <MDBPaginationLink href="#" tabIndex={-1} aria-disabled="true">
                Previous
              </MDBPaginationLink>
            </MDBPaginationItem>
            <MDBPaginationItem>
              <MDBPaginationLink href="#">1</MDBPaginationLink>
            </MDBPaginationItem>
            <MDBPaginationItem>
              <MDBPaginationLink href="#">2</MDBPaginationLink>
            </MDBPaginationItem>
            <MDBPaginationItem>
              <MDBPaginationLink href="#">3</MDBPaginationLink>
            </MDBPaginationItem>
            <MDBPaginationItem>
              <MDBPaginationLink href="#">Next</MDBPaginationLink>
            </MDBPaginationItem>
          </MDBPagination>
        </nav>
      </MDBContainer>
    </>
  );
};

export default PhotoGallery;
