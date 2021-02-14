import React from 'react';
import './style.css';

export default function Card(props) {
    return (
        <div className="card-container">
            <p><b>Projeto:</b> {props.name}</p>
            <p><b>Descrição:</b> {props.description}</p>
            <p><b>Tecnologias:</b> {props.tech}</p>
        </div>
    );
}