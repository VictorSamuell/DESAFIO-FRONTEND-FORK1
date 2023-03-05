import "./Sobre.css";
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


function Sobre() {
    return(
        <section className='secaosobre'>
            <div className='containersobre'>
                <div className='textsobre'>
                    <h2 className="h2sobre"> Sistema Único de Saúde (SUS)</h2>
                    <p className="psobre"> O Sistema Único de Saúde (SUS) 
                    é um dos maiores e mais complexos sistemas de saúde pública do mundo, 
                    abrangendo desde o simples atendimento para avaliação da pressão arterial, 
                    por meio da Atenção Primária, até o transplante de órgãos, garantindo acesso integral, 
                    universal e gratuito para toda a população do país. Com a sua criação, o SUS proporcionou 
                    o acesso universal ao sistema público de saúde, sem discriminação. A atenção integral à saúde, 
                    e não somente aos cuidados assistenciais, passou a ser um direito de todos os brasileiros, 
                    desde a gestação e por toda a vida, com foco na saúde com qualidade de vida, visando a prevenção e a promoção da saúde.
                    A gestão das ações e dos serviços de saúde deve ser solidária e participativa entre os três entes da Federação: a União, 
                    os Estados e os municípios. A rede que compõe o SUS é ampla e abrange tanto ações quanto os serviços de saúde. 
                    Engloba a atenção primária, média e alta complexidades, os serviços urgência e emergência, a atenção hospitalar, 
                    as ações e serviços das vigilâncias epidemiológica, sanitária e ambiental e assistência farmacêutica.
                    Avanço: Conforme a Constituição Federal de 1988 (CF-88), a “Saúde é direito de todos e dever do Estado”. No período anterior a CF-88, o sistema público de saúde prestava assistência apenas aos trabalhadores vinculados à Previdência Social, aproximadamente 30 milhões de pessoas com acesso aos serviços hospitalares, cabendo o atendimento aos demais cidadãos às entidades filantrópicas. </p>

                </div>
        <div className="deletesobre">
       
        
        </div>

            </div>
        </section>   
        
    )
}

export default Sobre;