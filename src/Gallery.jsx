import React from "react";
import "./styles/gallery.css";

const images = [
    {
        url: "https://www.bhg.com/thmb/EmuKL4yiqCMRZlclvSIJtMln9vU=/1866x0/filters:no_upscale():strip_icc()/renovated-neutral-colored-living-room-2f194807-3856ba1a2ea04e269ea42e93021fda64.jpg",
        title: "Kitchen",
        description: "A modern kitchen with sleek appliances.",
      },
  {
    url: "https://www.designdekko.com/uploads/blog/1590670912-FeaturedBlogArticle.jpg",
    title: "Bedroom",
    description: "A luxurious bedroom with elegant furnishings.",
  },
  {
    url: "https://www.bhg.com/thmb/EmuKL4yiqCMRZlclvSIJtMln9vU=/1866x0/filters:no_upscale():strip_icc()/renovated-neutral-colored-living-room-2f194807-3856ba1a2ea04e269ea42e93021fda64.jpg",
    title: "Kitchen",
    description: "A modern kitchen with sleek appliances.",
  },
  {
    url: "https://www.bhg.com/thmb/EmuKL4yiqCMRZlclvSIJtMln9vU=/1866x0/filters:no_upscale():strip_icc()/renovated-neutral-colored-living-room-2f194807-3856ba1a2ea04e269ea42e93021fda64.jpg",
    title: "Kitchen",
    description: "A modern kitchen with sleek appliances.",
  },
  {
    url: "https://www.bhg.com/thmb/EmuKL4yiqCMRZlclvSIJtMln9vU=/1866x0/filters:no_upscale():strip_icc()/renovated-neutral-colored-living-room-2f194807-3856ba1a2ea04e269ea42e93021fda64.jpg",
    title: "Kitchen",
    description: "A modern kitchen with sleek appliances.",
  },
  {
    url: "https://www.designdekko.com/uploads/blog/1590670912-FeaturedBlogArticle.jpg",
    title: "Bedroom",
    description: "A luxurious bedroom with elegant furnishings.",
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
