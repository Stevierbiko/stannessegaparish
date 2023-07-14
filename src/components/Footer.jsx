import React from "react";
import { Link } from "react-router-dom";
import Logo from "../image/logo.png";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="St Annes Logo" />
          </Link>
          <p>
            A parish that is inspired by the Gospel and Nourished by the
            Eucharist that is actively visible in the community.
          </p>
          <div className="footer__socials">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineYoutube />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>

        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/staffs">Staff</Link>
          <Link to="/prayer">Catholic Prayers</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Useful Links</h4>
          <Link to="/">Buletings</Link>
          <Link to="https://bible.usccb.org/" target="_blank" rel="noreferrer noopener">Daily Readings</Link>
          <Link to="https://www.usccb.org/prayer-and-worship/liturgy-of-the-hours"target="_blank" rel="noreferrer noopener">Liturgy of the Hours</Link>
          <Link to="https://www.usccb.org/prayer-and-worship/the-mass/order-of-mass"target="_blank" rel="noreferrer noopener">Order of Mass</Link>
          <Link to="https://www.usccb.org/beliefs-and-teachings/what-we-believe/catechism/catechism-of-the-catholic-church"target="_blank" rel="noreferrer noopener">Catechism of the Catholic Church</Link>
          <Link to="/about"target="_blank" rel="noreferrer noopener">Strategic Plans</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="tel:+254722601194">Contact Us</Link>
          <Link to="tel:+254722601194">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>
          St Annes Sega Catholic Church | © All Rights Reserved! 2023 | Created
          By <a href="tel:+25471555313">Steve Biko</a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
