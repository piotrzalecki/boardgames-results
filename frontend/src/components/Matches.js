import React, { useEffect, useState, Fragment }  from 'react';
import Alert from './ui-components/Alert';

function Matches(props){
 
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setMatches([
      {
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
      {matches.map((m) => (
          <div class="card text-center mb-3">
          <div class="card-header">
            Match: <strong>{m.game}</strong>
          </div>
          <div class="card-body">
            <h5 class="card-title">{m.winner} won !!</h5>
            <p class="card-text">
            <ul class="list-group ">
              {m.players.map((p) => (
                <a href="#" class="list-group-item list-group-item-action">{p.name}: {p.score}</a>
              ))}
          </ul>
            </p>
            <a href="#" class="btn btn-primary">Edit</a>
          </div>
          <div class="card-footer text-muted">
            {m.match_date}
          </div>
        </div>
      ))}

  </Fragment>
  )
  }
}

export default Matches;
