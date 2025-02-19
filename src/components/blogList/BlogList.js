import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BlogList.scss";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch your blog posts here.
    // This could be from an API, markdown files, or any other source.
    // For demonstration, we'll use static data.
    const fetchBlogs = async () => {
      const data = [
        {
          id: 1,
          title: "From Genomes to Communities",
          summary: "How is bioinformatics reshaping public health interventions for greater precision and impact? Dive into real-world applications, from predicting disease outbreaks to tailoring community health programs. Join us in exploring the future where data-driven decisions make healthcare more equitable and effective for all.",
          link: "/blogs/genomes-to-communities",
        },
        {
          id: 2,
          title: "Ethical Challenges in PPH",
          summary: "Ethical challenges arise as precision public health combines genomics and big data to transform healthcare. From data privacy concerns around genetic information to questions of bias, the field faces complex moral dilemmas. Can we balance innovation with equity in this emerging healthcare frontier?",
          link: "/blogs/ethical-challenges-pph",
        },
        // Add more blog posts as needed
      ];
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-item">
          <h2>{blog.title}</h2>
          <p>{blog.summary}</p>
          <Link to={blog.link}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;