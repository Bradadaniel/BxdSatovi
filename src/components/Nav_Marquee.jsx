import React from "react";
import Marquee from "react-fast-marquee";

export default function Nav_Marquee() {
  return (
    <>
      <Marquee className="marquee">
        <p>
          Za kupovinu preko 3000 dinara, dostava je BESPLATNA!{" "}
          <i className="ri-truck-line"></i>
        </p>
      </Marquee>
    </>
  );
}
