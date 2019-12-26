import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Row, Col } from 'react-flexbox-grid';

const Questions = ({ imgUrl, title, text, option1, option2, option3, option4, onHandlerOption  }) => {

        return(
            <Card>
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Row>
                  <Col xs={6}>
                    <Button variant="danger" size="lg" block value={option1} onClick={ e => onHandlerOption(e.target.value) }>{option1}</Button>
                  </Col>
                  <Col xs={6}>
                    <Button variant="danger" size="lg" block value={option2} onClick={ e => onHandlerOption(e.target.value) }> {option2}</Button>
                  </Col>
                  <Col xs={6}>
                    <Button variant="danger" size="lg" block value={option3} onClick={ e => onHandlerOption(e.target.value) }>{option3}</Button>
                  </Col>
                  <Col xs={6}>
                    <Button variant="danger" size="lg" block value={option4} onClick={ e => onHandlerOption(e.target.value) }>{option4}</Button>
                  </Col>
                </Row>
  
            </Card.Body>
          </Card>
        )
    }

export default Questions;