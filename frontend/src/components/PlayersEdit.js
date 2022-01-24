import React, { useEffect, useState, Fragment } from "react";
import Alert from './ui-components/Alert';
import Input from "./form-components/Input";
import Select from "./form-components/Select";
import { useParams } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link} from 'react-router-dom';


function PlayersEdit(props){
    const [playerName, setPlayerName] = useState("");
    const [playerId, setPlayerId] = useState("");
    const [error, setError] = useState(null);
    const [errors, setErrors] = useState([]);
    const params = useParams();



    useEffect(() =>{
        const id = params.id;

        const returnedPlayer = {
            player_name: "Niezly kozak",
            palyer_id: "01",
        }

        setPlayerName(returnedPlayer.player_name);
        setPlayerId(returnedPlayer.palyer_id);

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

        console.log(payload + "to tuta")
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
                <h2>Edit Player</h2>
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

export default PlayersEdit;