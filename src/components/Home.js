import React from 'react';
import {Link} from 'react-router-dom';
import './Pages.css';
import loisedodo from './imagens/loisedodo.jpeg';
import drestranho from './imagens/drestranho.jpg';
import spiderman from './imagens/spiderman.jpg';
import seriesdomomento from './imagens/seriesdomomento.jpeg';
import theadamproject from './imagens/adamproject.jpg';
import paes from './imagens/paes.jpeg';
import fred from './imagens/imgfred.jpeg';





export default function Home(props) {
    return (
        <div className='Home'>
            
            <div className="grid-container" >
                <div className="grid-item">
                <Link to="/LoiseDodo"><img className='loisedodo' src={loisedodo} alt="loisedodo" width="200px"></img></Link>
                <p className='alignHome'>Chegada de Lois Lane e Donatela</p>
                </div>
                <div className="grid-item">
                <Link to="/DrEstranho"><img className='drestranho' src={drestranho} alt="drestranho" width="200px"></img></Link>
                <p className='alignHome'>Dr. Estranho e o Multiverso da Loucura</p>
                </div>
                <div className="grid-item">
                <Link to="/SpidermanNoWayHome"><img className='spiderman' src={spiderman} alt="spiderman" width="180px"></img></Link>
                <p className='alignHome'>Spiderman: No way home </p>
                </div>
                <div className="grid-item">
                <Link to="/SeriesDoMomento"><img className='seriesdomomento' src={seriesdomomento} alt="seriesdomomento" width="165px"></img></Link>
                <p className='alignHome'>As séries do momento</p>
                </div>
                <div className="grid-item">
                <Link to="/AdamProject"><img className='theadamproject' src={theadamproject} alt="theadamproject" width="185px"></img></Link>
                <p className='alignHome'>The Adam Project</p>
                </div>
                <div className="grid-item">
                <Link to="/ReceitaPaoPizza"><img className='paes' src={paes} alt="paes" width="220px"></img></Link>
                <p className='alignHome'>Receita Pão e Pizza</p>
                </div>
                <div className="grid-item">
                <Link to="/ResgateFred"><img className='fred' src={fred} alt="fred" width="210px"></img></Link>
                <p className='alignHome'>Resgate Fred</p>
                </div>
                
            </div>

            <div className='space'></div>

            <div>
                <p className='textfooter'><strong>Sobre o site:</strong></p>

                <p className='textfooter'>Falamos sobre curiosidades da cultura pop, receitas que fazemos em casa, coisas que gostamos de fazer, nossos gatos, séries e filmes. </p>
   

                <p className='textfooter'><strong>Autores:</strong></p>

                <p className='textfooter'><ins>Alice Mânica:</ins> Nascida em Brasília em 1976, sou a metade candanga da nossa laranja, hehehehe! Sou formada em Comunicação, mas não a exerço profissionalmente. Servidora pública da área de planejamento e orçamento, nas horas vagas gosto de aproveitar os bons momentos com o Beto, nossos 3 gatos, ver TV (séries e filmes), ler e jogar joguinhos no celular.
                </p>
    
    
                <p className='textfooter'><ins>Roberto Mânica:</ins> Administrador, cervejeiro, churrasqueiro e gaúcho. Gosto de jogar video game, ler, brincar com os gatos, assistir filmes e séries.
                </p>
            </div>
            <div className="lgpd">
                    <div className="text1">Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em nossos serviços.</div>
                    <div className="text2">Para mais informações clique nesse <a class="lgpd2" href='https://drive.google.com/file/d/1VR9LCP4-5_o-S9OwBJQ6GwpQBKh-QdXv/view?usp=sharing' target="blank">Link</a> e consulte a nossa Política de Privacidade.</div>
            </div>
        </div>
    )}