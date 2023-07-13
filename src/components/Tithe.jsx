import React from "react";
import Card from "../UI/Card";

import { tithe } from "../data";

const Tithe = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <div className="programs__wrapper">
          {tithe.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="programs__program" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tithe;
