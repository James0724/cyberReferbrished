import "normalize.css";

import Contact from "./components/contact";
import Footer from "./components/footer";
import Introarea from "./components/introduction";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Homepage from "./pages/homepage";
import Services from "./pages/services";
import "./styles/styles.scss";

function App() {
  return (
    <div className="cyber_app">
      <div id="toTop" style={{ display: "block" }}>
        <a href="#home">
          <i class="fa fa-angle-up" aria-hidden="true"></i>
        </a>
      </div>
      <Navbar />
      <Homepage />
      <Introarea />
      <div className="bg_box">
        <div className="content container">
          <About />
          <Services />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
