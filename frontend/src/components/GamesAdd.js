import React, { useEffect, useState, Fragment } from "react";
import Alert from './ui-components/Alert';
import Input from "./form-components/Input";
import Select from "./form-components/Select";


function GamesAdd(props){
    const [gameName, setGameName] = useState("");
    const [gameDescription, setGameDescription] = useState("");
    const [error, setError] = useState(null);
    const [errors, setErrors] = useState([]);



    useEffect(() =>{
        setError(null);

    },[]);


    const handleChangeGameName = (event) => {
        setGameName(event.target.value);
    }

    const handleChangeGameDescription = (event) =>{
        setGameDescription(event.target.value);
    }


    const handleSubmit = (evt) => {
        evt.preventDefault();

        let errors = [];

        if(gameName === ""){
            errors.push("game_name");
        }

        if(gameDescription === ""){
            errors.push("game_description");
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
                <h2>Add Game</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="game_name" className='form-label'>Game Name</label>
                    <input 
                        type="text"
                        className={`form-control`}
                        id="game_name"
                        name="game_name"
                        value={gameName} 
                        onChange={handleChangeGameName}
                        />
                        <div className={hasError("game_name") ? "text-danger" : "d-none"}>Please set game name</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="game_description" className='form-label'>Game Description</label>
                    <textarea 
                        type="text"
                        className={`form-control`}
                        id="game_description"
                        name="game_description"
                        value={gameDescription} 
                        onChange={handleChangeGameDescription}
                        />
                        <div className={hasError("game_description") ? "text-danger" : "d-none"}>Please set game description</div>
                </div>


                <button className="btn btn-primary">Save</button>
            </form>
            </Fragment>
        );
    }
}

export default GamesAdd;