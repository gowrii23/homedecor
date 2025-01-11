import React from "react";
import "./styles/gallery.css";

const images = [
  {
    url: "https://lh3.googleusercontent.com/p/AF1QipNY5lI5RHMc7MEj8bVQBkRMulaY9bDsebsGgXdH=s680-w680-h510",
    title: "Kitchen",
    description: "A modern kitchen with sleek appliances.",
  },
  {
    url: "https://lh3.googleusercontent.com/p/AF1QipNgUGHOSEnLNKzruaL8_UrdbrpAHHrSbHLO-AT7=s680-w680-h510",
    title: "Bedroom",
    description: "A luxurious bedroom with elegant furnishings.",
  },
  {
    url: "https://lh3.googleusercontent.com/p/AF1QipOpItxXF367_qI3EkQxaRU_Vb-QRzqsDbF9dxfq=s680-w680-h510",
    title: "Kitchen",
    description: "A modern kitchen with sleek appliances.",
  },
  {
    url: "https://lh3.googleusercontent.com/p/AF1QipO8ijPyQevMQvJxPqsrDx02rPp-e3K5eITUuE3k=s680-w680-h510",
    title: "Kitchen",
    description: "A modern kitchen with sleek appliances.",
  },

  {
    url: "https://lh3.googleusercontent.com/p/AF1QipPJjXrJONHytCwY8pAI4h9S9X4RRwdGWQAFQp2k=s680-w680-h510",
    title: "Bedroom",
    description: "A luxurious bedroom with elegant furnishings.",
  },
  {
    url: "https://lh3.googleusercontent.com/p/AF1QipOiCdEEapimgObpLqKHYz1PWsJhZI-TjmwPzeXJ=s680-w680-h510",
    title: "Kitchen",
    description: "A modern kitchen with sleek appliances.",
  },
];

const Gallery = () => (
  <div className="gallery">
    {images.map((image, index) => (
      <div className="gallery-item" key={index}>
        <div className="image-container">
          <img src={image.url} alt={image.title} />
          <div className="overlay">
            <h3>{image.title}</h3> <p>{image.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);
export default Gallery;
