import React from "react";
import "../style/Home.scss";
const slides = [
  {
    icon: "ri-truck-line",
    desc: "Obezbeđujemo brzu i pouzdanu dostavu na teritoriji cele zemlje. Naš cilj je da poručeni proizvodi stignu do Vas u najkraćem mogućem roku, potpuno bezbedno. Svaki paket pažljivo pakujemo kako bi stigao bez oštećenja.",
  },
  {
    icon: "ri-user-received-line",
    desc: "Moguće je lično preuzimanje u Subotici, Topoli i Novom Sadu uz prethodni dogovor. Ako više volite da preuzmete paket lično, slobodno nas kontaktirajte i dogovorićemo termin i mesto koje Vama odgovara.",
  },
  {
    icon: "ri-shopping-bag-line",
    desc: "Porudžbine možete lako izvršiti putem naše Instagram stranice. Pošaljite nam poruku sa proizvodom koji želite, i pružićemo Vam sve potrebne informacije. Odgovaramo brzo i omogućavamo jednostavnu i sigurnu kupovinu.",
  },
  {
    icon: "ri-mail-open-line",
    desc: "Ako imate bilo kakva pitanja, slobodno nas kontaktirajte putem e-maila. Rado ćemo odgovoriti na sva pitanja u vezi sa proizvodima ili porudžbinama. Naš kontakt: danibrada29@gmail.com",
  },
];

export default function HomeBottomSwiper() {
  return (
    <div className="homeBottomSwiper" data-aos="zoom-in">
      {slides.map((items, index) => (
        <div className="box" key={index}>
          <div className="img">
            <i className={items.icon}></i>
          </div>
          <div className="desc" data-aos="fade-up">
            {items.desc}
          </div>
        </div>
      ))}
    </div>
  );
}
