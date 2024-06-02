import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function BlocPad() {
  return (
    <div className='Bloc-Pad'>
      <Container>
        <Row>
          <Col lg={6}>
            <img 
              src='https://www.plex.tv/wp-content/uploads/2021/09/Continue_Watching_v2-2-1024x1088.png' 
              alt='Continue Watching'
              className='bloc_pad_image'
            />
          </Col>
          <Col lg={6}>
            <section className='bloc_pad'>
              <h2>It has never been easier to watch free movies online.</h2>
              <p>Once you register for a free account with Plex, we’ll keep your place from screen to screen as long as you’re signed in. No matter what device you choose, your free movies will pick up where you left off with ease.</p>
              <Button variant="warning" className='bloc_btn'>Watch Now</Button>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlocPad;
