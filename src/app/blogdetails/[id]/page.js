"use client";
import "./blogdetails.css";
import Image from "next/image";
import { useParams } from "next/navigation";
import blogsData from "../../../json/blogs.json";
import React, { useEffect, useState } from "react";

const BlogDetails = () => {
  const params = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const parsedId = parseInt(params.id, 10);
    const fetchedBlog = blogsData.blogs.find((blog) => blog.id === parsedId);
    setBlog(fetchedBlog);
  }, [params.id]);

  if (!blog) {
    return <h1>Blog not found</h1>;
  }
  console.log(blog);

  return (
    <section className="individual-blog-post">
      <div className="mx-width">
        <div className="individual-blog-post-title">
          <h1>{blog.title}</h1>
          <Image
            src={blog.img}
            alt="img"
            className="img-fluid"
            width={455}
            height={325}
          />
        </div>
        <div className="individual-blog-post-body">
          {blog.details &&
            blog.details.map((detail) => (
              <p className="body-title" key={detail}>
                {detail}
              </p>
            ))}
          {blog.listItems && (
            <div>
              <ol>
                {blog.listItems.map((li) => (
                  <li key={li}>
                    <span className="li-title">{li.title}</span>
                    <br />
                    <span className="li-desc">{li.desc}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
          {blog.footer && <p className="body-title">{blog.footer}</p>}
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
