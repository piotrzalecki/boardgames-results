import React, { useEffect, useState, Fragment } from "react";
import Alert from './ui-components/Alert';
import Input from "./form-components/Input";
import Select from "./form-components/Select";
import { useParams } from "react-router-dom";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link} from 'react-router-dom';
import { confirmAlert } from "react-confirm-alert";


function GamesEdit(props){
    const [gameName, setGameName] = useState("");
    const [gameDescription, setGameDescription] = useState("");
    const [gameId, setGameId] = useState("");
    const [error, setError] = useState(null);
    const [errors, setErrors] = useState([]);
    const params = useParams();



    useEffect(() =>{
        const id = params.id;
        
        const returnedGame = {
            game_name: "Ticket to ride",
            game_description: "abc abc abc abc abc abc abc abc abc abc ",
            game_id: "01",
        }
        setGameName(returnedGame.game_name);
        setGameDescription(returnedGame.game_description);
        setGameId(returnedGame.gameId);
        
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

      const confirmDelete = (e) => {
        confirmAlert({
            title: "Delete Player?",
            message: "Are you sure?",
            buttons: [
                {
                label: "Yes",
                onClick: () => {
                    // delete the movie
                    const myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");
                    myHeaders.append("Authorization", "Bearer " + props.jwt);
        
                    fetch(
                    "http://localhost:4000/v1/admin/deletemovie/",
                    {
                        method: "GET",
                        headers: myHeaders,
                    }
                    )
                    .then((response) => response.json)
                    .then((data) => {
                        if (data.error) {
                        props.handleAlertChange({type: "alert-danger", message: data.error.message});
                        } else {
                        props.handleAlertChange({type: "alert-success", message: "Movie deleted!"});
                        props.history.push({
                            pathname: "/admin",
                        });
                        }
                    });
                },
                },
                {
                label: "No",
                onClick: () => {},
                },
            ],
            });
        }



    if (error !== null) {
        return <Alert 
          alertType={error.type}
          alertMessage={error.message}
          />
    } else {
        return (
            <Fragment>
                <h2>Edit Game</h2>
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


                <div className="row">
                    <div className="col-sm 4 d-grid gap-2"> 
                         <Link to="/" className="btn btn-warning ms-1">
                        Cancel
                        </Link>
                    </div>
                    <div className="col-sm 4 d-grid gap-2"> 
                    <button className="btn btn-primary">Save</button>
                    </div>
                    <div className="col-sm 4">  
                    <a
                    href="#!"
                    onClick={() => confirmDelete()}
                    className="btn btn-danger ms-1 d-grid gap-2" 
                  >
                    Delete
                  </a>
                    </div>
                </div>
            </form>
            </Fragment>
        );
    }
}

export default GamesEdit;