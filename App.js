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

const ResturantCard = (props) => {
  return (
    <div className="rest-card">
      <h1 className="rest-name"> {props.name} </h1>

      <img
        src={props.imgSource}
        alt="Meghana Foods image"
        className="rest-img"
      />
      <h3 className="rest-name">{props.cuisine}</h3>
      <h3 className="rest-name">
        <i className="fa-regular fa-star" id="icon-star"></i>4.3 Stars
      </h3>
      <h3 className="rest-name">
        <i className="fa-regular fa-clock" id="icon-timer"></i>
        {props.delTime}
      </h3>
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
        <ResturantCard
          restName="Starbucks"
          cuisine="Ham & Swiss on Baguette , Chicken & Bacon on Brioche "
          imgSource="https://mcdonough.com/wp-content/uploads/2020/09/starbucks-logo-png-transparent.png"
          rating="4.4 Stars"
          delTime="40 minutes"
        />
        <ResturantCard
          restName="Dominos Pizza"
          cuisine="Order Domino's pizza, pasta, sandwiches & more"
          imgSource="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/2036px-Domino%27s_pizza_logo.svg.png"
          rating="4.2 Stars"
          delTime="25 minutes"
        />
        <ResturantCard
          restName="Burger King"
          cuisine="Whopper patty, topped with cheese, thick-cut smoked bacon"
          imgSource="https://logowik.com/content/uploads/images/310_burgerking.jpg"
          rating="3.2 Stars"
          delTime="55 minutes"
        />
        <ResturantCard
          restName="Tim Hortons"
          cuisine="Home of Canada's favourite coffee"
          imgSource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjR7SoKEYqzAxY9koSsVBHlBfSHRUOs5J_47jebp50rRtanT77Hk1lQBN569uQQvpYNFY&usqp=CAU"
          rating="4.0 Stars"
          delTime="15 minutes"
        />
        <ResturantCard
          restName="Boston Pizza"
          cuisine="pizza, pasta, burgers, appetizers, salads and more"
          imgSource="https://upload.wikimedia.org/wikipedia/en/2/20/Boston_Pizza.svg"
          rating="5.0 Stars"
          delTime="28 minutes"
        />

        <ResturantCard
          restName="Subway"
          cuisine="submarine sandwiches (subs), wraps, salads, and drinks."
          imgSource="https://cdn.freebiesupply.com/logos/large/2x/subway-11-logo-png-transparent.png"
          rating="4.9 Stars"
          delTime="35 minutes"
        />

        <ResturantCard
          restName="Ginos Pizza"
          cuisine="Pizza resturant"
          imgSource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCS66oTaCNZ7xduIzTM7gx1Hb5yrEl0rPpvoSWX2Zdw&s"
          rating="3.5 Stars"
          delTime="45 minutes"
        />

        <ResturantCard
          restName="Wendys"
          cuisine="Chicken Nuggets, Beaf, Eggs"
          imgSource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2w3HAVufZroDs8DBYwBq2ofwml6a0t2BFIyDFjigtoA&s"
          rating="5.0 Stars"
          delTime="65 minutes"
        />
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
