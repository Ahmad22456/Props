import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

//  Creating the card and placing the probs in the desired space
function Player({name, age, team, jerseyNumber, image}) {
  return (
    <Card style={{ width: '18rem', display: 'inline-block', marginRight: '6rem'}} bg='dark' text='white'>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title style={{textAlign: 'center'}}>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{backgroundColor:"rgb(33, 37, 41)", color:"white"}}></ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:"rgb(33, 37, 41)", color:"white"}}>
          <p style={{textAlign: 'left'}}>Team:</p>
          <p style={{textAlign: 'right'}}>{team}</p>
        </ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:"rgb(33, 37, 41)", color:"white"}}>
          <p style={{textAlign: 'left'}}>Age:</p>
          <p style={{textAlign: 'right'}}>{age}</p>
        </ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:"rgb(33, 37, 41)", color:"white"}}>
          <p style={{textAlign: 'left'}}>JerseyNumber:</p>
          <p style={{textAlign: 'right'}}>{jerseyNumber}</p>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Player;