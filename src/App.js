import React, { useState } from "react";
import "./styles.css";

const appList = {
  Music: [
    {
      name: "Spotify",
      url: "/Spotify.svg",
      rating: "4.5",
      size: "27MB",
      description:
        "Discover new music and find your next favourite song, album, playlist or podcast."
    },
    {
      name: "Gaana",
      url: "/gaana.svg",
      rating: "4.3",
      size: "24MB",
      description:
        "Free Music, Podcast & Hotshot video - Download Hindi, Punjabi, Telugu MP3 Songs"
    },
    {
      name: "Wynk Music",
      url: "/wynk.svg",
      rating: "4.3",
      size: "15MB",
      description:
        "New free songs & offline Music. Download Bollywood, English, Tamil Songs and more !"
    }
  ],
  Games: [
    {
      name: "Call of duty",
      url: "/cod.png",
      rating: "4.5",
      size: "1GB",
      description:
        "Call of duty: Mobile offers PVP, Battle Royale, Sniper gameplay"
    },
    {
      name: "Plato - Games & Group chat",
      url: "/plato.png",
      rating: "4.5",
      size: "98MB",
      description:
        "Plato is a chat app full of games, group and good times. Find friends and fun."
    },
    {
      name: "Beach Buggy Racing",
      url: "/beachbuggy.png",
      rating: "4.4",
      size: "82MB",
      description:
        "The amazing free 3D Kart racing game. Race, collect, upgrade and win!"
    }
  ],
  Food: [
    {
      name: "Domino's Pizza",
      url: "/dominos.png",
      rating: "4.3",
      size: "9.1MB",
      description: "Order pizza online now"
    },
    {
      name: "Zomato",
      url: "/zomato.png",
      rating: "4.0",
      size: "24MB",
      description:
        "Order food online, check reviews and avail great offers on delivery and dining !"
    },
    {
      name: "Swiggy Food Order",
      url: "/swiggy.png",
      rating: "4.5",
      size: "30MB",
      description:
        "Order food, groceries & essential online, & get quick doorstep deliveries."
    }
  ]
};

const keyList = Object.keys(appList);

export default function App() {
  const [selectedItem, setSelected] = useState("Music");

  function clickHandler(items) {
    setSelected(items);
  }

  return (
    <div className="App">
      <div className="headerContainer">
        <h2>Mobile App Recommender</h2>
      </div>
      <img className="image" src="/mobile_apps.svg" />
      <div className="buttonContainer">
        {keyList.map((items) => {
          return <button onClick={() => clickHandler(items)}>{items}</button>;
        })}
        <hr />
      </div>
      {appList[selectedItem].map((items) => {
        return (
          <ul className="appDetail">
            <li className="appDetailList">
              <img className="logo" src={items.url}></img>
              <div>
                <h3>
                  Name:{" "}
                  <span style={{ fontWeight: "lighter" }}>{items.name}</span>
                </h3>
                <h3>
                  Rating:{" "}
                  <span style={{ fontWeight: "lighter" }}>{items.rating}</span>
                </h3>
                <h3>
                  Size:{" "}
                  <span style={{ fontWeight: "lighter" }}>{items.size}</span>
                </h3>
                <h3>
                  Description:{" "}
                  <span style={{ fontWeight: "lighter" }}>
                    {items.description}
                  </span>
                </h3>
              </div>
            </li>
          </ul>
        );
      })}
      <div style={{ backgroundColor: "#164e63" }}>
        <h1 style={{ color: "#38bdf8" }}> Thank You !! </h1>
      </div>
    </div>
  );
}
