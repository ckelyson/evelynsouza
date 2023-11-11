import CursosCertificacoes from "./Componentes/Cursos&Certificacoes";
import ExperienciaProfissional from "./Componentes/ExperienciaProfissional";
import Formacao from "./Componentes/Formacao";
import Inicio from "./Componentes/Inicio";
import Introducao from "./Componentes/Introducao";
import Objetivos from "./Componentes/Objetivos";
import Footer from "./Componentes/Rodape";
import Softwares from "./Componentes/Softwares";

function App() {
  return (
    <>
      <Inicio/>
      <Introducao/>
      <Objetivos/>
      <Formacao/>
      <Softwares/>
      <ExperienciaProfissional/>
      <CursosCertificacoes/>
      <Footer/>
    </>
  );
}

export default App;
