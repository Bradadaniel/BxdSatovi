import "../style/Contact.scss";
import { GridLoader } from "react-spinners";
import React, { useState, useEffect } from "react";

export default function ContactContent() {
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
    <div className="contact-site">
      <div className="top-box">
        <div className="map" data-aos="fade-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177079.54904401227!2d19.50930151033205!3d46.093609419522586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474366c168af38f9%3A0xdf19bd922a3d838e!2sSzabadka%2C%20Szerbia!5e0!3m2!1shu!2shr!4v1754496460142!5m2!1shu!2shr"
            title="Google Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="desc" data-aos="fade-left">
          <h3>Kontakt</h3>
          <p>
            Imaš pitanje, ideju ili želiš da saznaš više o nama? Ne oklevaj,
            kontaktiraj nas! Sa zadovoljstvom ćemo odgovoriti na svaku poruku.
          </p>
          <div className="line"></div>
          <div className="contacts">
            <div className="data">
              <i className="ri-mail-line"></i>
              <a href="mailto:danibrada29@gmail.com"> Pošalji mi mejl!</a>
            </div>
            <div className="data">
              <i className="ri-instagram-line"></i>
              <a href=""> BxdSatovi</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
