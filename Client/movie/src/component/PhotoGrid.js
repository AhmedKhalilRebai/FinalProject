import { Container } from 'react-bootstrap';
import React from 'react';


function PhotoGrid() {
  const images = [
    {
      src: 'https://initiate.alphacoders.com/images/108/cropped-500-700-1084080.jpg?464',
      alt: 'Image 1'
    },
    {
      src: 'https://initiate.alphacoders.com/images/996/cropped-800-400-996546.jpg?6071',
      alt: 'Image 2'
    },
    {
      src: 'https://initiate.alphacoders.com/images/112/cropped-1500-500-1123520.jpg?8018',
      alt: 'Image 3'
    },
    {
      src: 'https://initiate.alphacoders.com/images/135/cropped-1000-500-1354450.jpeg?664',
      alt: 'Image 4'
    },
    {
      src: 'https://initiate.alphacoders.com/images/113/cropped-1500-550-1134925.jpg?5511',
      alt: 'Image 5'
    },
    {
      src: 'https://initiate.alphacoders.com/images/115/cropped-1000-500-1157818.jpg?4882',
      alt: 'Image 6'
    },
    {
      src: 'https://initiate.alphacoders.com/images/116/cropped-1100-500-1162441.jpg?3585',
      alt: 'Image 7'
    },
  ];

  return (
    <Container className='mt-4 mb-4'>
          <div className="row">
      <div className="column">
        <img src={images[0].src} alt={images[0].alt} />
      </div>
      <div className="column">
        <img src={images[1].src} alt={images[1].alt} />
        <img src={images[2].src} alt={images[2].alt} />
        <img src={images[3].src} alt={images[3].alt} />
      </div>
      <div className="column">
        <img src={images[4].src} alt={images[4].alt} />
        <img src={images[5].src} alt={images[5].alt} />
        <img src={images[6].src} alt={images[6].alt} />
      </div>
    </div>
    </Container>
  );
}

export default PhotoGrid;
