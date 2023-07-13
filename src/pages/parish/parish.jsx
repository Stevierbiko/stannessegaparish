import React from 'react';

import Header from "../../components/Header";
import HeaderImage from "../../image/banner.jpg";
import { parish } from "../../data";
import Parish from "../../components/Parish";

import "../staff/staffs.css";

const Parishes = () => {
  return (
    <>
      <Header title="Welcome to Our Sub-Parishes" image={HeaderImage}>
        "If anything good shall go forward, something must be adventured." St.
        Thomas More
      </Header>
      <section className="staffs">
        <div className="container staffs__container">
          {parish.map(({ id, image, name, job }) => {
            return <Parish key={id} image={image} name={name} job={job} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Parishes;
