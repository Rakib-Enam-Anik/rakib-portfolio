import React from "react";
import Header from "../components/Header";

const certifications = [
  {
    title: "JavaScript Intermediate",
    CredentialId: "CC-4XMWYVLD",
    link: "https://www.sololearn.com/en/certificates/CC-4XMWYVLD",
    image: "/images/certifications/javascriptintermediate.png",
  },
  {
    title: "SQL Intermediate",
    CredentialId: "CC-ICAZHSEL",
    link: "https://www.sololearn.com/en/certificates/CC-ICAZHSEL",
    image: "/images/certifications/sqlintermediate.jpg",
  },
  {
    title: "PHP",
    CredentialId: "CT-JMUP7AWAY",
    link: "https://www.sololearn.com/en/certificates/CT-JMUP7AWY",
    image: "/images/certifications/php.jpg",
  },
  {
    title: "GeneXus 17 Junior Analyst",
    CredentialId: "120247",
    link: "https://training.genexus.com/en/learning/certifications/certified-technicians2",
    image: "/images/certifications/genexus.jpg",
  },
  {
    title: "Python (Basic) Certificate",
    CredentialId: "ODD36C835ABD",
    link: "https://www.hackerrank.com/certificates/0dd36c835abd",
    image: "/images/certifications/tech-competition.jpg",
  },
  
];

const Certification = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5">Certifications</h2>
            <div className="row">
              {certifications.map((cert, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <div className="card shadow-sm">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="card-img-top"
                      style={{ height: "150px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{cert.title}</h5>
                      <p className="card-text">
                        <strong>Title Number:</strong> {cert.CredentialId}
                      </p>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        View Certification
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Certification;

