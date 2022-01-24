import React, { useEffect, useState, Fragment }  from 'react';
import Alert from './ui-components/Alert';
import { Link } from "react-router-dom";

function Matches(props){
 
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    const passedJwt = props.jwt;
    console.log("passed jwt is " + passedJwt)
    setJwt(passedJwt)
    console.log("JWT is" + jwt)
    setMatches([
      {
        "match_id": "1",
        "game": "Wingspawn",
        "winner": "Player_1",
        "match_date": "13-01-2022",
        "players": [{
          "name": "Player_1",
          "score": 33,
          },
          {
            "name": "Player_2",
            "score": 12
          },
        ]
      },
      {
        "match_id": "2",
        "game": "Everdell",
        "winner": "Player_44",
        "match_date": "25-01-2022",
        "players": [{
          "name": "Player_1",
          "score": 133,
          },
          {
            "name": "Player_2",
            "score": 112
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
     
      {matches.map((m, index) => (
          <div className="card text-center mb-3" key={index}>
          <div className="card-header">
            Match: <strong>{m.game}</strong>
          </div>
          <div className="card-body">
            <h5 className="card-title">{m.winner} won !!</h5>
            <div className="card-text">
              <ul className="list-group ">
                {m.players.map((p, index) => (
                  <a key={index} href="#" className="list-group-item list-group-item-action">{p.name}: {p.score}</a>
                ))}
              </ul>
            </div>
            {jwt !=="" &&(
              <Link to={`/match/edit/${m.match_id}`} className="btn btn-primary ms-1 mt-3">Edit</Link>
            )}
          </div>
          <div className="card-footer text-muted">
            {m.match_date}
          </div>
        </div>
      ))}

  </Fragment>
  )
  }
}

export default Matches;
