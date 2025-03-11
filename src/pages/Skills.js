import React from "react";
import Header from "../components/Header";

const Skills = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                GeneXus
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Html,Css
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                JavaScript, React Js, Node Js, Typescript, Express Js
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Php, Laravel
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Python, Django
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                SQL, MySQL, Postgress SQL, MongoDB
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Tools : Vs Code, Git, Github
              </li>
              
            </ul>

            
            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Mobile-First, Responsive Design
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Cross Browser Testing & Debugging
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Cross Functional Teams
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Agile Development & Scrum
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Skills;