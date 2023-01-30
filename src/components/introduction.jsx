import Trustedsvg from "../assets/trustedsvg.svg";
function Introarea() {
  return (
    <div class="banneareafooter container">
      <div className="row banneareafooter_box">
        <div className="col-sm banneareafooter_col">
          <div className="banneareafooter_icon">
            <img
              src={Trustedsvg}
              className=" img-fluid"
              alt="trusted shields"
            />
          </div>
          <h3 className="banneareafooter_title">
            internet cybercafe services in Kenya
          </h3>
        </div>
        <div className=" col-sm banneareafooter_col">
          <ul className="service_items">
            <li className="service_item">
              <h3>Design </h3>
            </li>
            <li className="service_item">
              <h3>Branding</h3>
            </li>
            <li className="service_item">
              <h3>Printing</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Introarea;
