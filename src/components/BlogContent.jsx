import BlogComponent from "./BlogComponent";
import watches from "../img/watches.jpg";
import code from "../img/code.jpg";
import { GridLoader } from "react-spinners";
import React, { useState, useEffect } from "react";

export default function BlogContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className="loader"
        style={{ textAlign: "center", marginTop: "2rem" }}
      >
        <GridLoader size={20} color="#222" />
      </div>
    );
  }

  return (
    <div className="blog-content">
      <div className="title" data-aos="fade-left">
        <h1>Blog Sajt</h1>
      </div>
      <div className="box" data-aos="fade-up">
        <BlogComponent
          date="12.08.2025"
          img={code}
          title="Izrada sajta i kreiranje koncepta"
          text="Pravljenje web sajta uvek počinje planiranjem. Prvi korak je analiza potreba, ciljane publike i željene funkcionalnosti, nakon čega se kreira koncept. Važno je da dizajn bude u skladu sa brendom, a korisničko iskustvo intuitivno i lako za korišćenje. Obratamo pažnju na svaki detalj, od boja i tipografije do strukture navigacije. Cilj je da sajt ne bude samo informativan, već i da privlači posetioce i podstiče akciju, bilo da je u pitanju kupovina, prijava na newsletter ili kontakt sa nama."
        />

        <BlogComponent
          date="14.08.2025"
          img={watches}
          title="Narudžbina novih satova"
          text="Prilikom naručivanja novih satova uvek obraćamo pažnju na kvalitet i dizajn. Prvo biramo najbolje materijale i modele koji prate najnovije trendove, a zatim osiguravamo brzu i pouzdanu dostavu. Važno nam je da svaki novi sat ispuni očekivanja i da kupci budu zadovoljni. Proces naručivanja je jednostavan i transparentan, a uvek se trudimo da ponudimo najbolje ponude. Dolazak novih satova predstavlja uzbudljivu priliku da osvežimo našu ponudu i unapredimo iskustvo kupaca."
        />
      </div>
    </div>
  );
}
