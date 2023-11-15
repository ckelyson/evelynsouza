import './Softwares.css'
import word from '../../assets/softwares/word.png'
import excel from '../../assets/softwares/excel.png'
import powerPoint from '../../assets/softwares/power-point.png'
import powerBI from '../../assets/softwares/powerBI.png'
import msproject from '../../assets/softwares/project.png'
import autoCad from '../../assets/softwares/autocad.png'
import inventor from '../../assets/softwares/inventor.png'
import pdca from '../../assets/softwares/pdca.png'
import cincoS from '../../assets/softwares/5s.png'
import kaizen from '../../assets/softwares/statitica.png'
import wcm from '../../assets/softwares/pesquisa.png'
import regulamentadoras from '../../assets/softwares/normasRegulamentadoras.jpg'
import higiene from '../../assets/softwares/hihieneOcupacional.jpg'
 

function Softwares () {
    return (
        <section id='conhecimentos' className='software'>
            <h2>CONHECIMENTOS SOFTWARES/FERRAMENTAS</h2>
            <div  className='interfaceSoftware'>              
                <div className='ferramentas'>
                    <h1>PACOTE OFFICE</h1>
                    <div className='icone'>
                        <img src={word} className='word'/>
                        <p>WORD</p>
                    </div>
                    <div className='icone'>
                        <img src={excel} className='excel'/>
                        <p>EXCEL</p>
                    </div>
                    <div className='icone'>
                        <img src={powerPoint} className='powerPoint'/>
                        <p>POWER-POINT</p>
                    </div>
                    <div className='icone'>
                        <img src={powerBI} className='powerBI'/>
                        <p>POWER-BI</p>
                    </div>
                </div>

                <div className='ferramentas'>
                    <h1>GESTÃO DE PROJETOS</h1>
                    <div className='icone'>
                        <img src={msproject} className='msproject'/>
                        <p>MS PROJECT</p>
                    </div>
                </div>

                <div className='ferramentas'>
                    <h1>CRIAÇÃO DE MODELOS</h1>
                    <div className='icone'>
                        <img src={autoCad} className='autoCad'/>
                        <p>AUTOCAD</p>
                    </div>
                    <div className='icone'>
                        <img src={inventor} className='inventor'/>
                        <p>INVENTOR</p>
                    </div>
                </div>

                <div className='ferramentas'>
                    <h1>METODOLOGIAS</h1>
                    
                    <div className='icone'>
                        <img src={pdca} className='pdca'/>
                        <p>PDCA</p>
                    </div>
                    <div className='icone'>
                        <img src={cincoS} className='cincoS'/>
                        <p>5S</p>
                    </div>
                    <div className='icone'>
                        <img src={kaizen} className='kaizen'/>
                        <p>KAIZEN</p>
                    </div>
                    <div className='icone'>
                        <img src={wcm} className='wcm'/>
                        <p>WCM</p>
                    </div>
                    <div className='icone'>
                        <img src={regulamentadoras} className='wcm'/>
                        <p>NORMAS<br/> REGULAMENTADORAS</p>
                    </div>
                    <div className='icone'>
                        <img src={higiene} className='wcm'/>
                        <p>NORMAS DE<br/> HIGIENE OCUPACIONAL</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Softwares