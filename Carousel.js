import Carousel from "react-bootstrap/Carousel";
import "../style/carousel.css";

function Caroselreact() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item className="carousel-parent">
        <img
          className="d-block w-100"
          src="https://blog.ipleaders.in/wp-content/uploads/2021/06/britannia-1-1.jpg"
          alt="First slide"
          height={600}
        />
        <Carousel.Caption>
          <div className="carousel-content">
            <h5>Yummy Biscuits</h5>
            <p>Tasty snacks are waiting for you, Grab quickly</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-parent">
        <img
          className="d-block w-100"
          src="https://penji.co/wp-content/uploads/2019/03/Mcdonalds-Food-Ad-Designs.jpg"
          alt="Second slide"
          height={600}
        />
        <Carousel.Caption >
        <div className="carousel-content">
          <h5>Bugger</h5>
          <p>Enjoy your Bugger by buying here</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-parent">
        <img
          className="d-block w-100"
          src="https://www.adgully.com/img/1000/202012/organic-organic-india-veggies.jpg"
          alt="Third slide"
          height={600}
        />
        <Carousel.Caption >
            <div className="carousel-content">
          <h5>Eat Healthy Stay Healthy</h5>
          <p>One and only organic natural foods.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Caroselreact;
