import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Games from './components/Games';
import Matches from './components/Matches';
import Players from './components/Players';

function App() {
  return (
    <Router>
    <div className="App">
      <div className='row'>
        <div className="col mt-3">
           <h1 className='mt-3'>Boardgames results!</h1>
        </div>
        </div>
        <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/" className='nav-link'>Matches</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/games">Games</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/players">Players</Link>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr className='mb-3'></hr>
        <div className="mt-3">
        <Routes>
          <Route path="/" element={<Matches/>} />
          <Route path="/games" element={<Games/>} />
          <Route path="/players" element={<Players/>} />
        </Routes>
        </div>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
