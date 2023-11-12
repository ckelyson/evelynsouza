import React, { useState } from 'react';
import './lista.css';

const NavigationMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={`navigation-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="menu-items">
          <li>
            <a href="#introducao">
              <i className="bi bi-person-lines-fill"></i> Introdução
            </a>
          </li>
          <li>
            <a href="#objetivos">
              <i className="bi bi-file-earmark-text"></i> Objetivos
            </a>
          </li>
          <li>
            <a href="#formacao">
              <i className="bi bi-mortarboard"></i> Formação
            </a>
          </li>
          <li>
          <a href="#conhecimentos">
          <i class="bi bi-code-square"></i> Conhecimentos softwares/ferramentas
            </a>
          </li>
          <li>
            <a href="#experiencia">
              <i className="bi bi-person-vcard"></i> Experiências profissionais 
            </a>
          </li>
         
          <li>
            <a href="#cursos">
              <i className="bi bi-journal-medical"></i> Cursos e Certificações
            </a>
          </li>
          <li>
            <a href="#contato">
              <i className="bi bi-telephone"></i> Contato/rodape
            </a>
          </li>
          {/* Adicione mais itens de menu conforme necessário */}
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;