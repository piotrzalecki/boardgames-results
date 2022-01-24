import React, { useEffect, useState, Fragment }  from 'react';
import Alert from './ui-components/Alert';
import {BrowserRouter as Router, Link} from 'react-router-dom';

function Players(props){
 
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    const passedJwt = props.jwt;
    console.log("passed jwt is " + passedJwt)
    setJwt(passedJwt)
    console.log("JWT is" + jwt)
    setPlayers([
      {
        "player_id": "1",
        "player_name": "Player_1",
        "matches_number": "123",
        "matches": [{
          "game_name": "Wingspan",
          "match_score": 33,
          },
          {
            "game_name": "Wingspawn",
            "score": 28,
          },
        ]
      },
      {
        "player_id": "2",
        "player_name": "Player_2",
        "matches_number": "123",
        "matches": [{
          "game_name": "Wingspan",
          "match_score": 33,
          },
          {
            "game_name": "Wingspawn",
            "score": 28,
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
      {players.map((p, i) => (
          <div key={i} className="card text-center mb-3">
          <div className="card-header">
            <small>Player:</small> <strong>{p.player_name}</strong>
          </div>
          <div className="card-body">
            <h5 className="card-title"> Played matches:</h5>
            <div className="card-text">
            <ul className="list-group ">
              {p.matches.map((m, index) => (
                <a key={index} href="#" className="list-group-item list-group-item-action">{m.game_name}: {m.score}</a>
              ))}
          </ul>
            </div>
            {jwt !=="" &&(
              <Link to={`/players/edit/${p.player_id}`} className="btn btn-primary ms-1 mt-3">Edit</Link>
            )}
          </div>
          <div className="card-footer text-muted">
            {p.matches_number}
          </div>
        </div>
      ))}

  </Fragment>
  )
  }
}

export default Players;
