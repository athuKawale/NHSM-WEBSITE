import React, { useState } from "react";
import "../static/navbar.css";
import useWindowSize from "../utils/userWindowSize";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Navbar() {
  const [openNavCentred, setOpenNavCentred] = useState(false);
  const size = useWindowSize();

  return (
    <MDBContainer className="bg-nav" fluid>
      <MDBContainer className="text-center p-2"></MDBContainer>
      <MDBContainer>
        <MDBNavbar
          className="rounded rounded-3"
          expand="lg"
          light
          bgColor="light"
        >
          <MDBContainer className="padding-navbar" fluid>
            <MDBNavbarToggler
              type="button"
              data-target="#navbarCenteredExample"
              aria-controls="navbarCenteredExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setOpenNavCentred(!openNavCentred)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>

            <MDBCollapse
              navbar
              open={openNavCentred}
              center
              id="navbarCenteredExample"
            >
              <MDBNavbarNav fullWidth={false} className="mb-2 mb-lg-0">
                <MDBNavbarItem className="px-5 mx-1">
                  <MDBNavbarLink active aria-current="page" href="/">
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem className="px-5 mx-1">
                  <MDBNavbarLink href="/about">About</MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem className="px-5 mx-1">
                  <MDBNavbarLink href="/academics">Academics</MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem className="px-5 mx-1">
                  <MDBNavbarLink href="/events">Events</MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem className="px-5 mx-1">
                  <MDBNavbarLink href="/photogallery">
                    PhotoGallery
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem className="px-5 mx-1">
                  <MDBNavbarLink href="/alumini">Alumini</MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem className="ps-5 mx-1">
                  <MDBNavbarLink href="/contact">Contact Us</MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>

      {size.width > 1800 ? (
        <MDBContainer breakpoint="sm" className="moving-text-cont" fluid>
          <p className="moving-text m-0">
            Join us in celebrating a century of academic excellence at Nutan
            Vidarbha Shikshan Mandal's New High School Mains, Amravati – 100
            years of shaping minds and creating memories!
          </p>
        </MDBContainer>
      ) : (
        <MDBContainer className="py-2"></MDBContainer>
      )}
    </MDBContainer>
  );
}
