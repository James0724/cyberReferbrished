import Logo from "../assets/logo.svg";
function Footer() {
  return (
    <footer>
      <div class="footerbtmBg">
        <div class="footer_area padd_top0">
          <div class="footer_center">
            <div class="footerlogo">
              <a href="#home">
                <img src={Logo} alt="img" class="img-fluid" />
              </a>
            </div>
            <div class="footermenu">
              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="socialmedia">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/avalanceinc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footerbtmBg">
            <div class="padd_top0">
              <div class="footer_bottom">
                <div class="copyright">
                  <p>Copyright © 2023 24/7 Cybercafe. All Rights Reserved.</p>
                </div>
                <div class="copyrightpolicy">
                  <div>
                    <a href="#services">Terms of Services</a>
                  </div>
                  <div>
                    <a href="#home">Privacy Policy</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
