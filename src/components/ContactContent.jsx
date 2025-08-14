import bannerImg from "../img/con-background.jpg";
import "../style/Contact.scss";

export default function ContactContent() {
  return (
    <div className="contact-site">
      <div className="top-box">
        <div className="map">
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
        <div className="desc">
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
