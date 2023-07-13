import React from "react";

import Liturgy from "../../components/Liturgy";
import Header from "../../components/Header";
import HeaderImage from "../../image/banner5.jpg";

const liturgy = () => {
  return (
    <>
      <Header title="LITURGICAL GROUPS" image={HeaderImage}>
        "All the darkness in the world cannot extinguish the light of a single
        candle..." ~St. Francis of Assisi
      </Header>

      <Liturgy />
    </>
  );
};

export default liturgy;
