import React, { useEffect, useState, Fragment }  from 'react'
import Alert from './ui-components/Alert';

function Games(props){
 
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setGames([
      {
        "game_name": "Wingspawn",
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
      {games.map((g) => (
       
      <div class="card text-center">
    <div class="card-header">
      {g.game_name}
    </div>
    <div class="card-body">
      <h5 class="card-title">Top score: {g.game_topscore}</h5>
      <ul class="list-group ">
              {g.matches.map((m) => (
                <a href="#" class="list-group-item list-group-item-action">{m.date} | {m.winner} | {m.winner_score}</a>
               ))} 
          </ul>
      <hr />
      <p class="card-text">{g.game_description}</p>
      
      <a href="#" class="btn btn-primary">Edit</a>
    </div>
    <div class="card-footer text-muted">
      {g.game_matches_number}
    </div>
  </div>
  ))}
  
  </Fragment>
  )}}

export default Games;
