import React from "react";
import "../style/Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="fast-links">
          <h3>Brzi linkovi</h3>
          <ul>
            <li>
              <a href="/">Početne stranice</a>
            </li>
            <li>
              <a href="/shop">Prodavnica</a>
            </li>
            <li>
              <a href="/">Lista želja</a>
            </li>
          </ul>
        </div>

        <div className="company">
          <h3>Kompanija</h3>
          <ul>
            <li>
              <a href="/contact">Kontakt</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/about-us">O nama</a>
            </li>
          </ul>
        </div>

        <div className="news">
          <h3>Vesti</h3>
          <ul>
            <li>
              <a href="/">Izgradnja brenda</a>
            </li>
            <li>
              <a href="/">Kreiranje sajta</a>
            </li>
            <li>
              <a href="mailto:danibrada29@gmail.com">
                Želiš sajt? <span>Pošalji mi mejl!</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact">
          <h3>Kontakt</h3>
          <ul>
            <li>
              <a href="tel:+3812766605">Telefon: +381 61 276 6605</a>
            </li>
            <li>
              <a href="mailto:danibrada29@gmail.com">
                Email: danibrada29@gmail.com
              </a>
            </li>
            <div className="icons">
              <li>
                <a href="/">
                  <i className="ri-instagram-line"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="ri-facebook-fill"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="ri-mail-line"></i>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="box">
          <p>&copy; Created by Daniel Brada</p>
        </div>
        <div className="box">
          <h1>BxdSatovi</h1>
        </div>
        <div className="box">
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
