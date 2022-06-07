import React from 'react';
import lucasPerfil from './LucasPortfolio.png';
import './Main.css';

class Main extends React.Component {
    render() {
        return(
            <main>
                <section className="principal">
                    <div className="photo">
                        <img className="foto-perfil" src={ lucasPerfil } />
                        </div>
                    <div className="name">
                        <h2>Hello, I'm</h2>
                        <h1>Lucas Agostinho</h1>
                    </div>
                </section>
            </main>
        )
    }
}

export default Main;