import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../image/banner2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        CAN'T FIND WHAT YOU ARE LOOKING FOR?
      </Header>

      <div className="container contact__container">
        <div className="contact__wrapper">
          <a
            href="mailto:stannessegaparish@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <MdEmail />
          </a>
          <a
            href="http://m.me/StAnnesSegaParish"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsMessenger />
          </a>
          <a
            href="http://wa.me/+254722601194"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IoLogoWhatsapp />
          </a>
        </div>
        <div className="contact__content">
          <h4>CHURCH OFFICE HOURS</h4>
          <p>
            TUE 09:00am to 04:00pm <br />
            The office is closed for lunch from 12:30 p.m. - 1:30 p.m.
          </p>
          <h4>MAILING ADDRESS</h4>
          <p>P.O BOX 18 - 40164, Sega</p>
        </div>
      </div>
      <div className="contact__map">
        <h4>WHERE TO FIND US</h4>
        <iframe
          title="Church Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255348.10828833643!2d34.33623789852917!3d0.08242305840234586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177f94ba7eb70ef5%3A0x1f06c92f203e21ae!2sSt.%20Anne&#39;s%20Catholic%20Church%2C%20Sega.!5e0!3m2!1sen!2ske!4v1683577213516!5m2!1sen!2ske"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
