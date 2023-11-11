import './Objetivos.css'
import equipe from '../../assets/equipe.jpg'

function Objetivos () {
    return (
        <section id='objetivos' className='objetivos'>
        <div className='object'>
            <h1>OBJETIVOS</h1>
            <div className='imgEp'>
                <img src={equipe} className='equipefoto'/>
                <p> Ser um diferencial onde eu estiver, buscando agregar meus conhecimentos
                    adquiridos ao longo da minha jornada acadêmica e profissional à empresa e aprender
                    junto à mesma, somando mais conhecimento. Busco crescer junto, lado a lado à uma equipe,
                    fazendo parte de um time.
                </p>
            </div>
                
        </div>
        </section>

    )
}

export default Objetivos;