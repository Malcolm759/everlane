import {Carousel} from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "../assets/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Image1 from "../assets/Extra-pictures/blue.jpg";
import Image2 from "../assets/Extra-pictures/clothesA.jpg";
import Image3 from "../assets/Extra-pictures/clothesA1.jpg";
import Image4 from "../assets/Extra-pictures/jacketB.jpg";
import Image5 from "../assets/Extra-pictures/nikeB.jpg";
import Image6 from "../assets/Extra-pictures/nikeC.jpg";
import Image7 from "../assets/Extra-pictures/shoeD.jpg";
import Image8 from "../assets/Extra-pictures/suitE.jpg";
import Image9 from "../assets/Extra-pictures/tshirtF.jpg";
import Image10 from "../assets/Extra-pictures/shoesE.jpg";

function Slider() {
  return (
    <>
      <section>
        <div className="carousel-container mt-4 mb-4">
          <div className="text-center mb-4 h-div">
            <header className="fs-3">
              Everlane favorites
              <br />
            </header>
            <span>
              Beautifully Functional, Purposefully designed, Consciously crafted{" "}
            </span>
          </div>
          <Carousel indicators={true} controls={true}>
            <Carousel.Item>
              <div className="carousel-item d-flex justify-content-evenly">
                <Card
                  style={{ width: "15.5em", height: "29.5rem" }}
                  className="card-con"
                >
                  <Card.Img
                    variant="top"
                    src={Image1}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="d-block w-100 car-img"
                  />
                  <Card.Body className="card-b">
                    <Card.Text className="d-flex justify-content-between">
                      <span className="text-dark card-txt">
                        Dark blue dress{" "}
                      </span>
                      <Button variant="success">
                        <a href="#" className="text-light text-decoration-none">
                          $40
                        </a>
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: "15.5em", height: "29.5rem" }}
                  className="card-con"
                >
                  <Card.Img
                    variant="top"
                    src={Image2}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="d-block w-100 car-img"
                  />
                  <Card.Body className="card-b">
                    <Card.Text className="d-flex justify-content-between">
                      <span className="text-dark card-txt">Jean trousers</span>
                      <Button variant="success">
                        <a href="#" className="text-light text-decoration-none">
                          $70
                        </a>
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: "15.5em", height: "29.5rem" }}
                  className="card-con"
                >
                  <Card.Img
                    variant="top"
                    src={Image3}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="car-img"
                  />
                  <Card.Body className="card-b">
                    <Card.Text className="d-flex justify-content-between">
                      <span className="text-dark card-txt">Dresses</span>
                      <Button variant="success">
                        <a href="#" className="text-light text-decoration-none">
                          $60
                        </a>
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ width: "15.5em", height: "29.5rem" }}
                  className="card-con"
                >
                  <Card.Img
                    variant="top"
                    src={Image4}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="d-block w-100 car-img"
                  />
                  <Card.Body className="card-b">
                    <Card.Text className="d-flex justify-content-between">
                      <span className="text-dark card-txt">
                        Custom leather jacket
                      </span>
                      <Button variant="success">
                        <a href="#" className="text-light text-decoration-none">
                          $120
                        </a>
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ width: "15.5em", height: "29.5rem" }}
                  className="card-con"
                >
                  <Card.Img
                    variant="top"
                    src={Image5}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="d-block w-100 car-img"
                  />
                  <Card.Body className="card-b">
                    <Card.Text className="d-flex justify-content-between">
                      <span className="text-dark card-txt">Nike sneakers</span>
                      <Button variant="success">
                        <a href="#" className="text-light text-decoration-none">
                          $120
                        </a>
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
            {/* second carousel item */}

            <Carousel.Item>
              <div className="carousel-item d-flex justify-content-evenly">
                <Card
                  style={{ width: "15.5em", height: "29.5rem" }}
                  className="card-con"
                >
                  <Card.Img
                    variant="top"
                    src={Image6}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="d-block w-100 car-img"
                  />
                  <Card.Body className="card-b">
                    <Card.Text className="d-flex justify-content-between">
                      <span className="text-dark card-txt">Nike sneakers</span>
                      <Button variant="success">
                        <a href="#" className="text-light text-decoration-none">
                          $200
                        </a>
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ width: "15.5em", height: "29.5rem" }}
                  className="card-con"
                >
                  <Card.Img
                    variant="top"
                    src={Image7}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="d-block w-100 car-img car-img"
                  />
                  <Card.Body className="card-b">
                    <Card.Text className="d-flex justify-content-between">
                      <span className="text-dark card-txt">
                        Pair of designer shoes
                      </span>
                      <Button variant="success">
                        <a href="#" className="text-light text-decoration-none">
                          $200
                        </a>
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ width: "15.5em", height: "29.5rem" }}
                  className="card-con"
                >
                  <Card.Img
                    variant="top"
                    src={Image8}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="d-block w-100 car-img"
                  />
                  <Card.Body className="card-b">
                    <Card.Text className="d-flex justify-content-between">
                      <span className="text-dark card-txt">
                        Suits with tie (red)
                      </span>
                      <Button variant="success">
                        <a href="#" className="text-light text-decoration-none">
                          $300
                        </a>
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ width: "15.5em", height: "29.5rem" }}
                  className="card-con"
                >
                  <Card.Img
                    variant="top"
                    src={Image9}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="d-block w-100 car-img"
                  />
                  <Card.Body className="card-b">
                    <Card.Text className="d-flex justify-content-between">
                      <span className="text-dark card-txt">Plain T-shirts</span>
                      <Button variant="success">
                        <a href="#" className="text-light text-decoration-none">
                          $50
                        </a>
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ width: "15.5em", height: "29.5rem" }}
                  className="card-con"
                >
                  <Card.Img
                    variant="top"
                    src={Image10}
                    height={400}
                    width={300}
                    style={{ objectFit: "cover" }}
                    className="d-block w-100 car-img"
                  />
                  <Card.Body className="card-b">
                    <Card.Text className="d-flex justify-content-between">
                      <span className="text-dark card-txt">
                        A pair of black ground loafers
                      </span>
                      <Button variant="success">
                        <a href="#" className="text-light text-decoration-none">
                          $200
                        </a>
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default Slider;
