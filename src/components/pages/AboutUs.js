import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function AboutUs() {
  const {sidebar, setSidebar} = useContext(AppContext);
  
  return (
    <div
    onClick={()=>{setSidebar(false)}}
    id="about" 
    className="footer mx-auto text-white flex-col justify-between items-start py-24">
      <div>
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="pt-6">
          Welcome to IIST toConnect , a dynamic platform dedicated to fostering
          creativity, collaboration, and knowledge exchange among students. We
          believe in the power of projects to not only showcase skills but also
          to inspire and connect individuals with a shared passion for learning
          and innovation
        </p>
        <h2 className="text-4xl font-semibold mt-6">Our Vision</h2>
        <p className="mt-6">
          At our Platform, we envision a community where students from diverse
          backgrounds come together to share, collaborate, and learn from one
          another. Our goal is to create a space that transcends the boundaries
          of traditional education, providing a platform for students to
          showcase their talents, discover new ideas, and find like-minded
          collaborators.
        </p>
      </div>

      <div className="mt-14">
        <h2 className="text-4xl font-semibold">What We Offer</h2>
        <div>
          <h3 className="text-2xl font-semibold mt-6">Project Showcase</h3>
          <p className="mt-4">
            Elevate your projects to new heights! Our platform allows students
            to showcase their innovative and creative endeavors. Whether it's a
            coding project, a design prototype, or a research paper, every
            project finds its place here. We celebrate the diversity of projects
            across disciplines and aim to create a hub for inspiration and
            exploration.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mt-6">Collaborate and Connect</h3>
          <p className="mt-4">
            Looking for a project partner or seeking help with your latest
            endeavor? Connect with fellow students who share your interests and
            skills. Our collaborative environment makes it easy to find the
            right people to bring your ideas to life. Expand your network,
            exchange knowledge, and embark on exciting projects together.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mt-6">Learning Opportunities</h3>
          <p className="mt-4">
            Beyond project sharing, we provide resources and learning
            opportunities to help you grow. Access educational content,
            participate in workshops, and stay updated on the latest trends in
            various fields. We are committed to supporting your educational
            journey and providing a platform for continuous learning.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold  mt-6">Join Us on this Journey</h3>
          <p className="mt-4">
            IIST ToConnect is more than just a platform; it's a community-driven
            initiative fueled by the passion and creativity of students like
            you. Whether you're a seasoned project enthusiast or just starting
            your journey, we invite you to join us on this exciting adventure.
          </p>
          <p className="mt-4">Let's create, collaborate, and learn together!</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
