import React from "react";
import "./ImageOverlay.css";
import { Helmet } from 'react-helmet';

export function Footer() {
  return (
    <footer className="footer">
      <Helmet>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="media-wrap">
              <a href="https://defensordelpueblo.chaco.gob.ar/" target="_blank">
                <img
                  src="https://defensordelpueblo.chaco.gob.ar/assets/images/logo-secundario-337x222.png"
                  alt="Logo"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-subtitle">Horarios</h5>
            <p className="footer-text">
              <strong>Lunes a viernes</strong>
              <br />
              de 07:00hs. a 13:00hs.
              <br />y 17:00hs a 19:00hs
              <br />
              Santa Fe 328
              <br />
              Resistencia. Chaco.
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-subtitle">Contacto</h5>
            <ul className="list-unstyled footer-list">
              <li>Tel: (362) 4453506</li>
              <li>Mail: defensordelpueblo@chaco.gob.ar</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-subtitle">Redes Sociales</h5>
            <div className="social-row">
              <div className="soc-item">
                <a
                  href="https://www.facebook.com/defensoriadelchaco"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
              <div className="soc-item">
                <a href="" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <div className="soc-item">
                <a
                  href="https://instagram.com/defensoriadelchaco?igshid=YmMyMTA2M2Y="
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="titulo-final">© IT JOVEN | Defensoría del Pueblo</h2>
    </footer>
  );
}
