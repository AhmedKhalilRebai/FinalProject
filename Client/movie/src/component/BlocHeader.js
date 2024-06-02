import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function BlocHeader() {
  return (
    <div className='header'>
        <Container>
            <section className='bloc'>
             <h1>Explore the World of Cinema</h1>
             <p>Where the world of cinema comes alive at your fingertips!<br></br> Immerse yourself in a realm of cinematic wonders as you explore <br></br>an extensive collection of movies, ranging from timeless classics <br></br>to the latest blockbusters.</p>
             <Button variant="warning" className='bloc_btn'>Watch Now</Button>
            </section>
        </Container>
    </div>
  )
}

export default BlocHeader
