import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} className="img-logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = () => {
  return (
    <div className="rest-card">
      <h3 className="rest-name"></h3>
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ika9k8qszplblbccmqcs"
        alt="Meghana Foods image"
        className="rest-img"
      />
      <h3 className="rest-name">Biryani, North Indian, Asian</h3>
      <h3 className="rest-name">4.3 Stars</h3>
      <h3 className="rest-name">38 minutes</h3>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-text-field"
        placeholder="Find your favourite Resturants"
      />
      <button className="search-button">Search</button>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <SearchBar></SearchBar>

      <div className="rest-container">
        <ResturantCard Starbucks />
        {/* https://mcdonough.com/wp-content/uploads/2020/09/starbucks-logo-png-transparent.png */}
        <ResturantCard Dominos Pizza />
        {/* https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/2036px-Domino%27s_pizza_logo.svg.png */}
        <ResturantCard Burger King />
        {/* https://cdn.freebiesupply.com/images/large/2x/burger-king-logo-png-transparent.png */}
        <ResturantCard Tim Hortons />
        {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjR7SoKEYqzAxY9koSsVBHlBfSHRUOs5J_47jebp50rRtanT77Hk1lQBN569uQQvpYNFY&usqp=CAU */}
        <ResturantCard Boston Pizza />
        {/* https://upload.wikimedia.org/wikipedia/en/2/20/Boston_Pizza.svg */}
        <ResturantCard Subway />
        {/* https://cdn.freebiesupply.com/logos/large/2x/subway-11-logo-png-transparent.png */}
        <ResturantCard Ginos Pizza />
        {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCS66oTaCNZ7xduIzTM7gx1Hb5yrEl0rPpvoSWX2Zdw&s */}
        <ResturantCard Wendys />
        {/* https://assets.stickpng.com/thumbs/58429d58a6515b1e0ad75ae8.png */}
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout></Applayout>);
