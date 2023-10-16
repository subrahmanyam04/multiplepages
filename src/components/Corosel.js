
import React from 'react';
const Corosel = ()=>{
    const carouselData = [
        {
          imageSrc: 'assets/images/1.jpg',
          alt: 'windows',
          caption: 'First slide label',
          description: 'Some representative placeholder content for the first slide.',
        },
        {
            imageSrc: 'assets/images/2.avif',
            alt: 'Laptop2',
            caption: 'First slide label',
            description: 'Some representative placeholder content for the first slide.',
          },
          {
            imageSrc: 'assets/images/3.avif',
            alt: 'Laptop1',
            caption: 'First slide label',
            description: 'Some representative placeholder content for the first slide.',
          },
      ];
    return(

        <div>
            
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
          {carouselData.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={item.imageSrc} className="d-block w-100" height={500} alt={item.alt} />
              <div className={`carousel-caption  d-none d-md-block`} >
                <h5>{item.caption}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            
        </div>

    );
}

export default Corosel;