import React from "react";
import Hero from "../components/Hero";
import HomeItems from "../components/HomeItems";
import SalerHero from "../components/SalerHero";
import HomeBottomSwiper from "../components/HomeBottomSwiper";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeItems />
      <SalerHero />
      <HomeBottomSwiper />
    </div>
  );
}
