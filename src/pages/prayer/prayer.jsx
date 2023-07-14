import React from "react";

import Header from "../../components/Header";
import HeaderImage from "../../image/banner5.jpg";
import Prayer from "../../components/Prayer";

const prayer= () => {
  return (
    <>
      <Header title="Prayers and Devotions" image={HeaderImage}>
        "All the darkness in the world cannot extinguish the light of a single
        candle..." ~St. Francis of Assisi
      </Header>

      <Prayer />
    </>
  );
};

export default prayer;
