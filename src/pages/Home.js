import React from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

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
              I am a passionate software engineer with a strong eagerness to
              learn and adapt to new technologies efficiently. As a full-stack
              developer, I specialize in React and Django, designing and
              developing APIs using the Django Rest Framework. My expertise
              extends to object-oriented programming, GeneXus, and WordPress. I
              have built numerous websites through WordPress customization,
              including software solutions company websites, personal
              portfolios, eCommerce platforms, educational institution sites,
              and hospital management systems. I have experience working with
              both free and paid themes and plugins, including Elementor,
              Elementor Pro, WPForms, WPBakery, and WooCommerce. I have
              customized websites using themes like Astra, DIVI, Avada, and
              StoreFront. Additionally, I have implemented various security
              plugins such as All-in-One Security, Content Protection, Sucuri,
              and iThemes Security to enhance website protection. Beyond
              customization, I have developed WordPress themes and plugins using
              HTML, CSS, JavaScript, React, and PHP. My full-stack development
              experience includes designing databases, building front-end and
              back-end systems, and integrating various technologies. I have
              successfully developed systems such as Doctor Consultation
              Management (DCM), Diagnostic Center Management System (DCMS),
              Hospital Management System (HCMS), and Educational Management
              System (ECMS) using React, Next.js, Django, Django Rest Framework,
              MySQL, SQLite, and more. I am committed to leveraging my skills to
              create impactful solutions that contribute to society and improve
              lives.
            </p>
            <div className="social-icons">
              <a
                className="social-icon"
                href="https://www.linkedin.com/in/rakib-enam/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                className="social-icon github"
                href="https://github.com/Rakib-Enam-Anik"
              >
                <FontAwesomeIcon icon={faGithub} />
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
                <p>
                  Arteous Solutions BD is a dynamic software development company
                  dedicated to delivering innovative and customized solutions
                  that help businesses thrive in a rapidly evolving digital
                  landscape. Founded with a mission to provide cutting-edge
                  technology services, we specialize in software development,
                  system integration, and IT consultancy.
                </p>
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
                  Teamexus Solutions Ltd. is a software development company that
                  provides innovative solutions to help businesses increase
                  efficiency and productivity. It was founded with the goal of
                  providing cutting-edge technology solutions to meet the
                  evolving needs of businesses in the digital age.
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
                  Startup Rangpur provides entrepreneurship resources and
                  connects the entrepreneurs with the local and global network.
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
                  As a student of CSE at BRACU. I joined this club, which
                  increases my CS knowledge and leadership quality.
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
                <h3 class="mb-0">
                  Cantonment Public School and College,Rangpur.
                </h3>
                <div class="subheading mb-3">Higher Secondary</div>
                <p>Science</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">2013 - 2015</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">
                  Cantonment Public School and College,Rangpur.
                </h3>
                <div class="subheading mb-3">Secondary</div>
                <p>Science</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">2011 - 2013</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />

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
                VS Code, Git, Linux, Postman, Figma, Firebase, Draw.io,
                Wireframing
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
