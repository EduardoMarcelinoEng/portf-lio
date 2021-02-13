import React from 'react';
import './style.css';

function currentUrl(url) {
    window.open(url);
}

export default function Card(props) {
    return (
        <div className="card-container" onClick={ currentUrl(props.url) }>
            <p><b>Projeto:</b> {props.name}</p>
            <p><b>Descrição:</b> {props.description}</p>
            <p><b>Tecnologias:</b> {props.tech}</p>
        </div>
    );
}