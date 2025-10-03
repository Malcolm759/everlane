import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../assets/css/bootstrap.min.css";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

function Slider() {
  return (
    <>
      <section className="mt-4">
        <div className="text-center fs-4 mb-4">
          <header className="fs-3">
            Everlane favorites
            <br />
          </header>
          <span className="c-header-t">
            Beautifully Functional, Purposefully designed, Consciously crafted{" "}
          </span>
        </div>

        <Swiper
          spaceBetween={1.5}
          slidesPerView={1.2} // Default for mobile
          modules={[Navigation, Pagination]}
          navigation
          breakpoints={{
            600: { slidesPerView: 2.5, spaceBetween: 2 },
            768: { slidesPerView: 4.5, spaceBetween: 1 },
            1024: { slidesPerView: 5, spaceBetween: 2 },
          }}
        >
          <SwiperSlide>
            <Card style={{ width: "15.5em" }} className="card-con">
              <Card.Img
                variant="top"
                src={Image1}
                height={400}
                style={{ objectFit: "cover" }}
                className="d-block w-100 car-img"
              />
              <Card.Body className="card-b">
                <Card.Text className="d-flex justify-content-between">
                  <span className="text-dark card-txt">Dark blue dress </span>
                  <Button variant="success">
                    <a href="#" className="text-light text-decoration-none">
                      $40
                    </a>
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "15.5em" }} className="card-con">
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
          </SwiperSlide>
          <SwiperSlide>
            <Card style={{ width: "15.5em" }} className="card-con">
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
          </SwiperSlide>

          <SwiperSlide>
            <Card style={{ width: "15.5em" }} className="card-con">
              <Card.Img
                variant="top"
                src={Image4}
                height={400}
                style={{ objectFit: "cover" }}
                className="d-block w-100 car-img"
              />
              <Card.Body className="card-b">
                <Card.Text className="d-flex justify-content-between">
                  <span className="text-dark card-txt">Casual Shirt</span>
                  <Button variant="success">
                    <a href="#" className="text-light text-decoration-none">
                      $50
                    </a>
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card style={{ width: "15.5em" }} className="card-con">
              <Card.Img
                variant="top"
                src={Image5}
                height={400}
                style={{ objectFit: "cover" }}
                className="d-block w-100 car-img"
              />
              <Card.Body className="card-b">
                <Card.Text className="d-flex justify-content-between">
                  <span className="text-dark card-txt">Casual Shirt</span>
                  <Button variant="success">
                    <a href="#" className="text-light text-decoration-none">
                      $50
                    </a>
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card style={{ width: "15.5em" }} className="card-con">
              <Card.Img
                variant="top"
                src={Image6}
                height={400}
                style={{ objectFit: "cover" }}
                className="d-block w-100 car-img"
              />
              <Card.Body className="card-b">
                <Card.Text className="d-flex justify-content-between">
                  <span className="text-dark card-txt">Casual Shirt</span>
                  <Button variant="success">
                    <a href="#" className="text-light text-decoration-none">
                      $50
                    </a>
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card style={{ width: "15.5em" }} className="card-con">
              <Card.Img
                variant="top"
                src={Image7}
                height={400}
                style={{ objectFit: "cover" }}
                className="d-block w-100 car-img"
              />
              <Card.Body className="card-b">
                <Card.Text className="d-flex justify-content-between">
                  <span className="text-dark card-txt">Casual Shirt</span>
                  <Button variant="success">
                    <a href="#" className="text-light text-decoration-none">
                      $50
                    </a>
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card style={{ width: "15.5em" }} className="card-con">
              <Card.Img
                variant="top"
                src={Image8}
                height={400}
                style={{ objectFit: "cover" }}
                className="d-block w-100 car-img"
              />
              <Card.Body className="card-b">
                <Card.Text className="d-flex justify-content-between">
                  <span className="text-dark card-txt">Casual Shirt</span>
                  <Button variant="success">
                    <a href="#" className="text-light text-decoration-none">
                      $50
                    </a>
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card style={{ width: "15.5em" }} className="card-con">
              <Card.Img
                variant="top"
                src={Image9}
                height={400}
                style={{ objectFit: "cover" }}
                className="d-block w-100 car-img"
              />
              <Card.Body className="card-b">
                <Card.Text className="d-flex justify-content-between">
                  <span className="text-dark card-txt">Casual Shirt</span>
                  <Button variant="success">
                    <a href="#" className="text-light text-decoration-none">
                      $50
                    </a>
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card style={{ width: "15.5em" }} className="card-con">
              <Card.Img
                variant="top"
                src={Image10}
                height={400}
                style={{ objectFit: "cover" }}
                className="d-block w-100 car-img"
              />
              <Card.Body className="card-b">
                <Card.Text className="d-flex justify-content-between">
                  <span className="text-dark card-txt">Casual Shirt</span>
                  <Button variant="success">
                    <a href="#" className="text-light text-decoration-none">
                      $50
                    </a>
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </Swiper>

        {/* <div className="swiper-slide">
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
                <span className="text-dark card-txt">Dark blue dress </span>
                <Button variant="success">
                  <a href="#" className="text-light text-decoration-none">
                    $40
                  </a>
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="swiper-slide">
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

        </div>

        <div className="swiper-slide">
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
        </div> */}
      </section>
    </>
  );
}

export default Slider;
