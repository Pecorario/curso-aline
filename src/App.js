import React from 'react';
import './App.css';
import git from './assets/git.jpg';
import html from './assets/html-css.png';
import programming from './assets/programming.jpg';

function App() {
  return (
    <div className="App">

      <header>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Cronograma</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </header>

      <section className="principal">
        <h1>CAPACITAÇÃO PARA A PRINCESA DO SENHOR</h1>
        <blockquote>
          <p>É disso que vocês estão rindo?</p>
          <cite>Bagriel Misto</cite>
        </blockquote>
      </section>

      <section className="sobre">
        <h2>Sobre</h2>
        <div className="container">
            <div className="card">
              <h3>HTML, CSS e ReactJS</h3>
            </div>
            <div className="card">
              <h3>WebDesign</h3>
            </div>
            <div className="card">
              <h3>Criação do MistoWeb</h3>
            </div>
        </div>
    </section>

    <section className="cronograma">
      <h2>Cronograma</h2>

      <div className="conteudo">
        <ul>
          <li className="item">
            <div>
                <img src={git} alt="Reunião de projetos" />
            </div>
            <h4>Git e GitHub</h4>
            <div>
                <input type="checkbox" id="concluido" />
                <label for="concluido">concluido</label>
            </div>
          </li>
          <li className="item">
            <div>
                <img src={html} alt="HTML&CSS" />
            </div>
            <h4>html&css</h4>
            <div>
                <input type="checkbox" id="concluido" />
                <label for="concluido">concluido</label>
            </div>
          </li>
          <li className="item">
            <div>
                <img src={programming} alt="Cara programando" />
            </div>
            <h4>início do projeto</h4>
            <div>
                <input type="checkbox" id="concluido" />
                <label for="concluido">concluido</label>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section className="contact">
        <h2>Contato</h2>
        <p>Ficou com alguma dúvida? Entre em contato com a gente</p>

        <form>
            <input className="input" type="text" placeholder="Nome" />
            <input className="input" type="email" placeholder="Email" />
            <textarea rows="6" placeholder="Digite sua mensagem"></textarea>
            <input id="submit" type="submit" />
        </form>
    </section>

    </div>
  );
}

export default App;
