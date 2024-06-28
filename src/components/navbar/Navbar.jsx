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

  const center = [
    "MANINAGAR",
    "NEWGOTA",
    "NEW RANIP",
    "NEW CHANDKHEDA",
    "NEW CG ROAD",
    "NEW SHAHIBAUG",
    "TRAGAD",
    "GHATLODIYA",
  ];
  return (
    <>
      <nav className={navbarClassName}>
        <div className="container d-flex align-items-end main-navbar">
          <div className="nav-social-media">
            <ul>
              <li>
                <a href="#" className="facebook-icon">
                  {" "}
                  <LiaFacebookF />
                </a>
              </li>
              <li>
                <a href="#" className="instagram-icon">
                  <LiaInstagram />
                </a>
              </li>
              <li>
                <a href="#" className="twitter-icon">
                  <LiaTwitter />
                </a>
              </li>
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
                <a
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Admission
                </a>
              </li>

              {/* <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Admission Enquiry
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form action="">
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-form">
                            <label htmlFor="">Child&aposs Name</label>
                            <input type="text" required />
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-form">
                            <label htmlFor="">Parents Name</label>
                            <input type="text" required />
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-form">
                            <label htmlFor="">email</label>
                            <input type="email" required />
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-form">
                            <label htmlFor="">MobileNumber</label>
                            <input type="email" required />
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-form">
                            <label htmlFor="">Select center</label>
                            <select name="" id="">
                              <option value=""></option>
                            </select>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}

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
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Admission Enquiry
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form action="">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-form">
                    <label>Childs Name</label>
                    <input
                      type="text"
                      id="childname"
                      name="childname"
                      value=""
                      class="sm-form-control childname required"
                      required
                    />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-form">
                    <label>Parents Name</label>
                    <input
                      type="text"
                      id="ParentsName"
                      name="ParentsName"
                      value=""
                      class="sm-form-control ParentsName required"
                      required
                    />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-form">
                    <label>Email</label>
                    <input
                      type="email"
                      id="Email"
                      name="Email"
                      value=""
                      class="sm-form-control Email required"
                      required
                    />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-form">
                    <label>Phone Number</label>
                    <input
                      type="email"
                      id="PhoneNumber"
                      name="PhoneNumber"
                      value=""
                      class="sm-form-control PhoneNumber required"
                      required
                    />
                  </div>

                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-form">
                    <label>Select center</label>
                    <select name="" id="">
                      {center &&
                        center.map((item, index) => {
                          return (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-form">
                    <label>Area</label>
                    <input
                      type="text"
                      id="Area"
                      name="Area"
                      value=""
                      class="sm-form-control Area required"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
