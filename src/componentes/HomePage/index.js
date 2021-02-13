import React from 'react';
import Card from '../Card/';
import './style.css';

export default function HomePage() {
    return (
        <div className="home-page">
            <Card 
                name="Baralho dos Signos"
                description="Layout com informações dos signos"
                tech="HTML, CSS, JavaScript, React"
                url="projects/horoscopo/index.html"
            />
            <Card 
                name="Número Aleatório"
                description="Ao clicar no botão, é mostrado na tela um número entre 1 e 100 de forma aleatória"
                tech="HTML, CSS, JavaScript, React"
            />
            <Card
                name="Consultório de Dentista"
                description="Layout de um site de consultório de dentista"
                tech="HTML, CSS, JavaScript, React"
            />
        </div>
    );
}