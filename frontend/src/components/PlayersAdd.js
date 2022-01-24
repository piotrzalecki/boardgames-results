import React, { useEffect, useState, Fragment } from "react";
import Alert from './ui-components/Alert';
import Input from "./form-components/Input";
import Select from "./form-components/Select";


function PlayersAdd(props){
    const [playerName, setPlayerName] = useState("");
    const [error, setError] = useState(null);
    const [errors, setErrors] = useState([]);



    useEffect(() =>{
        setError(null);

    },[]);


    const handleChangePlayerName = (event) => {
        setPlayerName(event.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        let errors = [];

        if(playerName === ""){
            errors.push("palyer_name");
        }


        setErrors(errors);

        if (errors.length > 0) {
            return false;
          }

        const data = new FormData(evt.target);
        const payload = Object.fromEntries(data.entries());

        console.log(payload)
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
                <h2>Add Player</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="player_name" className='form-label'>Player Name</label>
                    <input 
                        type="text"
                        className={`form-control`}
                        id="player_name"
                        name="player_name"
                        value={playerName} 
                        onChange={handleChangePlayerName}
                        />
                        <div className={hasError("palyer_name") ? "text-danger" : "d-none"}>Please set player name</div>
                </div>

                <button className="btn btn-primary">Save</button>
            </form>
            </Fragment>
        );
    }
}

export default PlayersAdd;