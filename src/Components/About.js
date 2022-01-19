import React from "react";
import intro_img from "../Images/img3.png";
import chart from "../Images/chart.png";
import "../Styles/About_style.css";
export default function About() {
  return (
    <div>
      <div className="intro_title">
        <div className="intro-img">
          <img src={intro_img} className="intro-img-1"></img>
        </div>

        <div className="intro-h1">
          <span className="into-h2">INTRODUCTION</span>
            <br />
          <div className="intro-h2-c">
            I am Pragati kabra,III year undergraduate pursuing B.Tech from
            Rajasthan Technical University,Kota,majorly inclined towards
            programming and development,aspiring to become software engineer.I
            have completed my primary education from Jaipur,Rajasthan
          </div>
        </div>
      </div>
      <div className="skills">
          <div className="lang">
              <div className="skill-name">SKILLS</div>
              <br />
              <ul>
                <li>C++</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>REACTJS</li>
                <li>NODEJS</li>
              </ul>
          </div>
          <div className="animation-1">
            <img src={chart} className="chart"></img>
          </div>

      </div>
      {/* <h1>INTRODUCTION</h1>
            <h2>EDUCATION</h2>
            <h1>SKILLS</h1>
            <h1>LANGUAGES</h1> */}
    </div>
  );
}
