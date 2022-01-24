import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, Fragment }  from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Games from './components/Games';
import Matches from './components/Matches';
import Players from './components/Players';
import MatchAdd from './components/MatchAdd';
import GamesAdd from './components/GamesAdd';
import PlayersAdd from './components/PlayersAdd';
import GamesEdit from './components/GamesEdit';
import PlayersEdit from './components/PlayersEdit';
import MatchEdit from './components/MatchEdit';
import Login from './components/Login';
import Alert from './components/ui-components/Alert';

function App() {
  const [jwt, setJWT] = useState("")
  const [alert, setAlert] = useState({type: "d-none", message: ""});

  useEffect(() => {
    // let t = window.localStorage.getItem("jwt");
    // if (t) {
    //     if (jwt === "") {
    //         setJWT(JSON.parse(t));
    //     }
    // }
    console.log("App.js useEffec has triggered")

  }, [jwt])

const handleJWTChange = (jwt) =>  {
    setJWT(jwt);
}

const handleAlertChange = (passedAlert) => {
  setAlert(passedAlert);
  if(passedAlert.type.includes("danger")){
    setTimeout(() => {setAlert({type: "d-none", message: ""})}, 10000);
  } else {
    setTimeout(() => {setAlert({type: "d-none", message: ""})}, 2000);
  }
  
}

function logout() {
    setJWT("");
    window.localStorage.removeItem("jwt");
}

let loginLink;
if (jwt === "") {
    loginLink = <Link className="nav-link" to="/login">Login</Link>;
} else {
    loginLink = (
        <Link to="/" className="nav-link" onClick={logout}>
        Logout
        </Link>
    );
}


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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                {jwt !=="" && (
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Matches
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to="/" className="dropdown-item">Matches</Link></li>
                  <li><Link to="/match/add" className="dropdown-item">Add Match</Link></li>
                </ul>
              </li>

                )}
                {jwt ==="" &&(
                  <li className="nav-item">
                  <Link to="/" className='nav-link'>Matches</Link>
                </li>
                )}
                
                {jwt !=="" && (
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Games
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to="/games" className="dropdown-item">Games</Link></li>
                  <li><Link to="/games/add" className="dropdown-item">Add Game</Link></li>
                </ul>
              </li>

                )}
                {jwt ==="" &&(
                  <li className="nav-item">
                  <Link to="/games" className='nav-link'>Games</Link>
                </li>
                )}

                {jwt !=="" && (
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Players
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to="/players" className="dropdown-item">Players</Link></li>
                  <li><Link to="/players/add" className="dropdown-item">Add Player</Link></li>
                </ul>
              </li>

                )}
                {jwt ==="" &&(
                  <li className="nav-item">
                  <Link to="/players" className='nav-link'>Players</Link>
                </li>
                )}

                <li className="nav-item">
                  {loginLink}
                </li>
              </ul>
            </div>
          </div>
          
        </nav>
        {jwt ==="" &&(
          <Fragment>
        <hr className='mb-3'></hr>
        
          <div className="d-grid gap-2">
            <Link to="match/add" className="btn btn-lg btn-success ms-1 ">ADD NEW MATCH</Link> 
          </div> 
          </Fragment>
        )}
        <hr className='mb-3'></hr>
        <Alert
                alertType={alert.type}
                alertMessage={alert.message}
              />
        <div className="mt-3">
        <Routes>
        <Route path="/login" element={<Login  handleJWTChange={handleJWTChange} handleAlertChange={handleAlertChange}/>} />
          <Route path="/" element={<Matches jwt={jwt}/>} />
          <Route path="/games" element={<Games jwt={jwt}/>} />
          <Route path="/players" element={<Players jwt={jwt}/>} />
          <Route path="/players/add" element={<PlayersAdd handleAlertChange={handleAlertChange}/>} />
          <Route path="/players/edit/:id" element={<PlayersEdit handleAlertChange={handleAlertChange}/>} />
          <Route path="/match/add" element={<MatchAdd handleAlertChange={handleAlertChange}/>} />
          <Route path="/match/edit/:id" element={<MatchEdit handleAlertChange={handleAlertChange}/>} />
          <Route path="/games/add" element={<GamesAdd handleAlertChange={handleAlertChange} />} />          
          <Route exact path="/games/edit/:id" element={<GamesEdit  handleAlertChange={handleAlertChange}/>} />
        </Routes>
        </div>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
