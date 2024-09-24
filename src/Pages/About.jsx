import "./About.css";
import React from "react";

function About() {
  return (
    <div className="container">
      <div className="container-second">
        <div className="img-container">
          <img src="https://tse2.mm.bing.net/th?id=OIP.To3PFziYTu-dfh7SzsyJMAHaEK&pid=Api&P=0&h=180" alt="profile-photo"/>
        </div>
        <p className="first-para">Arindam Saikia</p>
        <p className="second-para">Assam,Golaghat</p>
        <br/>
        <p className="third-para"><img className="github" src="./github.png" alt="git-img"/>
          <img className="linked-in" src="./linkedin.png" alt="linkedin"/></p>
          <p className="fourth-para">
          Hi there! I’m a second Year student with a passion for coding. I’m open to collaborate to open source project and excel more deep into my tech skills.
          </p>
      </div>
    </div>
  );
}

export default About;
