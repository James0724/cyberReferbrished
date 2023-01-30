import React from "react";
import Glob from "../assets/glob.png";

function Homepage() {
  return (
    <section id="home">
      <div className="bannearea">
        <img
          src={Glob}
          className="img-fluid glob"
          alt="web glob interactivity"
        />
        <div className="banner_title">
          <h1>
            <span>2</span>
            <span>4</span>
            <span>/</span>
            <span>7</span>

            <span>C</span>
            <span>y</span>
            <span>b</span>
            <span>e</span>
            <span>r</span>
            <span>c</span>
            <span>a</span>
            <span>f</span>
            <span>e</span>
          </h1>
          <h2>The cyber cafe you can count on</h2>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
