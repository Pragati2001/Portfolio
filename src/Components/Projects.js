import React from "react";
import "../Styles/Projects-style.css";
import movie from "../Images/movie1.jpg";
import mario from "../Images/mario.png";
import todo from "../Images/tod0.png";
import weather from "../Images/weather.png";
export default function Projects() {
  return (
    <div className="Projects">
      <div className="heading">
        <span>PROJECTS</span>
      </div>
      <div className="container2">
        <div class="block1">
          <div class="div_heading1"></div>
          <div class="div_content">
            <img src={movie} className="movie"></img>
            <div className="proj-content">
              Implemented basic React functionality like using
              api,pagenation,etc. to build a clone of movies point,
            </div>
          </div>
        </div>
        <div class="block2">
          <div class="div_heading2"></div>
          <div class="div_content">
            <img src={todo}></img>
            <div class="proj-content">
              You add items,delete items,sort it,move up and down items based on
              priority and clear the input.
            </div>
          </div>
        </div>
        <div class="block3">
          <div class="div_heading3"></div>
          <div class="div_content">
            <img src={mario}></img>
            <div class="proj-content">
              Help Mario in reaching to princess by dodging mushrooms,and with
              each level speed of mushroom increases.
            </div>
          </div>
        </div>
        <div class="block4">
          <div class="div_heading4"></div>
          <div class="div_content">
            <img src={weather}></img>
            <div class="proj-content">
              Using react api,helps in finding weather condition
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
