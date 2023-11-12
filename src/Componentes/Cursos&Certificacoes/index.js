import './Cursos&Certificacoes.css'
import certificado from '../../assets/certificados/DIPLOMA-1.png'
import certificadoPos from '../../assets/certificados/FaculdadePos.png'

function CursosCertificacoes () {
    return (
        <section id='cursos' className='cursos'>
            <h2>CURSOS/CERTIFICAÇÕES</h2>
            <div className='interfaceCursos'>
                <div className='inicioDosCursos'>
                    <div className='curso'>
                        <h1>RECONHECIMENTO DE RISCOS QUÍMICOS NOS AMBIENTES DE TRABALHO</h1>
                        <p>São Paulo – fevereiro de 2023 – FUNDACENTRO - EAD.
                            Permitiu conhecer os conceitos de química básica e compreender
                            a importância da aplicação de características físico-químicas no reconhecimento
                            e na gestão de riscos químicos, considerando os diversos níveis de complexidades das
                            atividades desenvolvidas nos ambientes de trabalho.
                        </p>
                        
                    </div>
                    <div className='curso'>
                        <h1>SAÚDE E SEGURANÇA NO AMBIENTE DE TRABALHO</h1>
                        <p>Brasília – agosto de 2022 – SEST SENAT EAD
                           Iniciação à segurança do trabalho, entendimento das noções básicas de condições de trabalhos
                           e EPIS necessários para determinadas atividades industriais.
                        </p>
                       
                    </div>
                    <div className='curso'>
                        <h1>CONCEITOS FUNDAMENTAIS EM ERGONOMIA</h1>
                        <p>Escola Nacional da Inspeção do Trabalho –
                           ENIT EAD – agosto de 2022. Noções de NR 17 –
                           Ergonomia no ambiente de trabalho
                        </p>
                        
                    </div>
                    <div className='curso'>
                        <h1>NORMAS PARA A MOVIMENTAÇÃO E ARMAZENAGEM DE CARGAS</h1>
                        <p>Brasília – julho de 2022 – SEST SENAT EAD. Voltado à NR 11
                           - Transporte, Movimentação, Armazenagem e Manuseio de Materiais.
                        </p>
                    
                    </div>
                    <div className='curso'>
                        <h1>CIPA - CONCEITOS E IMPLANTAÇÃO</h1>
                        <p>Brasília – julho de 2022 – SEST SENAT EAD. Focado na NR 6 –
                           Comissão Interna de Prevenção de Acidentes,
                           apresentando as atribuições da comissão e seu dimensionamento para atender 
                           as necessidades de segurança fabril.
                        </p>
                        
                    </div>
                    <div className='curso'>
                        <h1>ORGANIZANDO UMA SIPAT – SEMANA INTERNA DE PREVENÇÃO DE ACIDENTES DO TRABALHO</h1>
                        <p>Brasília – julho de 2022 – SEST SENAT EAD. Voltado a como organizar
                           uma SIPAT para que todos os colaboradores saibam sobre a importância da prevenção
                           de acidentes no ambiente de trabalho que está prevista na legislação brasileira.il.
                        </p>
                        
                    </div>
                    <div className='curso'>
                        <h1>AGILE PROJECT MANAGEMENT: UM NOVO MODELO DE GESTÃO NAS ORGANIZAÇÕES</h1>
                        <p>Mackenzie EAD – setembro 2020. Instruiu quanto ao novo modelo de
                           Gestão Ágil que tem sido de grande interesse das empresas multinacionais.
                        </p>
                    </div>
                    <div className='imgCertificado'>
                        <img src={certificadoPos} className='certificado'/>
                        <img src={certificado} className='certificado'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CursosCertificacoes