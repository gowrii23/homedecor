import React from "react";
import "./styles/gallery.css";

const images = [
  {
    url: "https://cdn.prod.website-files.com/60ac16cc7bfd6e0921683645/635b006a82142d5eddea79d1_black%20patio%20cover%20in%20san%20antonio.jpg",
    title: "Kitchen",
    description: "A modern kitchen with sleek appliances.",
  },
  {
    url: "https://pergoladepot.com/wp-content/uploads/2019/05/Multi-Use-Patio-Pergola.jpg",
    title: "Bedroom",
    description: "A luxurious bedroom with elegant furnishings.",
  },
  {
    url: "https://azenco-outdoor.com/wp-content/uploads/2024/11/R-Blade-pergola-ideas-6.jpg",
    title: "Kitchen",
    description: "A modern kitchen with sleek appliances.",
  },
  {
    url: "https://azenco-outdoor.com/wp-content/uploads/2024/11/R-Blade-pergola-ideas-6.jpg",
    title: "Kitchen",
    description: "A modern kitchen with sleek appliances.",
  },

  {
    url: "https://pergoladepot.com/wp-content/uploads/2019/05/Multi-Use-Patio-Pergola.jpg",
    title: "Bedroom",
    description: "A luxurious bedroom with elegant furnishings.",
  },
  {
    url: "https://cdn.prod.website-files.com/60ac16cc7bfd6e0921683645/635b006a82142d5eddea79d1_black%20patio%20cover%20in%20san%20antonio.jpg",
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
