import React, { useState } from "react";
import "../static/css/navbar.css";
import useWindowSize from "../utils/userWindowSize";
import { useLocation } from "react-router-dom";
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
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

export default function Navbar() {
  const [openNavCentred, setOpenNavCentred] = useState(false);
  const size = useWindowSize();
  const location = useLocation();

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
                  <MDBNavbarLink
                    active={location.pathname === "/"}
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem className="px-5 mx-1">
                  <MDBDropdown>
                    <MDBDropdownToggle
                      tag="a"
                      className="nav-link"
                      role="button"
                    >
                      About
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem link>
                        <MDBNavbarLink
                          active={location.pathname === "/history"}
                          href="/history"
                        >
                          Our History
                        </MDBNavbarLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem link>
                        <MDBNavbarLink
                          active={location.pathname === "/about"}
                          href="/about"
                        >
                          About Us
                        </MDBNavbarLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem link>
                        <MDBNavbarLink
                          active={location.pathname === "/staff"}
                          href="/staff"
                        >
                          Our Staff
                        </MDBNavbarLink>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>

                <MDBNavbarItem className="px-5 mx-1">
                  <MDBNavbarLink
                    active={location.pathname === "/academics"}
                    href="/academics"
                  >
                    Academics
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem className="px-5 mx-1">
                  <MDBNavbarLink
                    active={location.pathname === "/events"}
                    href="/events"
                  >
                    Events
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem className="px-5 mx-1">
                  <MDBNavbarLink
                    active={location.pathname === "/photogallery"}
                    href="/photogallery"
                  >
                    PhotoGallery
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem className="px-5 mx-1">
                  <MDBNavbarLink
                    active={location.pathname === "/alumini"}
                    href="/alumini"
                  >
                    Alumini
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem className="ps-5 mx-1">
                  <MDBNavbarLink
                    active={location.pathname === "/contact"}
                    href="/contact"
                  >
                    Contact Us
                  </MDBNavbarLink>
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
