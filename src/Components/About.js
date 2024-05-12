import "./About.css";
// import User from "./User";

// const About = () => {
  // return (
    // <div className="py-[40px] px-[230px]">
    //   <h1>About</h1>
    //   <User name={"Vaishnavi Shelke"} location={"Maharashtra"} />
    // </div>    
//   );
// };
import React from "react";
import { Link } from "react-router-dom";

const aboutUsData = {
  whoWeAre: {
    description: "A delicious journey awaits!",
    mission: "To provide high-quality, fresh food at affordable prices",
    content:
      "We are a passionate team dedicated to creating a memorable dining experience for our customers. We use only the freshest ingredients to prepare our dishes, and we take pride in our friendly and attentive service. Whether you're looking for a quick bite or a leisurely meal, we have something for everyone.",
  },
  blogs: [
    {
      id: 1,
      url: "/blog/1", // Replace with your actual blog post URL
      title: "The Secret to Making the Perfect Pizza Dough",
      excerpt: "Learn the secrets to making a light, airy, and flavorful pizza dough at home.",
      blogimg: "https://www.seriouseats.com/thmb/ACyF6kv3V4qAo_H9E-98X5jhuDc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20211115-OONI-PIZZA-ARMENIAN-ANDREW-JANJIGIAN-23-5447ecc61b12450d9a09f38cca67c19c.jpg"
    },
    {
      id: 2,
      url: "/blog/2", // Replace with your actual blog post URL
      title: "5 Must-Try Dishes from Our Menu",
      excerpt: "Discover our most popular and delicious dishes that you won't want to miss.",
      blogimg: "https://cmassets.sgp1.cdn.digitaloceanspaces.com/assets/blogcoverpic/large/1622949891383.jpg"
    },
  ],
  gallery: [
    { id: 1, url: "images/gallery1.jpg", alt: "Restaurant Interior" },
    { id: 2, url: "images/gallery2.jpg", alt: "Delicious Food Dish" },
    { id: 3, url: "images/gallery3.jpg", alt: "Happy Customers Dining" },
  ],
};

const About = () => {
  const { whoWeAre, blogs, gallery } = aboutUsData;

  return (
    <div className="about-page">
      <div className="hero">
        <h1>About Us</h1>
        <p className="description">
          {whoWeAre.description} - {whoWeAre.mission}
        </p>
      </div>
      <div className="who-we-are">
        <h2>Who We Are</h2>
        <p>{whoWeAre.content}</p>
      </div>
      <div className="blogs">
        <h2>Our Blogs</h2>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id} className="blog-card">
              <Link to={blog.url}>
                <img src={blog.blogimg} alt="" />
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="gallery">
        <h2>Our Gallery</h2>
        <div className="gallery-container">
          {gallery.map((image) => (
            <img key={image.id} src={image.url} alt={image.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
