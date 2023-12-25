import React, { useState } from "react";
import logo from "../static/logo7.png";
import "../static/navbar.css";
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

  return (
    <MDBContainer className="bg-nav pt-2" fluid>
      <MDBContainer>
        <MDBNavbar expand="lg" light bgColor="light">
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
                <MDBNavbarItem className="px-5">
                  <MDBNavbarLink active aria-current="page" href="/">
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem className="px-5">
                  <MDBNavbarLink href="/about">About</MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem className="px-5">
                  <MDBNavbarLink href="/academics">Academics</MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem className="px-5">
                  <MDBNavbarLink href="/events">Events</MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem className="px-5">
                  <MDBNavbarLink href="/photogallery">
                    PhotoGallery
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem className="px-5">
                  <MDBNavbarLink href="/alumini">Alumini</MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem className="px-5">
                  <MDBNavbarLink href="/contact">Contact</MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
      <MDBContainer breakpoint="sm" className="moving-text-cont" fluid>
        <p className="moving-text m-0">
          Join us in celebrating a century of academic excellence at Nutan
          Vidarbha Shikshan Mandal's New High School Mains, Amravati – 100 years
          of shaping minds and creating memories!
        </p>
      </MDBContainer>
    </MDBContainer>
  );
}
