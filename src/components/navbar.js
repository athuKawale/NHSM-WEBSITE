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
  const [openNavNoToggler, setOpenNavNoToggler] = useState(false);

  return (
    <MDBContainer>
      <MDBNavbar
        className="shadow-3"
        fixed="top"
        expand="lg"
        light
        bgColor="light"
      >
        <MDBContainer className="py-5 my-2" fluid>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavNoToggler(!openNavNoToggler)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNavNoToggler}>
            <MDBNavbarNav fullWidth={false} className="mb-2 mb-lg-0 fs-5">
              <MDBNavbarItem className="mx-5">
                <MDBNavbarLink active aria-current="page" href="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className="mx-5">
                <MDBNavbarLink href="/about">About</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className="mx-5">
                <MDBNavbarLink href="/academics">Academics</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className="mx-5">
                <MDBNavbarLink href="/events">Events</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className="mx-5">
                <MDBNavbarLink href="/photogallery">PhotoGallery</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className="mx-5">
                <MDBNavbarLink href="/alumini">Alumini</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className="mx-5">
                <MDBNavbarLink href="/contact">Contact</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </MDBContainer>
  );
}
