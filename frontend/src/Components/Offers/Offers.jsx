import React from "react";
import "./Offers.scss";
import { Link } from "react-router-dom";

function Offers() {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Rent & Buy DVDs</h1>
        {/* <h3>Buy Your Favorites Movies</h3> */}
        <p>
          No change to our line-up at a kiosk near you. Pick from hundreds of
          movies, starting at $9.99 a week.
        </p>
        <Link style={{ textDecoration: "none" }} to="/rentdvds">
          <button>Check Now</button>
        </Link>
      </div>
      <div className="offers-right">
        <iframe
          className="rounded"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d45296.413516629014!2d20.432978395232286!3d44.80066192925134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smovie%20rental!5e0!3m2!1sen!2srs!4v1711396071046!5m2!1sen!2srs"
          width="375"
          height="300"
          loading="lazy"
          title="myMap"
        ></iframe>
      </div>
    </div>
  );
}

export default Offers;
