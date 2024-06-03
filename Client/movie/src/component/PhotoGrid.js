import { Container } from 'react-bootstrap';
import React from 'react';


function PhotoGrid() {
  const images = [
    {
      src: 'https://initiate.alphacoders.com/images/108/cropped-500-700-1084080.jpg?2288',
      alt: 'Image 1'
    },
    {
      src: 'https://initiate.alphacoders.com/images/507/cropped-800-400-507810.jpg?8948',
      alt: 'Image 2'
    },
    {
      src: 'https://initiate.alphacoders.com/images/135/cropped-1500-500-1352155.png?1006',
      alt: 'Image 3'
    },
    {
      src: 'https://initiate.alphacoders.com/images/134/cropped-1000-500-1340753.png?4895',
      alt: 'Image 4'
    },
    {
      src: 'https://initiate.alphacoders.com/images/699/cropped-1500-550-699203.jpg?3074',
      alt: 'Image 5'
    },
    {
      src: 'https://initiate.alphacoders.com/images/100/cropped-1000-500-1009528.jpg?1161',
      alt: 'Image 6'
    },
    {
      src: 'https://initiate.alphacoders.com/images/134/cropped-1100-500-1348490.png?30',
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
