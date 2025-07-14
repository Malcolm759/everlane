import "../assets/css/bootstrap.min.css";
import Folded from "../assets/Extra-pictures/Folded_clothes.jpg";
import Cotton from "../assets/Extra-pictures/Cotton.jpg";

function Gift() {
  return (
    <>
      <section>
        <div className="container-fluid px-4 gift-con mt-5">
            <div className="row">
                <div className="col-12 col-sm-6 text-center p-2">
                    <span className="fs-5">
                        Our holiday Gift packs
                    </span>
                    <img src={Folded} alt="" className="img-fluid py-2" />
                    <span>The best presents for everyone on your list</span>
                    <br />
                    <a href="#" className="text-dark">Read more</a>
                </div>

                <div className="col-12 col-sm-6 text-center p-2">
                    <span className="fs-5">
                        Cleaner fashion
                    </span>
                    <img src={Cotton} alt="" className="img-fluid py-2"style={{height:'470px', objectFit:'cover'}}/>
                    <span>See sustainability efforts behind our products</span>
                    <br />
                    <a href="#" className="text-dark">learn more</a>
                </div>
            </div>
        </div>
      </section>

      <hr />
    </>
  );
}
export default Gift;
