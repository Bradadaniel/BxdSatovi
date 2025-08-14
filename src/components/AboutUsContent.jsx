import about1 from "../img/aboutus1.jpg";
import about2 from "../img/aboutus2.jpg";
import AboutBox from "./AboutBox";
import { GridLoader } from "react-spinners";
import React, { useState, useEffect } from "react";

export default function AboutUsContent() {
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
    <div className="about-us">
      <AboutBox
        title="Naša vizija"
        desc="Naš cilj je da u svakom našem proizvodu spojimo stil, kvalitet i funkcionalnost. Težimo da život naših kupaca učinimo jednostavnijim, prijatnijim i vrednijim. Verujemo da kroz inovacije i kreativnost možemo ponuditi rešenja koja zaista čine svakodnevnicu posebnom."
        img={about1}
      />
      <AboutBox
        title="Naši pristupi"
        desc="Naš rad počiva na kreativnosti, pažnji prema detaljima i orijentisanosti na kupca. U svakom projektu težimo da pružimo najbolja moguća rešenja i da svako iskustvo kupca bude nezaboravno. Naš tim sarađuje kako bi kvalitet, dizajn i funkcionalnost bili u savršenoj harmoniji u svakom proizvodu i usluzi."
        img={about2}
        reverse={true}
      />
    </div>
  );
}
