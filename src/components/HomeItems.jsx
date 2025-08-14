import items from "../data.js";
import HomeItemsComponent from "./HomeItemsComponent.jsx";

export default function HomeItems() {
  return (
    <>
      <div className="title" data-aos="fade-up">
        Novi artikli!
      </div>
      <div
        className="homeItems"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-offset="200"
      >
        {items.slice(0, 10).map((items, index) => (
          <HomeItemsComponent
            key={index}
            image={items.image}
            subtitle={items.subtitle}
            price={items.price}
          />
        ))}
      </div>
    </>
  );
}
