"use client";
import Image from "next/image";
import React from "react";
import "./blogs.css";
import { useState, useEffect } from "react";
import data from "../../json/blogs.json";
import LineImg from "/public/images/blog/top-line.png";
import Link from "next/link";
import homeBlue from "../../images/home/home-blue.webp";

const Blogs = ({ totalBlog }) => {
  const [blogs, setBlogs] = useState([]);
  const displayedBlogs = totalBlog ? blogs.slice(0, totalBlog) : blogs;

  useEffect(() => {
    // Simulating fetching data from JSON file
    const fetchData = async () => {
      try {
        setBlogs(data.blogs);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    // Call fetchData function
    fetchData();
  }, []);
  // console.log('firstsdfsad')

  return (
    <div>
      <section className="blog-section">
        <div className="container">
          {displayedBlogs &&
            displayedBlogs.map((item) => (
              <div key={item.id}>
                <Image
                  src={LineImg}
                  alt="img"
                  className="img-fluid"
                  width={4000}
                  height={30}
                />
                <div className="blog-item">
                  <div
                    key={item.id}
                    className="row d-flex justify-content-center"
                  >
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 text-end">
                      <Image
                        src={item.img}
                        alt="img"
                        className="img-fluid"
                        width={455}
                        height={325}
                      />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-blog">
                      <h3>{item.title}</h3>
                      <p>
                        {item.content.split("\n").map((text, index) => (
                          <span key={index}>
                            {text}
                            <br />
                          </span>
                        ))}
                      </p>
                      <Link href={`/blogdetails/${item.id}`}>
                        <Image
                          src={item.btn}
                          alt="Read More"
                          className="img-fluid"
                          width={120}
                          height={60}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <Image
            src={LineImg}
            alt="img"
            className="img-fluid"
            width={4000}
            height={30}
          />
        </div>
        <a href="/" className="back-to-home">
          <Image src={homeBlue} alt="img" className="img-fluid" />
        </a>
      </section>
    </div>
  );
};

export default Blogs;
