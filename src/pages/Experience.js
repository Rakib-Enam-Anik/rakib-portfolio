import React from "react";
import Header from "../components/Header";

const Experience = () => {
  return (
    <>
       <Header />
       <div class="container-fluid p-0">
        <section class="resume-section" id="experience">
          <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Founder & CEO </h3>
                <div class="subheading mb-3">Arteous Solutions BD </div>
                <p>
                Software Development, Consultancy and Maintenance.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">April 2025 - Present</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Software Engineer</h3>
                <div class="subheading mb-3"> Teamexus Solutions Ltd. </div>
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
                <span class="text-primary">Jan 2017 - December 2019</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />

      </div>
    </>
  );
};

export default Experience;
