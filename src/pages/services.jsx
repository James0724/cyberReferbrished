import Title from "../components/sectiontitle";
import ServiceBg from "../assets/servicebg.jpg";
import Des from "../assets/Design-community-bro.svg";
import Onl from "../assets/analysis-bro.svg";
import Cyb from "../assets/Telework-bro.svg";
import Poet from "../assets/Potry-bro.svg";
import FadeInWhenVisible from "../components/fadeinanim";

function Services() {
  return (
    <section id="services" className="outerbox">
      <div class="innerbox">
        <FadeInWhenVisible>
          <Title tlt="Our services" smlt="what we offer" />
          <div class="service_wrapper row">
            <div class="col-sm box-image">
              <div class="timelinebox">
                <img
                  className="img-fluid"
                  src={ServiceBg}
                  alt="cyber in kenya"
                />
              </div>
            </div>
            <div class="col-sm box1">
              <div class="timelineboxtop">
                <h3 className="smalltitle subtitle">our survices incudes</h3>
              </div>
              <p class="regularfont">
                We offer the following services Itax registration services, KRA
                pin certificate services, Typesetting Printing, Computer
                Accessories and Services, Office Stationery, Printing,
                Photocopy, passport application, job application Gift Items,
                Internet Services, Branding, Graphic Design, web Development,
                computer classes, online writing and e-citizen services.
              </p>
            </div>
          </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <div className="category">
            <h2 className="typtitle">our services categorization</h2>
            <ul class="servicearea row gx-5 gy-5">
              <li class="servicebox col-md-6 ">
                <div className="servicecnt-box d-flex flex-column align-items-center">
                  <div class="category-svg">
                    <img
                      className="img-fluid"
                      src={Onl}
                      alt="cyber online services in Kenya"
                    />
                  </div>
                  <div class="category-text">
                    <h4>Online services</h4>
                    <ul>
                      <li>E-Citizen Services</li>
                      <li>TIMS Services</li>
                      <li>KRA services</li>
                      <li>Browsing services</li>
                      <li>Online writing</li>
                      <li>Online applications support</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="servicebox col-md-6 ">
                <div className="servicecnt-box d-flex flex-column align-items-center">
                  <div class="category-svg">
                    <img
                      className="img-fluid"
                      src={Cyb}
                      alt="cyber online services in Kenya"
                    />
                  </div>

                  <div class="category-text">
                    <h4>Cyber services</h4>
                    <ul>
                      <li>Photocopying</li>
                      <li>Printing</li>
                      <li>Binding</li>
                      <li>Lamination</li>
                      <li>Typesetting</li>
                      <li>Scanning</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="servicebox col-md-6 ">
                <div className="servicecnt-box d-flex flex-column align-items-center">
                  <div class="category-svg">
                    <img
                      className="img-fluid"
                      src={Des}
                      alt="cyber online services in Kenya"
                    />
                  </div>
                  <div class="category-text">
                    <h4>Design services</h4>
                    <ul>
                      <li>Website design and Development</li>
                      <li>Branding</li>
                      <li>Posters and Flyers</li>
                      <li>Logo Design</li>
                      <li>Wedding Cards and business cards</li>
                      <li>Graphics design</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="servicebox col-md-6 ">
                <div className="servicecnt-box d-flex flex-column align-items-center">
                  <div class="category-svg">
                    <img
                      className="img-fluid"
                      src={Poet}
                      alt="cyber online services in Kenya"
                    />
                  </div>

                  <div class="category-text">
                    <h4>Online writing</h4>
                    <ul>
                      <li>Content creation</li>
                      <li>Editing Services</li>
                      <li>Content managment</li>
                      <li>Ghost writing</li>
                      <li>Research writing</li>
                      <li>Blog writing</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

export default Services;
