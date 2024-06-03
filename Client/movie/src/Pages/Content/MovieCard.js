import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard({ title, description, posterURL, rating, genre }) {
  return (
      <Card className="text-center">
        <Card.Img variant="top" src={posterURL} alt={title} />
        <Card.Header>
          <Card.Title>{title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>{description}</Card.Text>
          <div className='d-flex justify-content-around align-items-center'>
            <div className='d-flex'>
              <Card.Text><b>Rating : </b>{rating}</Card.Text>
            </div>
            <div className='d-flex'>
              <Card.Text><b>Genre : </b>{genre}</Card.Text>
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="primary">Read More</Button>
        </Card.Footer>
      </Card>
  );
}

export default MovieCard;
