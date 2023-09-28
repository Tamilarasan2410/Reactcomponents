import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../style/card.css";

function Cardreact({prod}) {
  return (
    <div className="Card">
      <Card style={{ width: "18rem" }}>
        <div className="Img">
          <Card.Img
            variant="top"
            src={prod[0].image} height={250}
          />
        </div>
        <Card.Body>
          <Card.Title>{prod[0].cardtittle}</Card.Title>
          <Card.Text>
          {prod[0].description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <div className="Img">
          <Card.Img
            variant="top"
            src={prod[1].image} height={250}
          />
        </div>
        <Card.Body>
          <Card.Title>{prod[1].cardtittle}</Card.Title>
          <Card.Text>
          {prod[1].description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <div className="Img">
          <Card.Img
            variant="top"
            src={prod[2].image} height={250}
          />
        </div>
        <Card.Body>
          <Card.Title>{prod[2].cardtittle}</Card.Title>
          <Card.Text>
          {prod[2].description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cardreact;
