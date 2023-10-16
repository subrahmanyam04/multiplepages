import React from 'react';

const Cards = () => {
   

    const cardData = [
        {
          imageSrc: 'assets/images/21.webp',
          alt: 'window',
          title: 'Card Title 1',
          description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        },
        {
          imageSrc: 'assets/images/22.jpg',
          alt: 'Image 2',
          title: 'Card Title 2',
          description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        },
        {
          imageSrc: 'assets/images/23.jpg',
          alt: 'Image 3',
          title: 'Card Title 3',
          description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        },
        {
            imageSrc: 'assets/images/24.avif',
            alt: 'Image 4',
            title: 'Card Title 4',
            description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          },
          {
            imageSrc: 'assets/images/24.jpg',
            alt: 'Image 5',
            title: 'Card Title 5',
            description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          },
          {
            imageSrc: 'assets/images/26.webp',
            alt: 'Image 6',
            title: 'Card Title 6',
            description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          },
          {
            imageSrc: 'assets/images/21.webp',
            alt: 'window',
            title: 'Card Title 1',
            description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          },
          {
            imageSrc: 'assets/images/22.jpg',
            alt: 'Image 2',
            title: 'Card Title 2',
            description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          },
          {
            imageSrc: 'assets/images/23.jpg',
            alt: 'Image 3',
            title: 'Card Title 3',
            description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          },
          {
              imageSrc: 'assets/images/24.avif',
              alt: 'Image 4',
              title: 'Card Title 4',
              description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            },
            {
              imageSrc: 'assets/images/24.jpg',
              alt: 'Image 5',
              title: 'Card Title 5',
              description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            },
            {
              imageSrc: 'assets/images/26.webp',
              alt: 'Image 6',
              title: 'Card Title 6',
              description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            },
      ];
    return (


    <div>
            <div className="container  position-relative mt-3">
            <h1 className='fs-3  text-danger text-center'>Our Products</h1>
            <hr/>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-2 g-4">
        {cardData.map((card) => (
          <div className="col">
            <div className="card">
              <img src={card.imageSrc} className="card-img-top" alt={card.alt} height={200} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text text-start">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div class="container text-center mt-3">
    <div class="row align-items-start">
      <div class="col">
        <h3>Zenbook</h3>
        <p className='text-start'>The elegant Zenbook is compact, ultrathin and light, featuring the best laptop technology, NanoEdge displays, precision craftsmanship,
             uncompromising performance, 
            and innovation. It's designed to bring out the very best in you <a href="" >more services....</a></p>
            
      </div>
    </div>
 </div>


            </div>



            );
}

            export default Cards;