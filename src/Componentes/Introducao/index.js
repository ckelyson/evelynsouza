import './Introducao.css'
import foto from '../../assets/evelyn1.png'

function Introducao () {
    return (
        <main>
            <section id='introducao' className='topoSite'>
                <div className='interface'>
                    <div className='flex'>
                        <div className='txtDoSite'>
                            <h1>ENGENHEIRA MECÂNICA.<span></span></h1>
                            <h1>ENGENHEIRA DE SEGURANÇA DO TRABALHO.<span></span></h1>
                            <h1>MESTRE EM ENGENHEIRA MECÂNICA | UFCG<span>.</span></h1>
                            <p>
                            </p>
                            <div className='botaoContato'>
                                <a href='mailto:evelynssouza@outlook.com'>
                                    <button>Contato</button>
                                </a>
                            </div>
                        </div>
                        <div className='imagemDoTopo'>
                            <img src={foto} className='foto'/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Introducao;