import React from "react";
import "./about-us.css";
import aboutImg from "../../images/home/about-us/about-us.webp";
import jaydevSonagara from "../../images/home/about-us/jaydev-sonagara-new.webp";
import homeBlue from "../../images/home/home-blue.webp";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="mx-width">
        <div className="background-img">
          <Image src={aboutImg} alt="About Us" className="img-fluid" />
        </div>
        <div className="about-list-heading">
          <span>WE ARE KNOWN AND RESPECTED FOR…</span>
          <ul>
            <li>37 years of strong educational background.</li>
            <li>
              Expertise of the educational sector and parenting counseling.
            </li>
            <li>More than 1,00,000 children nurtured.</li>
            <li>Exclusive Parenting sessions for young parents.</li>
            <li>Effective and innovative curriculum.</li>
            <li>
              Supporting staff is available locally, to assist and guide you at
              every step.
            </li>
            <li>Effective and supportive management.</li>
            <li>No compromise in the quality of our standards.</li>
            <li>
              Collaboration with more than 20 schools of all boards to
              facilitate admissions of students after AJ Stage-3.
            </li>
            <li>Admission preference given to students of AJ.</li>
            <li>Unique and beneficial franchise model.</li>
            <li>Constant guidance and support.</li>
          </ul>
        </div>
        <div className="row about-jaydev-sonagara">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <div className="d-flex md:justify-content-center md:align-items-center">
              <Image
                src={jaydevSonagara}
                alt="About Us"
                className="img-fluid"
                // style={{ width: "173px", height: "200px" }}
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <div>
              <h3>
                Jaydev Sonagara <span>(Mentor of Ahmedabad Juniors)</span>
              </h3>
              <span>
                Director, Educationist, Author, Poet, Parenting Expert
              </span>
              <p>
                (In his inspirational career of 38 years, he has guided 50,000+
                parents on path of holistic upbringing of their kids.)
              </p>
              <p>
                “Writing and researching on parenting and understanding the
                concerns faced by a child on the bench of a classroom has always
                been my areas of interest. And my years of experience has lead
                me to establish AHMEDABAD JUNIORS wherein I wish to provide an
                exclusive place to young children to explore, to express to be
                confident in life, to have fun with knowledge.
                <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Read More
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div class="modal-content">
            <div class="modal-header bg-yellow">
              <div>
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Jaydev Sonagara (Mentor of Ahmedabad Juniors)
                </h1>
                <span>Educationist, Author</span>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>
                (In his inspirational career of 38 years, he has guided 50,000+
                parents on path of holistic upbringing of their kids.)
              </p>
              <p>
                “Writing and researching on parenting and understanding the
                concerns faced by a child on the bench of a classroom has always
                been my areas of interest. And my years of experience has lead
                me to establish AHMEDABAD JUNIORS wherein I wish to provide an
                exclusive place to young children to explore, to express to be
                confident in life, to have fun with knowledge.
              </p>
              <p>
                A place, where they can be left free to learn from nature and
                develop their own opinion and be a decision maker in future. At
                AJ teachers are facilitators and not preachers. Veteran teachers
                who understand child psychology and their learning patterns very
                well have developed curriculum. AHMEDABAD JUNIORS is the only
                child development center which provides the knowledge of our
                rich Indian history in fun way method, develops a sense of pride
                for their ancestors and their nation among young ones which
                makes them an independent person in future. Till now I have
                taught more than 10000 students and it has taught me that every
                mind is different and so is their learning and understanding
                style.”
              </p>
              <p>
                WE ARE EDUCATIONIST.You shall discover your dreams and
                aspirations through our journey -we encourage the individuals
                who have a passion of early childhood education to associate
                with us as our business partner, I take this opportunity to
                invite you to be a part of this educational journey and
                experience learning at its helm.
              </p>
              <p>
                Birth of a child in family is a destiny but giving them best
                education is a choice. choose the best one.
              </p>
            </div>
          </div>
        </div>
      </div>
      <a href="/" className="back-to-home">
        <Image src={homeBlue} alt="img" className="img-fluid" />
      </a>
    </section>
  );
};

export default AboutUs;
