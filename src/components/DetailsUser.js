import axios from "axios";
import { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

function DetailsUser() {
    const [user, setUser] = useState(null);
   
    const { id } = useParams();
  
    useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          setUser(res.data);
          
        })
        .catch((err) => console.log(err));
    }, [id]);
  
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "700px"
        }}>
        <Card style={{ width: '18rem' }}>
      
     <Card.Header>{user?.name}</Card.Header>
     
      <ListGroup variant="flush">
        <ListGroup.Item>{user?.username}</ListGroup.Item>
        <ListGroup.Item>{user?.phone}</ListGroup.Item>
        <ListGroup.Item>{user?.website}</ListGroup.Item>
        <ListGroup.Item>{user?.email}</ListGroup.Item>
      </ListGroup>
    </Card>
      
      </div>
    );
  }
  export default DetailsUser;