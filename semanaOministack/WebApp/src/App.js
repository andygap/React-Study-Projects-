import React from 'react';
import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';
function App() {
  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className=' input-block'>
            <label htmlFor="github_username">Usuário do Github</label>
            <input name='github_username' id='github_username' required />
          </div>

          <div className=' input-block'>
            <label htmlFor="techs">Tecnologias</label>
            <input name='techs' id='techs' required />
          </div>

          <div className="input-group">
            <div className=' input-block'>
              <label htmlFor="latitude">Latitude</label>
              <input name='latitude' id='latitude' required />
            </div>

            <div className='input-block'>
              <label htmlFor="longitude">Longitude</label>
              <input name='longitude' id='longitude' required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className='dev-item'>
          <header>
              <div>
                <img src='https://avatars0.githubusercontent.com/u/42256798?s=460&v=4' alt='Anderson' />
              </div>
              <div className = 'style-content'>
                <div className='user-info'>
                  <strong>Anderson Ferreira</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>
                <p>Desenvolvedor no Ecad Trabalhando atualmente com tecnologias voltadas para o ReactJS.</p>
                <a href='https://github.com/andygap'>Acessar perfil no Github</a>
              </div>
            </header>
          </li>
          <li className='dev-item'>
          <header>
              <div>
                <img src='https://avatars0.githubusercontent.com/u/42256798?s=460&v=4' alt='Anderson' />
              </div>
              <div className = 'style-content'>
                <div className='user-info'>
                  <strong>Anderson Ferreira</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>
                <p>Desenvolvedor no Ecad Trabalhando atualmente com tecnologias voltadas para o ReactJS.</p>
                <a href='https://github.com/andygap'>Acessar perfil no Github</a>
              </div>
            </header>
          </li>
          <li className='dev-item'>
            <header>
              <div>
                <img src='https://avatars0.githubusercontent.com/u/42256798?s=460&v=4' alt='Anderson' />
              </div>
              <div className = 'style-content'>
                <div className='user-info'>
                  <strong>Anderson Ferreira</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>
                <p>Desenvolvedor no Ecad Trabalhando atualmente com tecnologias voltadas para o ReactJS.</p>
                <a href='https://github.com/andygap'>Acessar perfil no Github</a>
              </div>
            </header>
          </li>
          <li className='dev-item'>
          <header>
              <div>
                <img src='https://avatars0.githubusercontent.com/u/42256798?s=460&v=4' alt='Anderson' />
              </div>
              <div className = 'style-content'>
                <div className='user-info'>
                  <strong>Anderson Ferreira</strong>
                  <span>ReactJS, React Native, Node.js</span>
                </div>
                <p>Desenvolvedor no Ecad Trabalhando atualmente com tecnologias voltadas para o ReactJS.</p>
                <a href='https://github.com/andygap'>Acessar perfil no Github</a>
              </div>
            </header>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
