import React from "react";
import "./App.scss";
import {
  CartActiveIcon,
  CartIcon,
  EarthIcon,
  LogoIcon,
  RocketIcon,
} from "./icons";
function App() {
  return (
      <div className="App">
        <header>
          <nav>
            <a href="/">
              <LogoIcon />
            </a>
            <div className="burger-menu">
              <input
                  type="checkbox"
                  id="burger-toggle"
                  className="burger-toggle"
              />
              <label htmlFor="burger-toggle" className="burger">
                <div></div>
                <div></div>
                <div></div>
              </label>
              <div className="menu">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">Products</a>
                  </li>
                  <li className="burger-icon__wrapper">
                    <a href="/" className="menu-cart__link">

                      <CartIcon />
                      <CartActiveIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="menu-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a className="menu-cart__link" href="/cart">
                  <CartIcon />
                  <CartActiveIcon />
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="discover">
          <div className="discover-icon">
            <EarthIcon />
          </div>
          <div className="container discover-container">
            <div className="discover-text__wrapper">
              <h1 className="discover-text__title">
                Discover the vast expanses of <span>space</span>
              </h1>
              <p className="discover-text__subtitle">
                Where the possibilities are <span>endless!</span>
              </p>
              <a className="discover-text__link" href="/">
                Learn more
              </a>
            </div>
          </div>
        </section>
        <section className="offers">
          <div className="container">
            <h2 className="offers-title">Offers</h2>
            <div className="offers-wrapper">
              <div className="offers-container ">
                <h4 className="offers-container__title title-main">
                  Move the borders of reality!
                </h4>
                <p className="offers-container__subtitle subtitle-main">
                  Go on a space adventure - it's possible with us!
                </p>
                <a href="/" className="offers-container__link">
                  Learn more
                </a>
              </div>
              <div className="offers-container offers-container__small">
                <h4 className="offers-container__title">
                  Space is not just stars and planets
                </h4>
                <p className="offers-container__subtitle">
                  Go on a space adventure{" "}
                </p>
                <a href="/" className="offers-container__link">
                  Learn more
                </a>
              </div>
              <div className="offers-container offers-container__small">
                <h4 className="offers-container__title">
                  For those who dream of stars{" "}
                </h4>
                <p className="offers-container__subtitle">
                  Our offer: make your dream come true
                </p>
                <a href="/" className="offers-container__link">
                  Learn more
                </a>
              </div>
              <div className="offers-container">
                <h4 className="offers-container__title title-main">
                  Fulfill your fantastic dreams
                </h4>
                <p className="offers-container__subtitle subtitle-main">
                  Space has never been so close
                </p>
                <a href="/" className="offers-container__link">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="journey">
          <div className="container">
            <h2 className="journey-title">Embark on a space journey</h2>
            <p className="journey-subtitle">
              Travelling into space is one of the most exciting and unforgettable
              adventures that can change your life forever. And if you have ever
              dreamed of exploring stars, planets and galaxies, then our company
              is ready to help you realize this dream. We offer a unique
              experience that will allow you to go on a space journey and see all
              the secrets of the universe. We guarantee that every moment in space
              will be filled with incredible impressions, excitement and new
              discoveries. Our team of professionals takes care of your safety and
              comfort so that you can fully enjoy your adventure in space. We
              offer various options for space excursions.
            </p>
            <a href="/" className="journey-link">
              Read more
            </a>
          </div>
        </section>
        <footer className="footer">
          <div className="footer-container">
            <RocketIcon /> <p>Exciting space adventure!</p>
          </div>
        </footer>
      </div>
  );
}

export default App;
