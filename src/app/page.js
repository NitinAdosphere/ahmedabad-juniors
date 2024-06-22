"use client";
import Image from "next/image";
import "./home.css";
import slide1 from "../images/home/slider/slider-0.jpg";
import slide2 from "../images/home/slider/slider-1.jpg";
import slide3 from "../images/home/slider/slider-2.jpg";
import slide4 from "../images/home/slider/slider-3.jpg";
import slide5 from "../images/home/slider/slider-4.jpg";
import slide6 from "../images/home/slider/slider-5.jpg";
import slide7 from "../images/home/slider/slider-6.jpg";
import PreImg from "/public/images/arrow-left.png";
import NextImg from "/public/images/arrow-right.png";
import OurCampusTitle from "../images/home/about-us/our-others-campuses/our-others-campuses-title.png";
import camp1 from "../images/home/about-us/our-others-campuses/sgvp-international-school-ahmedabad.png";
import camp2 from "../images/home/about-us/our-others-campuses/divyapath-science-school-ahmedabad.png";
import camp3 from "../images/home/about-us/our-others-campuses/dp-high-school-new-vadaj.png";
import camp4 from "../images/home/about-us/our-others-campuses/divyapath-campus-idar.png";
import camp5 from "../images/home/about-us/our-others-campuses/nest-public-school-ranip.png";
import camp6 from "../images/home/about-us/our-others-campuses/new-dp-campus-new-ranip.png";
import MoreCamp from "../images/home/more-brown.png";
import MoreBlogs from "../images/home/more-purple.png";
import Feature1 from "../images/home/features/safe-and-hygienic-environment.png";
import Feature2 from "../images/home/features/specially-developed-curriculum.png";
import Feature3 from "../images/home/features/24-7-assistance-available.png";
import Feature4 from "../images/home/features/learning-from-nature.png";
import Feature5 from "../images/home/features/Capturing-the-true-spirit-of-ahmedabad.png";
import Proslide1 from "../images/home/our-programs/slider-1.png";
import Proslide2 from "../images/home/our-programs/slider-2.png";
import Proslide3 from "../images/home/our-programs/slider-3.png";
import Proslide4 from "../images/home/our-programs/slider-4.png";
import titleBenefit from "../images/home/franchise-opportunity/benefits-of-partnering-with-aj.png";
import MorePink from "../images/home/more-pink.png";
import HirePink from "../images/home/teachers-training/hire-teachers.png";
import TeachersTrainingImg from "../images/home/teachers-training/2.webp";
import PhilosophyImg1 from "../images/home/philosophy/1.png";
import PhilosophyImg2 from "../images/home/philosophy/2.png";
import FranchiseTitle from "../images/home/franchise-opportunity/why-ahmedabad-juniors-title.webp";
import Blogs from "./blogs/page";
import downloadbrochure from "../images/common/download-brochure.webp"
import franchisetitle from "../images/common/franchise-enquiry-title.webp"
import franchisesubmit from "../images/common/submit-btn.webp"
export default function Home() {
  return (
    <>
      {/* Banner Section */}
      <section className="banner-carousel-section">
        <div>
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image
                  src={slide1}
                  className="d-block w-100 img-fluid"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <Image
                  src={slide2}
                  className="d-block w-100 img-fluid"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <Image
                  src={slide3}
                  className="d-block w-100 img-fluid"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <Image
                  src={slide4}
                  className="d-block w-100 img-fluid"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <Image
                  src={slide5}
                  className="d-block w-100 img-fluid"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <Image
                  src={slide6}
                  className="d-block w-100 img-fluid"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <Image
                  src={slide7}
                  className="d-block w-100 img-fluid"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <Image src={PreImg} alt="icon" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <Image src={NextImg} alt="icon" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      {/* Features-section */}
      <section className="features-section">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="features-item">
              <Image src={Feature1} alt="img" className="img-fluid mb" />
              <div>
                <h6>
                  Safe & <br />
                  Hygienic <br />
                  Environment
                </h6>
              </div>
            </div>
            <div className="features-item">
              <Image src={Feature2} alt="img" className="img-fluid" />
              <div>
                <h6>
                  Specially <br /> Developed <br /> Curriculum
                </h6>
              </div>
            </div>
            <div className="features-item">
              <Image src={Feature3} alt="img" className="img-fluid" />
              <div>
                <h6>
                  24x7 <br />
                  Assistance <br />
                  available
                </h6>
              </div>
            </div>
            <div className="features-item">
              <Image src={Feature4} alt="img" className="img-fluid" />
              <div>
                <h6>
                  Learning <br />
                  from <br /> Nature
                </h6>
              </div>
            </div>
            <div className="features-item">
              <Image src={Feature5} alt="img" className="img-fluid" />
              <div>
                <h6>
                  Capturing <br /> the true spirit of <br />
                  Ahmedabad
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About-us Section */}
      <section className="about-us-section">
        <div className="container">
          <h2 className="">About Us</h2>
          <p>
            <strong> AHMEDABAD JUNIORS </strong>
            is an extension of our 38 years long legacy of nurturing the unique
            mind of every child. We have shaped, groomed and guided lacs of
            students. In our journey of shaping young minds, we experienced that
            young ones are the most curious ones and if given a right
            environment along with right approach, can lead them to become an
            explorer, a decision maker, a leader and most importantly a lifelong
            learner. Hence we needed a platform where we can introduce our
            customized child centric curriculum instead of stereotyped pattern
            of learning and give our little ones an exclusive place to explore,
            evolve and express themselves.
          </p>
          <p>
            <strong>AHMEDABAD JUNIORS </strong>
            encourages parents to participate and be apart of their learning
            process. We strongly believe that kids are like wet cement whatever
            falls on them, makes an impression. Through our decade old schools,
            At present we are working with 2500+ prep school students. We keep
            organizing effective workshops and exclusive parenting programs for
            young parents, Researched based innovations in child development has
            been a continuous process, and we are focused to strive vision based
            expansion in child education. We have published several books for
            students and Parents which are quite popular. At AHMEDABAD JUNIORS
            we are determined to give a platform to build their vision for
            tomorrow.
          </p>
        </div>
      </section>
      {/* Our-Campus Section */}
      <section className="our-campus-section">
        <div className="container">
          <h2 className="text-center">
            <Image src={OurCampusTitle} alt="img" className="img-fluid" />
          </h2>
          <div className="row">
            <div className="col-lg-4 text-center">
              <div className="camp-img">
                <Image src={camp1} alt="img" className="img-fluid" />
                <h6>
                  SGVP International School <br /> Ahmedabad
                </h6>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="camp-img">
                <Image src={camp2} alt="img" className="img-fluid" />
                <h6>
                  Divyapath Science School
                  <br /> Ahmedabad
                </h6>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="camp-img">
                <Image src={camp3} alt="img" className="img-fluid" />
                <h6>
                  D.P High School
                  <br /> New Vadaj
                </h6>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="camp-img">
                <Image src={camp4} alt="img" className="img-fluid" />
                <h6>
                  Divyapath Campus
                  <br /> Idar
                </h6>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="camp-img">
                <Image src={camp5} alt="img" className="img-fluid" />
                <h6>
                  Nest Public School
                  <br /> Ranip
                </h6>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="camp-img">
                <Image src={camp6} alt="img" className="img-fluid" />
                <h6>
                  New D.P Campus
                  <br /> New Ranip
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="more-brown">
          <a href="">
            <Image src={MoreCamp} alt="img" className="img-fluid" />
          </a>
        </div>
      </section>
      {/* Ahmedabad-juniors-philosophy-section */}
      <section className="ahmedabad-juniors-philosophy-section">
        <div className="container">
          <div className="d-flex justify-content-center">
            <Image src={PhilosophyImg1} alt="img" className="img-fluid" />
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex justify-content-center ms-5">
                <Image src={PhilosophyImg2} alt="img" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-between">
              <div>
                <h2>
                  <span>Ahmedabad</span>
                  Juniors&apos;{" "}
                  <span className="philosophy-text">Philosophy</span>
                </h2>
              </div>
              <div>
                <h6>
                  We are educationalists, having a legacy of certain values and
                  skills that allow us to go anywhere in the world and be
                  successful in whatever work we choose to do.
                </h6>
                <p>
                  We want to inculcate these skills and values in children from
                  the beginning of their student life. We aspire to create
                  confident personalities, opinion makers, leaders and enable
                  them to stand up for the society.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="more-philosophy-purple">
          <a href="">
            <Image src={MoreBlogs} alt="img" className="img-fluid" />
          </a>
        </div>
      </section>
      {/* franchise-opportunity-section */}
      <section className="franchise-opportunity-section">
        <div className="container">
          <div className="d-flex justify-content-center">
            <h2>Franchise Opportunity</h2>
          </div>
          <div className="d-flex justify-content-center">
            <Image
              src={FranchiseTitle}
              alt="franchiseTitle-img"
              className="img-fluid"
            />
          </div>

          <div className="row">
            <div className="col">
              <div className="franchise-opportunity-info">
                <p>
                  <span>Ahmedabad Juniors </span>is a part of 3 decades old
                  legacy with an experience of more than 38 years in educational
                  field. We have nurtured more than 1 lac kids. You can use
                  well-established brand name for which research and hard work
                  has been done for number of years. Get all the knowhow of
                  infrastructure, educational technology, marketing at national,
                  state and local level for which dedicated team is working
                  round the clock.
                </p>
                <p>
                  Expert parenting sessions for the young parents is a special
                  and unique feature of AJ which directly helps entrepreneurs
                  like you to attract admissions and hence better returns. Gain
                  from our years of expertise. Reap benefits. Successful
                  business model. Be a part of the educationist family
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits-of-partnering section */}
      <section className="benefits-of-partnering">
        <div className="container">
          <h2 className="text-center">
            <Image src={titleBenefit} alt="img" className="img-fluid" />
          </h2>
          <div className="row">
            <div className="col-lg-2">
              <div className="bg-benefits">
                Infrastructure & <br /> ambience design <br />
                (set up support)
              </div>
            </div>
            <div className="col-lg-2">
              <div className="bg-benefits">
                Day to <br /> day guidance
              </div>
            </div>
            <div className="col-lg-2">
              <div className="bg-benefits">
                Equipment and <br /> teaching aids
              </div>
            </div>
            <div className="col-lg-2">
              <div className="bg-benefits">
                Researched <br />
                curriculum
              </div>
            </div>
            <div className="col-lg-2">
              <div className="bg-benefits">
                Teachers <br /> training and <br />
                assessment
              </div>
            </div>
            <div className="col-lg-2">
              <div className="bg-benefits">
                Marketing and <br /> Operational <br />
                support
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-4">
            <div className="col-lg-2">
              <div className="bg-benefits">
                Advertisement <br />
                support
              </div>
            </div>{" "}
            <div className="col-lg-2">
              <div className="bg-benefits">
                Continuous <br />
                Research and <br /> development
              </div>
            </div>
            <div className="col-lg-2">
              <div className="bg-benefits">
                Social Media <br /> support
              </div>
            </div>{" "}
            <div className="col-lg-2">
              <div className="bg-benefits">
                Support and <br />
                guidance in <br />
                organising events
              </div>
            </div>
            <div className="col-lg-2">
              <div className="bg-benefits">
                Lead <br />
                management <br /> support
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="more-pink">
          <a href="">
            <Image src={MorePink} alt="img" className="img-fluid" />
          </a>
        </div>
      </section>
      {/* Our-programs section */}
      <section className="our-programs-section">
        <div className="container">
          <h4>Our Programs</h4>
          <p>
            We have specially designed programs to help your child learn &
            develop. Age appropriate curriculum has been designed which isfull
            of activities and fun learning. Our experts have made sure that
            curriculum meets the individual needs of our tiny tots and healthy
            mix of indoor and outdoor activities ensures your child gets the
            best learning experience.
          </p>
        </div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image
                src={Proslide1}
                className="d-block w-100 img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <Image
                src={Proslide2}
                className="d-block w-100 img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <Image
                src={Proslide3}
                className="d-block w-100 img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <Image
                src={Proslide4}
                className="d-block w-100 img-fluid"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <Image src={PreImg} alt="icon" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <Image src={NextImg} alt="icon" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Teachers-training Section */}

      <section className="teachers-training-section">
        <div>
          <h4>Teachers Training</h4>
          <Image src={TeachersTrainingImg} alt="img" className="img-fluid" />
        </div>
        <div className="hire-expert-pink">
          <a href="">
            <Image src={HirePink} alt="img" className="img-fluid" />
          </a>
        </div>
      </section>

      {/* Blog- Section */}
      <section className="blog-section">
        <h2 className="blog-title">Blog</h2>
        <Blogs totalBlog={2} />

        <div className="more-purple">
          <a href="">
            <Image src={MoreBlogs} alt="img" className="img-fluid" />
          </a>
        </div>
      </section>

      {/* Contact Us section */}

      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-detail">
                <h2>Ahmedabad Juniors</h2>
                <p>Divyapath Campus, Memnagar, Ahmedabad</p>
                <a href="#">Contact on WhatsApp: +91 73833 70091</a>
                <a href="#">Call Us on : +91 73833 70091</a>
                <a href="https://ahmedabadjuniors.com/downloads/ahmedabad-juniors-brochure.pdf" target="_blank">
                  <Image src={downloadbrochure} className='img-fluid' alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
            <div className="franchise-enquiry-form">
           <h2 className="franchise-heading">
            <Image src={franchisetitle} className='img-fluid' alt="" /></h2> 
            <form action="" className="franchise-form">
              <div className="row">
                <div className="col-lg-6 col-form"><input type="fname" class="form-control sm-form-control" placeholder="FirstName" id="inputEmail4" /></div>
                <div className="col-lg-6 col-form"><input type="lname" class="form-control sm-form-control" placeholder="LastName" id="inputEmail4" /></div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-form"><input type="mobile" class="form-control sm-form-control" placeholder="Phone No." id="inputEmail4" /></div>
                <div className="col-lg-12 col-form"><input type="email" class="form-control sm-form-control" placeholder="Email Address" id="inputEmail4" /></div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-form"><input type="city" class="form-control sm-form-control" placeholder="City" id="inputEmail4" /></div>
                <div className="col-lg-6 col-form"><input type="area" class="form-control sm-form-control" placeholder="Area" id="inputEmail4" /></div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <button className="btn btn-submit">
                <Image src={franchisesubmit} className='img-fluid' alt="" />
                </button>

              </div>
            </div>

            </form>
            
            </div>
            </div>
          </div>
        </div>

      </section>


    </>
  );
}
