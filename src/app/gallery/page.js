"use client";
import React from "react";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import "./gallery.css";
import galleryimages from "../../json/gallery.json";
import Image from "next/image";
import homeBlue from "../../images/home/home-blue.webp"

const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    import("lightgallery/css/lightgallery.css");
    import("lightgallery/css/lg-thumbnail.css");
    import("lightgallery/css/lg-zoom.css");
  }, []);
  return (
    <div className="gallery-page">
      <section className="gallery-title">
        <div className="container">
          <div class="section-title center">
            <h1 class="white">Gallery</h1>
          </div>
        </div>
      </section>
      <section className="gallery-page-section section notoppadding purple-bg nomargin">
        <div className="container text-center">
          <div className="gallery-detail">
            <div className=" clearfix" data-lightbox="gallery">
              <LightGallery plugins={[lgThumbnail, lgZoom]}>
                {galleryimages.gallery &&
                  galleryimages.gallery.map((data, i) => (
                    <Link
                      key={data.id}
                      href={data.popupImage}
                      className="gallery-popup-image"
                    >
                      <Image
                        alt=""
                        className="img-fluid"
                        src={data.image}
                        width={390}
                        height={255}
                      />
                    </Link>
                  ))}
              </LightGallery>
            </div>
          </div>
        </div>
      </section>
      <a href="/" className="back-to-home">
          <Image src={homeBlue} alt="img" className="img-fluid" />
        </a>
    </div>
  );
};

export default Page;
