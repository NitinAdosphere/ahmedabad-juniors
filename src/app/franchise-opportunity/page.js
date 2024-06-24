import React from "react";
import "./franchise-opportunity.css";
import franchise1 from "../../images/franchise/franchise1.webp";
import Image from "next/image";
import branchimage from "../../images/franchise/branch.webp";
import supportimage from "../../images/franchise/support.webp";

const page = () => {
  return (
    <div>
      <section id="content" class="franchise-section">
        <div class="content-wrap">
          <div class="section own-boss-section orange-bg dark nomargin">
            <div class="container">
              <div class="fix-width">
                <div class="own-boss-detail">
                  <div class="own-boss-des">
                    <h3 class="inner-page-section-title white-title">
                      <span>With ahmedabad juniors</span>You can be your
                      <br />
                      Own boss
                    </h3>
                    <ul class="list-points style-big">
                      <li>
                        You can use well-established brand name for which
                        research and hard work <br /> has been done for number
                        of years.
                      </li>
                      <li>
                        Get all the know how of infrastructure, educational
                        technology, marketing at national, <br /> state and
                        local level for which dedicated team is working round
                        the clock.
                      </li>
                      <li>
                        You can take benefit of exclusive parenting sessions by
                        the experts with years <br /> of experience.
                      </li>
                      <li>
                        Save time and energy involved in creating a brand name.
                      </li>
                      <li>Gain from our years of expertise.</li>
                      <li>Reap benefits.</li>
                      <li>Successful business model</li>
                      <li>Be a part of the educationist family.</li>
                    </ul>
                  </div>
                  <div class="own-boss-img">
                    <Image alt="" className="img-fluid" src={franchise1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section support-section blue-bg dark nomargin">
            <div class="container">
              <div class="fix-width">
                <div class="own-boss-detail">
                  <div class="row common-height clearfix">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-support col-bottom">
                      <div class="col-bottom-inner">
                        <h3 class="inner-page-section-title white-title">
                          <span>Center-set up</span>Support
                        </h3>
                        <ul class="list-points style-big">
                          <li>Site visit selection &amp; construction plan.</li>
                          <li>
                            An interior-designing manual (wall, ceiling, floor
                            designs etc)
                          </li>
                          <li>
                            Customized design and availability of furniture,
                            toys and play area.
                          </li>
                          <li>
                            A Few benefits you enjoy being a part of AJ family.
                          </li>
                          <li>
                            Set up support, Day to day support, Marketing
                            Support, Publication/editorial support,
                            Advertisement support, Continuous research and
                            development support, Social Media support, Technical
                            training and recruitment support
                          </li>
                          <li>Modification in existing building</li>
                        </ul>
                        <h4>General terms &amp; conditions</h4>
                        <ul class="list-points">
                          <li>Non-refundable franchise fees</li>
                          <li>Agreement will be for 5 years (initially)</li>
                          <li>
                            Royalty to be paid according to percentage agreed
                            upon.
                          </li>
                          <li>
                            All payments to be made only through bank,{" "}
                            <span class="uppercase">no cash transactions</span>.
                          </li>
                          <li>
                            No other center will be established in your area
                            (with in 2-3 kms)
                          </li>
                          <li>
                            Taxes and GST as per govt. policies and subject to
                            change.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-support col-bottom">
                      <div class="col-bottom-inner">
                        <div class="support-img">
                          <Image
                            alt=""
                            className="img-fluid"
                            src={supportimage}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section branch-section purple-bg dark nomargin">
            <div class="container">
              <div class="center-image">
                <div class="branch-img">
                  <Image alt="" className="img-fluid" src={branchimage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
