import Title from "../components/sectiontitle";
import Team from "../assets/developer-bro.svg";

function About() {
  return (
    <section id="about" className="outerbox">
      <div class="innerbox">
        <div className="row">
          <div className="col-sm-8 content_text">
            <div class="box1">
              <Title tlt="About us" smlt="who we are" />
              <p className="regularfont">
                We are a Cybercafe company, providing Cyber services enterprise
                in Kenya. Our aim is to give support in getting online services
                such as e-citizen, KRA, visa applications helping you with your
                online job applications, we also do print delivery to your
                office or door step and branding and design services for a range
                of products suited to your needs. we put our experience to work
                to provide you with greater operating time.
              </p>
            </div>
          </div>
          <div className="col-sm-4 svg_wrapper d-flex">
            <div className="illustration">
              <img src={Team} className=" img-fluid" alt="about team" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
