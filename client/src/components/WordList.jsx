import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Navigation } from "./Navigation";
import backgroundImage from "./Skewed.png"; // Importa la imagen de fondo
import { Container, Row, Col } from "react-bootstrap";

export function WordList() {
  const [words, setWords] = useState([]);
  const [title, setTitle] = useState("");
  const { titleId } = useParams();
  const [titles, setTitles] = useState([]);
  const [page, setPage] = useState(0); // Agrega un estado para la página

  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/titulos/");
        setTitles(response.data);
      } catch (error) {
        console.error("Error fetching titles:", error);
      }
    };

    fetchTitles();
  }, []);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/palabras/titulo/${titleId}/`
        );
        setWords(response.data);
        const selectedTitle = titles.find(
          (title) => title.id === parseInt(titleId)
        );
        setTitle(selectedTitle ? selectedTitle.titulo : "Título no encontrado");
      } catch (error) {
        console.error("Error fetching words:", error);
      }
    };

    fetchWords();
  }, [titleId, titles]);

  const wordsPerPage = 4;
  const totalPages = Math.ceil(words.length / wordsPerPage);

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const displayedWords = words.slice(
    page * wordsPerPage,
    (page + 1) * wordsPerPage
  );

  const titleStyle = {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "48px",
    textDecoration: "underline",
    marginBottom: "20px",
    fontFamily: "Nova Square",
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`, // Usa la imagen de fondo importada
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Ajusta la altura al 100% de la ventana del navegador
    width: "100vw", // Ajusta la anchura al 100% de la ventana del navegador
    overflow: "auto", // Asegura que el contenido puede desplazarse si es necesario
  };

  const paginationStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15px",
    gap: "2rem",
  };

  return (
    <Container fluid style={containerStyle}>
      <Navigation></Navigation>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;700&display=swap"
        />
      </Helmet>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h1 style={titleStyle}>{title}</h1>

          <ul className="list-group">
            {displayedWords.map((word) => (
              <li key={word.id} className="list-group-item">
                <strong
                  style={{
                    color: "blue",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    fontSize: "1.2em",
                  }}
                >
                  {word.palabra}
                </strong>
                :{" "}
                <span style={{ fontFamily: "Nova Square", fontSize: "1.1em" }}>
                  {word.descripcion}
                </span>
              </li>
            ))}
          </ul>

          <div style={paginationStyle}>
            <button onClick={handlePrevPage} disabled={page === 0}>
              Anterior
            </button>
            <span style={{ color: "#fff" }}>
              Página {page + 1} de {totalPages}
            </span>
            <button onClick={handleNextPage} disabled={page === totalPages - 1}>
              Siguiente
            </button>
          </div>
          <div className="mb-5"></div>
        </Col>
      </Row>
    </Container>
  );
}
