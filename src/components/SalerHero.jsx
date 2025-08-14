import React from "react";
import "../style/Home.scss";

export default function SalerHero() {
  return (
    <div className="salerHero" data-aos="zoom-in">
      <h2>Saler</h2>
      <h3 className="subtitle" data-aos="fade-up">
        Ekskluzivna kolekcija sada dostupna
      </h3>
      <p className="desc" data-aos="fade-up">
        Otkrij najnoviju kolekciju koja spaja stil, kvalitet i pristupačne cene!
        Ne propusti priliku, jer su količine ograničene – poruči sada i budi
        među prvima koji će uživati u najnovijim trendovima!
      </p>
      <a href="/shop" className="button">
        Kupi odmah
      </a>
    </div>
  );
}
