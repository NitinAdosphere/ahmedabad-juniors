"use client";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import AjLogo from "../../images/common/aj-logo.webp";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHippo } from "@fortawesome/free-regular-svg-icons";
import { LiaFacebookF, LiaInstagram, LiaTwitter } from "react-icons/lia";





import "./navbar.css";

const Navbar = () => {
  const pathname = usePathname();

  const navbarClassName =
    pathname !== "/blogs"
      ? "navbar navbar-expand-lg"
      : "navbar navbar-without-bg navbar-expand-lg";

  return (
    <>
      <nav className={navbarClassName}>
        <div className="container d-flex align-items-end main-navbar">
          <div className="nav-social-media">
            <ul>
                <li><a href="#" className="facebook-icon"> <LiaFacebookF /></a></li>
                <li><a href="#" className="instagram-icon"><LiaInstagram /></a></li>
                <li><a href="#" className="twitter-icon"><LiaTwitter /></a></li>
            </ul>
          </div>
          <a className="navbar-brand" href={"/"}>
            <Image src={AjLogo} alt="" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Programs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Franchise Opportunity
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Branches
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Teachers Training
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Admission
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
          <div className="header-social-media clearfix hidden-xs hidden-sm">
            <a
              href=""
              className="social-media-icon facebook"
              target="_blank"
              rel="nofollow"
            >
              {" "}
              <i className="icon-facebook"></i>{" "}
            </a>

            <a
              href=""
              className="social-media-icon twitter"
              target="_blank"
              rel="nofollow"
            >
              {" "}
              <i className="icon-twitter"></i>{" "}
            </a>

            <a
              href=""
              className="social-media-icon instagram"
              target="_blank"
              rel="nofollow"
            >
              {" "}
              <i className="icon-instagram"></i>{" "}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
