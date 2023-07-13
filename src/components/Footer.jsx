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
              rel="noreferrer noopenner"
            >
              <AiOutlineYoutube />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopenner"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopenner"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopenner"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>

        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/staff">Staff</Link>
          <Link to="/liturgy">Catholic Prayers</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Usefull Links</h4>
          <Link to="/about">About</Link>
          <Link to="/about">Daily Readings</Link>
          <Link to="/about">Liturgy of the Hours</Link>
          <Link to="/about">Order of Mass</Link>
          <Link to="/about">Terms of Use</Link>
          <Link to="/about">Strategic Plans</Link>
        </article>
        <article>
          <h4>Get In touch</h4>
          <Link to="tel:+254722601194">Contact Us</Link>
          <Link to="/about">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small> St Annes Sega Catholic Church | © All Rights Reserved! 2023 | Created By <a href="tel:+25471555313">Steve Biko</a></small>
      </div>
    </footer>
  );
};

export default Footer;
