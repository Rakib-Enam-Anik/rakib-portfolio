import React from "react";
import Header from "../components/Header";

const interests = [
  {
    title: "Programming",
    images: ["./images/programming/programming.jpg"],
    description:
      "I love solving problems and building applications using various programming languages and frameworks.",
  },
  {
    title: "Traveling",
    images: [
      "./images/traveling/traveling.jpg",
    ],
    description:
      "Exploring new places, experiencing different cultures, and meeting new people is something I truly enjoy.",
  },
  {
    title: "Reading Books",
    images: [
      "./images/readingbooks/readingbooks.jpg",
     
    ],
    description:
      "Books expand knowledge and imagination. I enjoy reading tech books, fiction, and historical novels.",
  },
  {
    title: "Music",
    images: ["./images/music/music.jpg", "/images/interests/music2.jpg"],
    description:
      "Music helps me relax and focus. I enjoy a variety of genres, from classical to rock and lo-fi beats.I love to listen bangla music.",
  },
  {
    title: "Politics",
    images: [
      "./images/politics/politics.jpg",
    ],
    description:
      "Understanding politics and its impact on society is important to me. I like to stay informed about global affairs.",
  },
  {
    title: "Debate",
    images: ["./images/debate/debate.jpg", "/images/interests/debate2.jpg"],
    description:
      "I enjoy debating on various topics, analyzing different perspectives, and refining my critical thinking skills.",
  },
];

const Interest = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Interests</h2>
            <div className="row">
              {interests.map((interest, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card shadow-sm">
                    {/* Bootstrap Carousel for multiple images */}
                    <div
                      id={`carousel-${index}`}
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {interest.images.map((img, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`carousel-item ${
                              imgIndex === 0 ? "active" : ""
                            }`}
                          >
                            <img
                              src={img}
                              alt={interest.title}
                              className="d-block w-100"
                              style={{ height: "150px", objectFit: "cover" }}
                            />
                          </div>
                        ))}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#carousel-${index}`}
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={`#carousel-${index}`}
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                      </button>
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">{interest.title}</h5>
                      <p className="card-text">{interest.description}</p>
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

export default Interest;
