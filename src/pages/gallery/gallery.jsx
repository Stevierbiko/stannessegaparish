import Header from "../../components/Header";
import HeaderImage from "../../image/banner3.jpg";

import "./gallery.css";

function gallery() {
  const galleryLength = 15;
  const images = []
  for(let i  = 1; i <= galleryLength; i++) {
    images.push(require(`../../image/gallery${i}.jpeg`))
  }

  console.log(images);

  return (
    <>
      <Header title="Photo Gallery Of Our Parish" image={HeaderImage}></Header>
    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((image, index) =>{
            return <article key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`} />
            </article>
          })
        }
      </div>
    </section>
    </>
  );
}

export default gallery;
