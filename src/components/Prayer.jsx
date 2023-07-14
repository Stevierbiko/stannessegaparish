import React from 'react';
import Card from "../UI/Card";

import { prayer } from "../data";

const Prayer = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <p>
        "For me, prayer is a surge of the heart; it is a simple look turned toward heaven, it is a cry of recognition and of love, embracing both trial and joy." <br /> -St. Therese of Lisieux (CCC 2558)
        </p>
        <div className="programs__wrapper">
          {prayer.map(({ id, icon, title, info, path }) => {
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

export default Prayer;
