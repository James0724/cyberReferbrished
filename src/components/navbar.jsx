import { useState } from "react";
import Logo from "../assets/logo.svg";
import home from "../assets/1.svg";
import serv from "../assets/3.svg";
import cont from "../assets/8.svg";
import logodark from "../assets/logodark.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggle = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="mainHeader">
      <header>
        <div class="menubox">
          <div class="navBlock">
            <div class="navbarBtn  d-block" onClick={toggle}>
              <div class="menubtnbox" id="sidebarCollapse">
                <button type="button" class="btn crossLine">
                  <span class="line crossLine1"></span>
                  <span class="line crossLine2"></span>
                  <span class="line crossLine3"></span>
                  <span class="line crossLine4"></span>
                  <span class="line crossLine5"></span>
                  <span class="line crossLine6"></span>
                  <span class="line crossLine7"></span>
                  <span class="line crossLine8"></span>
                </button>
              </div>
            </div>
            <div class="fullMenu">
              <nav
                className={`navbarLink navbar-expand-md ${
                  isMenuOpen ? "active" : ""
                }`}
                id="sidebar"
              >
                <div class="navi_mobile">
                  <div id="dismiss" class="hideclose d-block" onClick={toggle}>
                    <img
                      src="https://www.avalance.in/assets/images/close_icon.svg"
                      class="img-fluid"
                      alt="img"
                    />
                  </div>
                  <div class="mobileboxreverse">
                    <div class="navbar-collapse">
                      <ul class="navbar-nav mr-auto">
                        <li
                          onClick={() => {
                            closeMenu();
                          }}
                        >
                          <a href="#home">
                            <span>
                              <img src={home} class="img-fluid" alt="img" />
                            </span>{" "}
                            Home
                          </a>
                        </li>
                        <li
                          onClick={() => {
                            closeMenu();
                          }}
                        >
                          <a href="#about">
                            <span>
                              <img src={logodark} class="img-fluid" alt="img" />
                            </span>
                            About Us
                          </a>
                        </li>
                        <li
                          onClick={() => {
                            closeMenu();
                          }}
                        >
                          <a href="#services">
                            <span>
                              <img src={serv} class="img-fluid" alt="img" />
                            </span>
                            Services
                          </a>
                        </li>

                        <li
                          onClick={() => {
                            closeMenu();
                          }}
                        >
                          <a href="#contact">
                            <span>
                              <img src={cont} class="img-fluid" alt="img" />
                            </span>
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div class="headerbox">
            <ul>
              <li>
                <a href="#services">
                  <span>+</span> Services
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="menulogo">
          <a href="#home">
            <img src={Logo} alt="img" class="img-fluid" />
          </a>
        </div>
        <div class="menubtn">
          <a href="#contact" class="yellowbtn">
            Contact Us
          </a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
