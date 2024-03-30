import React from "react";
import "./Information.scss";
import { Link } from "react-router-dom";

function Information() {
  return (
    <div className="information">
      <div className="information-left">
        <h1>Rent DVDs</h1>
        {/* <h3>Buy Your Favorites Movies</h3> */}
        <p>
          No change to our line-up at a kiosk near you. Pick from hundreds of
          movies, starting at $7.50 a rental.
        </p>
        <Link style={{ textDecoration: "none" }} to="/rentdvds">
          <button>Check Now</button>
        </Link>
      </div>
      <div className="information-right">
        <iframe
          className="rounded"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d45296.413516629014!2d20.432978395232286!3d44.80066192925134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smovie%20rental!5e0!3m2!1sen!2srs!4v1711396071046!5m2!1sen!2srs"
          width="425"
          height="350"
          loading="lazy"
          title="myMap"
        ></iframe>
      </div>
    </div>
  );
}

export default Information;
