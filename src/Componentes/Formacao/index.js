import './Formacao.css'

function Formacao () {
    return (
        <section className='container'>
        <div className='interface'>
            <h2 id='formacao'>FORMAÇÃO <span></span></h2>
            <div className='flexformacao'>
                <div className='especialidades'>
                    
                    <h3> GRADUAÇÃO - ENGENHARIA MECÂNICA</h3>

                    <p className='paragrafo'>
                        <p className='faculdade'>Centro Universitário Vale do Ipojuca - UNIFAVIP Wyden</p> 
                        <p>Status: Concluído em DEZ-2020</p>
                    </p>
                </div>
                <div className='especialidades'>
                    
                    <h3> PÓS GRADUAÇÃO - ENGENHARIA DE SEGURANÇA DO TRABALHO</h3>

                    <p className='paragrafo'>
                    <p className='faculdade'>Faculdade Única de Itapatinga Educação e Tecnologia - FUNIP</p>
                    <p>Status: Concluído em JAN-2023</p>
                    </p>
                </div>             
            
            
            <div className='especialidades'>
                    
                    <h3> MESTRADO ACADÊMICO - ENGENHARIA MECÂNICA - PROGETOS MECÂNICOS-METALÚRGICOS</h3>

                    <p className='paragrafo'>
                    <p className='faculdade'>Universidade Federal de Campina Grande - UFCG</p>
                    <p>Status: Cursando. Conclusão em SET-2023</p>

                    </p>
                </div>
                
                <div className='especialidades'>
                    
                    <h3> PÓS-GRADUAÇÃO - PEDAGOGIA: GESTÃO E DOCÊNCIA</h3>
                    
                    <p className='paragrafo'>
                      <p className='faculdade'>Faculdade Venda Nova do Imigrante - FAVENI</p>
                    <p>Status: Cursando. Conclusão em JUN-2024</p>
                    </p>
                </div>
            </div>
            </div>
    </section>
        
    )
}

export default Formacao