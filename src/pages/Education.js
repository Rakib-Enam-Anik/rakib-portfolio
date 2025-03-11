import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
       
        

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0"> BRAC University </h3>
                <div class="subheading mb-3">Bachelor of Science</div>
                <div>Computer Science and Engineering</div>
                <p></p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">2016 - 2021 </span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0"> Cantonment Public School & College, Rangpur</h3>
                <div class="subheading mb-3">Higher Secendory</div>
                <div> Science </div>
                <p></p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">2013 - 2015 </span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0"> Cantonment Public School & College, Rangpur</h3>
                <div class="subheading mb-3"> Secendory</div>
                <div> Science </div>
                <p></p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">2011 - 2013 </span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Education;