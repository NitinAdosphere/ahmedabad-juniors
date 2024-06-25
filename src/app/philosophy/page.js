import React from "react";
import dinoimage from "../../images/philosophy/1.webp";
import Image from "next/image";
import "./philosophy.css";

const page = () => {
  return (
    <div>
      <section className="philosophy-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 d-flex align-items-end">
              <div className="philosophy-heading">
                <h2>
                  <span>“WE ARE CREATING A PLATFORM FOR</span> FUTURE
                  GENERATIONS”
                </h2>
              </div>
            </div>
            <div className="col-lg-4">
              <Image src={dinoimage} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="philosophy-details">
                <p>
                  A platform that makes children curious about everything,
                  Curiosity leads them to ask questions, enable them to explore
                  the environment around them and most importantly make them a
                  lifelong learners.
                </p>
                <p>
                  Our progressive, individualized teaching philosophy will
                  prepare children to accomplish more. Rather than following
                  standard stereotyped curriculum, our team of veteran teachers
                  has taken a fresh approach.
                </p>
                <p>
                  Our curriculum focus on ancient and modern Indian history,
                  glorious civilization and the real heroes of the Nation. Also,
                  our specially designed modules allow children to learn general
                  knowledge with fun.
                </p>
                <p>
                  We encourage parents to participate in their children’s
                  learning process. We maintain transparency that promotes
                  positive and productive relationships with the parents.
                </p>
                <p>
                  The pre-school age has the maximum potential to learn new
                  things, and we want to harness that potential to boost their
                  curiosity through our Ahmedabad Juniors Learning Platforms
                  inspired by the true spirit of Ahmedabad. Our vision is to
                  build their vision for tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
