import React from "react";
import './Contato.css';
import email from './imagens/email.png';
import whatsapp from './imagens/whatsapp.jpg';

export default function Whatsapp() {
    
  
    return (
        <div className="page"> 

            <br /><br />           

            <h2>Fale conosco nos links abaixo:</h2>

            <br />

            <img className='email' src={email} alt="email" width="23px"></img><a  className="whats" href="mailto:casalcandango@casalcandango.com.br">
            <strong>E-mail: casalcandango@casalcandango.com.br</strong>
            </a>


            <br /><br /><br />

            <img className='whatsapp' src={whatsapp} alt="whatsapp" width="23px"></img><a className="whats" href="https://api.whatsapp.com/send?phone=5561992607877" target="_blank" rel="noopener noreferrer">
            <strong>Whatsapp: 61 99260-7877</strong>
            </a>

            
        </div>

    )}
