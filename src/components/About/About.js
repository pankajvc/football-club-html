import React from "react";
import AboutImg from "../../assets/images/about-img.png";
import "./About.css";
import Button from "../Button";
function About() {
  return (
    <section className="about-section">
      <div className="container-xl">
        <div className="wrapper-box">
          <div className="left-box box">
            <div className="image-box position-relative">
              <img className="w-100" src={AboutImg} alt="about" />
            </div>
          </div>
          <div className="left-box box">
            <h3 className="sub-title">About</h3>
            <p className="title">real soccer Football club </p>
            <p className="par-16 dark-grey">
              The 2018/19 season was the 27th of the Premier League after its
              formation in 1992. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled when an
              unknown printer took a galley of type and scrambledit to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960
            </p>
            <Button name="find event" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
