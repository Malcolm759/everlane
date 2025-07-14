import "../assets/css/bootstrap.min.css";

function Header() {
  return (
    <>
    <header className="container-fluid h-25 bg-dark heading">
      <div className="row text-center">
        <span className="text-light ">
          Get early access on launches and offers.
          <a href="#" className="header-link text-light">Sign up for Texts</a>
        </span>
      </div>
    </header>
    </>
   
  );
}

export default Header;
