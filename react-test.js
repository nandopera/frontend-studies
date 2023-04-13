// Importa as bibliotecas necessárias
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Define os componentes que serão exibidos em cada rota
function Home() {
  return (
    <div>
      <h1>Bem-vindo à minha aplicação</h1>
      <p>Esta é a página inicial da minha aplicação.</p>
    </div>
  );
}

function Sobre() {
  return (
    <div>
      <h1>Sobre a minha aplicação</h1>
      <p>Esta é a página de informações sobre a minha aplicação.</p>
    </div>
  );
}

// Define as rotas e seus respectivos componentes
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/sobre">
            <Sobre />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// Renderiza o componente App na div com o id "root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);