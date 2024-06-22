import React from 'react'
import "./Footer.css"
import planeImage from  "../../../images/common/plan.webp"
import facebook from "../../../images/common/facebook.webp"
import instagram from "../../../images/common/instagram.webp"
import twitter from "../../../images/common/twitter.webp"
import Image from 'next/image'

const Footer = () => {
  return (
    <section className="footer">
        <div className="container">
            <div className="row">
            <div className="col-xl-6">
                    <ul className='social-link'>
                <li><a href="index.html"><Image src={facebook} className='img-fluid' alt="" /></a></li>
                <li><a href="about.html"><Image src={instagram} className='img-fluid' alt="" /></a></li>
                <li><a href="services.html"><Image src={twitter} className='img-fluid' alt="" /></a></li>
              </ul>
            </div>
                <div className="col-xl-6">
                    <Image src={planeImage} className='img-fluid footer-plan' alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12 text-center">
                    <h6 className='copyright-text'>© 2024 All Rights Reserved by Ahmedabad Juniors | Powered by Adosphere</h6>
                    </div>
                    
            </div>
        </div>
    </section>
  )
}

export default Footer