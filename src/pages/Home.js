import React from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              RAKIB
              <span class="text-primary">ENAM</span>
            </h1>
            <div class="subheading mb-5">
              Founder & CEO -
              <a href="https://www.arteousbd.com/">Arteous Solutions BD</a>
            </div>
            <p class="lead mb-5">
            Software Development, Consultancy and Maintenance.
            </p>
            <div class="social-icons">
           
              <a class="social-icon" href="https://www.linkedin.com/in/rakib-enam/">

              <i class="fa-brands fa-linkedin"></i>
              </a>
              <a class="social-icon" href="https://github.com/Rakib-Enam-Anik">
                <i class="fa fa-github"></i>
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="experience">
          <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Founder & CEO </h3>
                <div class="subheading mb-3">Arteous Solutions BD </div>
                <p>Arteous Solutions BD is a dynamic software development company dedicated to delivering innovative and customized solutions that help businesses thrive in a rapidly evolving digital landscape. Founded with a mission to provide cutting-edge technology services, we specialize in software development, system integration, and IT consultancy.</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">April 2025 - Present</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Software Engineer</h3>
                <div class="subheading mb-3">Teamexus Solutions Ltd</div>
                <p>
                Teamexus Solutions Ltd. is a software development company that provides innovative solutions to help businesses increase efficiency and productivity. It was founded with the goal of providing cutting-edge technology solutions to meet the evolving needs of businesses in the digital age.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">March 2022 - March 2025</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Coordinator</h3>
                <div class="subheading mb-3">Startup Rangpur</div>
                <p>
                Startup Rangpur provides entrepreneurship resources and connects the entrepreneurs with the local and global network.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">April 2021 - Present</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Junior Executive</h3>
                <div class="subheading mb-3">BRAC University Computer Club</div>
                <p>
                As a student of CSE at BRACU. I joined this club, which increases my CS knowledge and leadership quality.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">Jan 2017 - Dec 2019</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">BRAC University</h3>
                <div class="subheading mb-3">Bachelor of Science</div>
                <div>Computer Science and Engineering</div>
                <p></p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">2016 - 2021</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Cantonment Public School and College,Rangpur.</h3>
                <div class="subheading mb-3">Higher Secondary</div>
                <p>Science</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">2013 - 2015</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-html5"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-css3-alt"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-js-square"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-angular"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-node-js"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-sass"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-less"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-wordpress"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-gulp"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-grunt"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-npm"></i>
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

export default Home;
