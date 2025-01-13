import React from "react";
import "./styles/gallery.css";


const images = [

  {
    url: "/1.jpg",
    /*https://lh3.googleusercontent.com/p/AF1QipM5YMhkKaEx1Xpq4SJU8ig81cqIePiKd1f37-W5=s680-w680-h510 */
    title: "ET",
    description: "Excellent service from start to finish. We had Gary do a pergola and carport for us recently. We are very pleased with Gary’s work. He is very honest and trustworthy and I would not hesitate to recommend him to others. Thanks Gary!",
  },
  {
    url: "/2.jpg",
    /*https://lh3.googleusercontent.com/p/AF1QipOm-AR_kve7ago1eqwJWo5bPfJr2PnVJfv02JIt=s680-w680-h510 */
    title: "Will Li",
    description: "My wife and I couldn't be happier with the carport Gary and his dad built for us. Gary really went the extra mile, even helping us chop down a bunch of tree branches to fit the carport, and he didn't charge us anything extra for it. Talking to Gary is super easy because he's not just a nice guy, he's genuinely caring. He's very skilled and professional, and his prices are very reasonable. We'd recommend him in a heartbeat!",
  },
  {
    url: "/3.jpg",
     /*https://lh3.googleusercontent.com/p/AF1QipNWCCcAOFNUMfiP2eacJgs8CTVLkCNy68QrMNkc=s680-w680-h510 */
    title: "Michelle Mansueto",
    description: "I was very impressed with garys work. My pergola looks great and very professionally sone",
  },
  {
    url: "/4.jpg",
     /*https://lh3.googleusercontent.com/p/AF1QipMgNcFUVD_AQAH2561OXWXLWNkRUYAQINScmckN=s680-w680-h510 */
    title: "Shamsheer Verma",
    description: "Recently Gary worked on our property in Ingleburn to build patio and full glass sunroom. He has done an amazing job and quality workmanship based all in spot on pricing. He is quite accomodating to requests and humble in providing in suggestions that will improve the overall outlook and design of sunroom.",
  },
  {
    url: "/5.jpeg",
     /*https://lh3.googleusercontent.com/p/AF1QipPQHq7wBW98ideYUFB0UMKBJb_SGwlaVboTA3rD=s680-w680-h510 */
    title: "Gary naji",
    description: "Worked by Gary",
  },
  {
    url: "/6.jpg",
     /* https://lh3.googleusercontent.com/p/AF1QipP7h2TJEihv3gLU8G_WEOb9OlKkChE6snfRpTc=s680-w680-h510*/
    title: "Thanh Truong-Do",
    description: "Gary helped us to build a composite deck and insulated pergola. The results turned out amazing due to his attention to detail. He supported us along the process and even jumped up on the roof and gave us a few recommendations. A+ customer experience and he went above and beyond. Definitely recommending him to family and friends.",
  },
  {
    url: "/7.jpg",
     /* https://lh3.googleusercontent.com/p/AF1QipMMIul3wCWgQ5mP7Y8F8QBgMzDvjfBJJbiKIg8s=s680-w680-h510*/
    title: " P Panico",
    description: "Garry did a fantastic job to extend our existing Stratco pergola. He cares a lot about his work and the customer and is very good tradesman. Fair price too. I would happily recommend Garry to anyone. Thank you again, Regards Paul",
  },
  {
    url: "/8.jpg",
     /*https://lh3.googleusercontent.com/p/AF1QipOgYeMg6ktZ7BLpULIkCppwygfv7QpxMXCIkbw7=s680-w680-h510 */
    title: "Ganesh Radhakrishnan",
    description: "Gary did an extended car port for my place. He was professional, clear and trustworthy. I found the quote from him as nominal. Highly recommend his company for this kind of work.",
  },
  {
    url: "/9.jpg",
     /*https://lh3.googleusercontent.com/p/AF1QipNjZlkzvGT2kEd0H0ox2DUtczWUXIUZlu8n9uWT=s680-w680-h510 */
    title: "Anm Rahman",
    description: "Image by Customer.",
  },
];


const Gallery = () => (
  <section id="gallery">
    <div className="gallery">
      {images.map((image, index) => (
        <div className="gallery-item" key={index}>
          <div className="image-container">
            <img src={image.url} alt={image.title} />
            <div className="overlay">
              <h3>{image.title}</h3>
              <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                          <path id="star" d="M12 2L14.09 8.26L20.63 8.91L15.81 12.97L17.82 19.27L12 15.99L6.18 19.27L8.19 12.97L3.37 8.91L9.91 8.26L12 2Z" fill="gold"/>
                      </defs>
                      <use href="#star" x="0" y="0"/>
                      <use href="#star" x="24" y="0"/>
                      <use href="#star" x="48" y="0"/>
                      <use href="#star" x="72" y="0"/>
                      <use href="#star" x="96" y="0"/>
                  </svg>
              <p>{image.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default Gallery;