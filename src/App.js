import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="headerContainer">
        <h3>Mobile App recommender</h3>
        <ul className="navigation">
          <li>
            <a href="#music">Music</a>
          </li>
          <li>
            <a href="#games">Games</a>
          </li>
          <li>
            <a href="#social">Social Media</a>
          </li>
        </ul>
      </div>
      <img class="image" src="/mobile_apps.svg" />
      <section className="appsContainer" id="music">
        <div>
          <h3>Music</h3>
          <div className="line"></div>
        </div>
      </section>
      <section className="appsContainer" id="games"></section>
      <section className="appsContainer" id="social"></section>
    </div>
  );
}
