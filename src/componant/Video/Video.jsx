
import React from "react";
import "./Videos.scss";

import topDecoration from "../../assets/top-decoration.png";
import bottomDecoration from "../../assets/bottom-decoration.png";

// Local Videos
import vid1 from "../../assets/vid1.mp4";
import vid2 from "../../assets/vid2.mp4";
import vid3 from "../../assets/vid3.mp4";
import vid4 from "../../assets/vid4.mp4";
import vid5 from "../../assets/vid5.mp4";

const videos = [
  {
    type: "youtube",
    id: "PdZfpaUyME0",
    title: "AIM Inspire Talks - Deeva",
  },
  {
    type: "youtube",
    id: "PR5sY2X7t7I",
    title: "Deeva Karnani Shah",
  },
  {
    type: "local",
    src: vid1,
    title: "Deeva's Speech",
  },
  {
    type: "local",
    src: vid2,
    title: "Interview with Deeva",
  },
  {
    type: "local",
    src: vid3,
    title: "Literary Journey",
  },
  {
    type: "local",
    src: vid4,
    title: "Deeva's Journey",
  },
  {
    type: "local",
    src: vid5,
    title: "Award Ceremony",
  },
];

const Videos = () => {
  return (
    <section className="videos-parent parent">
      <div className="videos-cont container">

        {/* Decorations */}
        <div className="videos-decoration top-decoration">
          <img src={topDecoration} alt="" />
        </div>

        <div className="videos-decoration bottom-decoration">
          <img src={bottomDecoration} alt="" />
        </div>

        {/* Heading */}
        <div className="videos-heading">
          <span>Videos</span>
          <h2>Our Exclusive Video Collection</h2>
        </div>

        {/* Video Gallery */}
        <div className="videos-grid">
          {videos.map((video) => (
            <div className="video-card" key={video.title}>

              {video.type === "youtube" ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <video
                  src={video.src}
                  title={video.title}
                  controls
                  preload="metadata"
                  playsInline
                />
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Videos;
