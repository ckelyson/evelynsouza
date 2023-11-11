import React from 'react';
import './Rodape.css';

const Footer = () => {
  return (
    <footer id='contato'  className="footer-container">
        <div className='interfaceFooter'>
            <div className='sobre'>
                <h1>Sobre</h1>
                <p className="footer-text">Evelyn Louise Santos Souza </p>
                <p className='footer-text'>26 anos</p>
                <p>Feminino</p>
                <p>Solteira</p>
            </div>
            <div className='sobre'>
                <h1>Endereço</h1>
                <p className="footer-text">Avenida Doutor Sebastião Cabral, 298, Floresta Belo Jardim – PE</p>
                <p className='footer-text'>26 anos, Feminino, Solteira</p>
                <p>55158-115 – Brasil</p>
            </div>
            <div className='sobre'>
                <h1>Contato</h1>
                <p className="footer-text"><a href='https://wa.me/5581995251571'>(81)99525-1571  <br/> <a href='#'>(81)99795-8976</a></a></p>
                <p className='footer-text'><a href='mailto:evelynssouza@outlook.com'>evelynssouza@outlook.com</a></p>
            </div>
        </div>
     
      <div className="social-icons">
        <a href="https://wa.me/5581995251571" className="icon" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-whatsapp"><a href='https://wa.me/5581995251571'></a></i>
        </a>
        <a href="https://instagram.com/evelynlouise_?igshid=MzRlODBiNWFlZA==" className="icon" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/evelyn-souza-3a1204196?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="icon" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-linkedin"></i>
        </a>
      </div>
      <div>
        <a href='https://portfolio-omega-fawn-15.vercel.app/' className='ckelyson' >2023 <i class="bi bi-c-circle"></i> Desenvolvido por Ckelyson Moura</a>
      </div>
    </footer>
  );
};

export default Footer;