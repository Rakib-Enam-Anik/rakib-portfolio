import React from "react";
import Header from "../components/Header";

const Projects = () => {
  const wordpressProjects = [
    {
      title: "Website of Teamexus",
      image: "./images/projects/teamexus.jpg",
      description: "A custom WordPress website built for an e-commerce store.",
      link: "https://www.teamexus.com/",
    },
    {
      title: "Arch-Diary",
      image: "./images/projects/archdiary.jpg",
      description: "A corporate WordPress site with custom plugins.",
      link: "https://arch-diary.com/",
    },
  ];

  const fullStackProjects = [
    {
      title: "School Management System",
      image: "fs_project1.jpg",
      description: "A medical appointment booking system using Django & React.",
      link: "https://example.com/fs-project1",
      github: "https://github.com/yourgithub/fs-project1",
    },
    {
      title: "Hospital Management System",
      image: "fs_project2.jpg",
      description: "A real-time chat application built with Django & Next.js.",
      link: "https://example.com/fs-project2",
      github: "https://github.com/yourgithub/fs-project2",
    },
  ];

  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="projects">
          <div className="resume-section-content">
            <h2 className="mb-5">Projects</h2>
            
            <div className="subheading mb-3">WordPress Projects</div>
            <div className="row">
              {wordpressProjects.map((project, index) => (
                <div className="col-md-6 mb-4" key={index}>
                  <div className="card">
                    <img src={project.image} className="card-img-top" alt={project.title} />
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                      <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="subheading mb-3">Full-Stack Projects (Django + React/Next.js)</div>
            <div className="row">
              {fullStackProjects.map((project, index) => (
                <div className="col-md-6 mb-4" key={index}>
                  <div className="card">
                    <img src={project.image} className="card-img-top" alt={project.title} />
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                      <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
                      <span style={{ margin: "0 10px" }}></span>
                      <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Projects;