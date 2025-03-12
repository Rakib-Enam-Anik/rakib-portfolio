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
            <div class="subheading mb-3">Programming Languages </div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                JavaScript, Python, Php, Java
              </li>
            </ul>

            <div class="subheading mb-3">FrameWork</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Django, GeneXus, React.js, Bootstrap, Django-rest-framework
              </li>
              
            </ul>

            <div class="subheading mb-3">Database</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                MySQL, SQLite, PostgreSQL
              </li>
              
            </ul>

            <div class="subheading mb-3">CMS</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                WordPress
              </li>
              
            </ul>

            <div class="subheading mb-3">Testing</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Manual Testing, Unit Testing
              </li>
              
            </ul>
            <div class="subheading mb-3">Project Management Software</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Backlog, Task Time Tracking(TTT)
              </li>
              
            </ul>
         
          

            
            <div class="subheading mb-3">Others</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                VS Code, Git, Linux, Postman, Figma, Firebase, Draw.io, Wireframing 
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