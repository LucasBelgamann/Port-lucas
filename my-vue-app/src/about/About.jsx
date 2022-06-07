import React from 'react';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <section className="about" id="about-me">
                <div className="gambis"></div>
                    <h1>About me</h1>
                <div>
                    <img></img>
                    <p>Eu sou Lucas Agostinho, tenho 21 anos e nasci na cidade de Pinhais no Estado do Paraná. Atualmente estou no ramo industrial, estagiando e aprendendo um pouco sobre esse ambiente, entretanto estou em busca de uma nova especialização, na área de tecnologia, mas especificamente no curso de desenvolvimento web. Sou uma pessoa que está em constante adaptação, sempre buscando novas caminhos para percorrer.</p>
                </div>
            </section>
        )
    }
}

export default About;
