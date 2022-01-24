import React, { useEffect, useState, Fragment }  from 'react'
import Alert from './ui-components/Alert';
import {BrowserRouter as Router, Link} from 'react-router-dom';

function Games(props){
 
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    const passedJwt = props.jwt;
    console.log("passed jwt is " + passedJwt)
    setJwt(passedJwt)
    console.log("JWT is" + jwt)
    setGames([
      {
        "game_name": "Wingspawn",
        game_id: 1,
        "game_topscore": "220",
        "game_description": "There will be some game description or not",
        "game_matches_number": 100,
        "matches": [{
          "date": "3-01-2022",
          "winner": "Player_1",
          "winner_score": 33,
          },
          {
            "date": "3-01-2022",
            "winner": "Player_1",
            "winner_score": 33,
          },
        ]
      },
      {
        "game_name": "Everdell",
        game_id: 2,
        "game_topscore": "85",
        "game_description": "There will be some game description or not for everdell",
        "game_matches_number": 200,
        "matches": [{
          "date": "3-01-2022",
          "winner": "Player_1",
          "winner_score": 33,
          },
          {
            "date": "3-01-2022",
            "winner": "Player1",
            "winner_score": 33,
          },
        ]
      },
    ]);
    if (false){
      setError({
        message: "soemthing",
        type: "alert-primary",
      });
    } else {
      setError(null);
    }


  }, [])

  if (error !== null) {
    return <Alert 
          alertType={error.type}
          alertMessage={error.message}
          />
  } else {
  return (          
    <Fragment>
      {games.map((g, j) => (
       
      <div key={j} className="card text-center mb-3">
        <div className="card-header">
          {g.game_name}
        </div>
        <div className="card-body">
          <h5 className="card-title">Top score: {g.game_topscore}</h5>
          <ul className="list-group ">
            {g.matches.map((m, i) => (
              <a key={i} href="#" className="list-group-item list-group-item-action">{m.date} | {m.winner} | {m.winner_score}</a>
            ))} 
          </ul>
        <hr />
        <p className="card-text">{g.game_description}</p>
        
        {jwt !=="" &&(
              <Link to={`/games/edit/${g.game_id}`} className="btn btn-primary ms-1 mt-3">Edit</Link>
            )}
      </div>
      <div className="card-footer text-muted">
        {g.game_matches_number}
      </div>
    </div>
  ))}
  
  </Fragment>
  )}}

export default Games;
