import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Link to={`/details/${user.id}`}>
     <Card.Header>{user.name}</Card.Header>
     </Link>
      <ListGroup variant="flush">
        <ListGroup.Item>{user.username}</ListGroup.Item>
        <ListGroup.Item>{user.phone}</ListGroup.Item>
        
      </ListGroup>
    </Card>
  )
}

export default UserCard