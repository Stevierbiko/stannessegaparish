import React from "react";

import Tithe from "../../components/Tithe";
import Header from "../../components/Header";
import HeaderImage from "../../image/banner4.jpg";

const tithe = () => {
  return (
    <>
      <Header title="Tithe & Offering" image={HeaderImage}>
        “Honour the Lord with your wealth, with the first fruits of all your
        crops.” (Proverbs 3:9).
      </Header>

      <Tithe />
    </>
  );
};

export default tithe;
