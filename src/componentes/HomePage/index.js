import React from 'react';
import Card from '../Card/';
import './style.css';

export default function HomePage() {
    return (
        <div className="home-page">
            <a href="https://baralhosignos.herokuapp.com/" target="_blank"><Card 
                name="Baralho dos Signos"
                description="Layout com informações dos signos"
                tech="HTML, CSS, JavaScript, React"
            /></a>
            <a href="https://numero-aleatorio.herokuapp.com/" target="_blank"><Card 
                name="Número Aleatório"
                description="Ao clicar no botão, é mostrado na tela um número entre 1 e 100 de forma aleatória"
                tech="HTML, CSS, JavaScript, React"
            /></a>
            <a href="https://consultorio-dentista.herokuapp.com/" target="_blank"><Card
                name="Consultório de Dentista"
                description="Layout de um site de consultório de dentista"
                tech="HTML, CSS, JavaScript, React"
            /></a>
        </div>
    );
}