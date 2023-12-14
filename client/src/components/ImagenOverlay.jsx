import React from "react";
import imagenReact from "../assets/imagenreact.jpg"; // Importar la imagen
import "./ImageOverlay.css";
import "./Navbar.css";
import imagen1 from "./1.jpg";
import imagen2 from "./2.jpg";
import imagen3 from "./3.jpg";
import imagen4 from "./4.jpeg";
import imagen5 from "./5.jpeg";
import { Navbar } from "./navbar/Navbar";

export function ImagenOverlay() {
  const headerStyle = {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: '21px',
    lineHeight: '2.1',
  };
  return (
    <>
      <header style={headerStyle}>
        <Navbar />
        <div id="inicio">
          <div className="textos">
            <h1 className="titulo">GLOSARIO</h1>
            <h3 className="subtitulo">TIC's</h3>
          </div>
          <div className="sesgoabajo"></div>
        </div>
      </header>
      <main style={headerStyle}>
        <div id="introduccion">
          <section className="acerca-de">
            <div className="contenedor">
              <h2 className="sobre-nosotros">¿De qué se trata?</h2>
              <h3 className="slogan">
                Herramientas para la divulgación de conceptos relacionados a las
                nuevas tecnologías
              </h3>
              <p className="parrafo">
                Este es un glosario de términos tecnológicos, diseñado para
                ayudar a las personas no especializadas a entender mejor el
                vocabulario cada vez más común en el mundo de la tecnología. El
                glosario aborda tanto las perspectivas optimistas como
                pesimistas del desarrollo tecnológico y su impacto en nuestra
                vida cotidiana. Cubre una variedad de temas, desde los
                beneficios de las innovaciones tecnológicas hasta los desafíos
                que plantean en términos de privacidad y acceso desigual. El
                glosario se ha elaborado con la colaboración de especialistas y
                utiliza fuentes de información abiertas y ampliamente
                discutidas. Los términos están organizados alfabéticamente y en
                bloques temáticos para facilitar la lectura. Este recurso es una
                herramienta valiosa para cualquier persona que busque
                profundizar su comprensión de la tecnología y sus implicaciones.
              </p>
            </div>
          </section>
        </div>

        <div id="glosario">
          <section className="galeria">
            <div className="sesgoarriba"></div>
            <div className="imagenes none">
              <img src={imagen1} alt="" />
            </div>
            <div className="imagenes">
              <img src={imagen3} className="imagen" alt="" />
            </div>
            <div className="imagenes">
              <img src={imagen2} alt="" />
              <div className="encima">
                <h2>Glosario TIC</h2>
                <div></div>
              </div>
            </div>
            <div className="imagenes">
              <img src={imagen4} alt="" />
            </div>
            <div className="imagenes none">
              <img src={imagen5} alt="" />
            </div>
            <div className="sesgoabajo"></div>
          </section>
        </div>
      </main>
    </>
  );
}
