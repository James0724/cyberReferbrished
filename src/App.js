import "normalize.css";

import Contact from "./components/contact";
import FadeInWhenVisible from "./components/fadeinanim";
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
      <Navbar />
      <Homepage />
      <Introarea />
      <div className="bg_box">
        <div className="content container">
          <FadeInWhenVisible>
            <About />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <Services />
          </FadeInWhenVisible>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
