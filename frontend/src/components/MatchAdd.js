import React, { useEffect, useState, Fragment } from "react";
import Alert from './ui-components/Alert';
import Input from "./form-components/Input";
import Select from "./form-components/Select";


function MatchAdd(props){
    const [matchGame, setMatchGame] = useState("");
    const [matchDate, setMatchDate] = useState("");
    const [players, setPlayers] = useState([]);
    const [playersScores, setPlayersScores] = useState([])
    const [games, setGames] = useState([]);
    const [error, setError] = useState(null);
    const [errors, setErrors] = useState([]);



    useEffect(() => {
        let players_api = [
            {
                player_id: "1",
                player_name: "Player_1",
            },{
                player_id: "2",
                player_name: "Player_2",
            },
        ];
           
        
        setPlayers(players_api);

        let games_api = [
            {
                game_name: "Wingspawn",
                game_id: 0,
            },{
                game_name: "Ticket to ride",
                game_id: 1,
            },
        ]

        let games_options = [];
        games_api.map((o) => {
            let single_option = {
                id: o.game_id,
                value: o.game_name,
            }
            games_options.push(single_option);
            return null
        })

        setGames(games_options);

        setError(null);

    },[]);


    const handleChangeMatchGame = (event) => {
        setMatchGame(event.target.value);
    }

    const handleChangeDate = (event) =>{
        setMatchDate(event.target.value);
    }

    const handleChangePlayersScore = (event) => {

    }


    const handleSubmit = (evt) => {
        evt.preventDefault();

        let errors = [];

        if(matchDate === ""){
            errors.push("match_date");
        }

        setErrors(errors);

        if (errors.length > 0) {
            return false;
          }

        const data = new FormData(evt.target);
        const payload = Object.fromEntries(data.entries());
        let playerScores=[]
        let matchValues = []
        for (var key in payload) {
            let val = payload[key];
            if(!key.includes("match")){
                playerScores.push({
                    [key]: val
                })
            } else {
                matchValues.push({
                    [key]: val
                })
            }
        }
        matchValues.push(playerScores)
    }

    function hasError(key) {
        return errors.indexOf(key) !== -1;
      }

    if (error !== null) {
        return <Alert 
          alertType={error.type}
          alertMessage={error.message}
          />
    } else {
        return (
            <Fragment>
                <h2>Add Match</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="match_date" className='form-label'>Match Date</label>
                    <input 
                        type="date"
                        className={`form-control`}
                        id="match_date"
                        name="match_date"
                        value={matchDate} 
                        onChange={handleChangeDate}
                        />
                        <div className={hasError("match_date") ? "text-danger" : "d-none"}>Please choose a game</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="match_game" className='form-label'>Game</label>
                    <select value={matchGame} name="match_game" className='form-select' onChange={handleChangeMatchGame}>
                        {games.map((option) => {
                        return (
                            <option 
                            className='form-select' 
                            value={option.id}
                            key={option.id}
                            label={option.value}
                            >
                                {option.value}
                            </option>
                        );
                        
                     })}
                    </select>
                    <div className={hasError("match_game") ? "text-danger" : "d-none"}>Please choose a game</div>
                </div>
                {players.map((player) => {
                    return (
                        <div key={player.player_name} className="mb-3">
                        <label htmlFor={player.player_name} className='form-label'>For player {player.player_name}</label>
                        <input 
                            type="text"
                            className="form-control"
                            id={player.player_name}
                            name={player.player_name}

                            />
                    </div>
                    );
                })}

                <button className="btn btn-primary">Save</button>
            </form>
            </Fragment>
        );
    }
}

export default MatchAdd;