import './Inicio.css'
import logo from '../../assets/logoEngrenagem1.png'
import NavigationMenu from '../Lista';


function Inicio() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo do Site" className="rotating-logo" />
        <h1>Evelyn Souza</h1>
        <NavigationMenu/>
      </div>
     
    </header>
  );
}

export default Inicio;