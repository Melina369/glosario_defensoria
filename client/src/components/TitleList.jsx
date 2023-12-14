import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';
import { ImagenOverlay } from './ImagenOverlay';
import './TitleList.css'; // Importa un archivo CSS para este componente

export function TitleList() {
  const [titles, setTitles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/titulos/');
        setTitles(response.data);
      } catch (error) {
        console.error('Error fetching titles:', error.message);
        setError('Error al obtener los títulos. Por favor, intenta nuevamente más tarde.');
      }
    };

    fetchTitles();
  }, []);

  return (
    <div className="title-list">
      <ImagenOverlay />
      <div className="container mt-5">
        <h2 className="text-center title-header">Lista de Títulos</h2>
        {error && <div className="error-message">{error}</div>}
        <ul className="list-group title-group">
          {titles.map((title) => (
            <li key={title.id} className="list-group-item title-item">
              <Link to={`/palabras/${title.id}`} className="title-link">
                <h3 className="title-text">{title.titulo}</h3>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mb-5"></div> {/* Agrega espacio al final de la lista */}
      </div>
      <Footer />
    </div>
  );
}

