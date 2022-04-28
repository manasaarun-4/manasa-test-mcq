import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { TextField, Button, Box } from '@material-ui/core';
// import classes from './App.module.css';
import './nasa.css';

export const Home = () => {

    const history = useHistory();
    const handleClick = (json) => history.push('/details', { state: json })


    const [id, setId] = useState("")
    const [randomId, setRandomId] = useState([])
    // const [hasError, setHasError] = useState(false);

    const onSubmit = () => {
        let url = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=HQ8ZCyascriClP2QoolnBgbFscvhlaS5YK6LsbQ8`;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                handleClick(json)
            })
            .catch((e) => {
                console.log(e)
                // setHasError(true);
                alert("No Data Found")
            })
    }

    const getRandomId = () => {
        let url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=HQ8ZCyascriClP2QoolnBgbFscvhlaS5YK6LsbQ8`;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setRandomId(json.near_earth_objects)
                console.log(json.near_earth_objects)
                let id = Math.floor(Math.random() * 20);
                onDetails(json.near_earth_objects[id].id)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const onDetails = (id) => {
        let url = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=HQ8ZCyascriClP2QoolnBgbFscvhlaS5YK6LsbQ8`;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                handleClick(json)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <div className="container" data-testid="home-1">
            <div className="heading">
                <h1 data-testid="text-content">Asteroid Watcher App...</h1>
            </div>
            <br /><br />

            <h4 data-testid="text-title">Enter Asteroid ID to know more</h4>
            <Box boxShadow={20} className="outbox">
                <div className="entries">
                    <TextField data-testid="input-require" className="inputs" variant='outlined' fullWidth placeholder='Enter asteroid ' onChange={(e) => setId(e.target.value)} required={true} />
                    <br /><br />
                    <Button onClick={() => onSubmit()}
                        id="asteroid"
                        className="buttons"
                        disabled={id.length < 2}
                        variant='contained'
                        data-testid="button"
                        //style={{ disabled ?(backgroundColor: "grey") : (backgroundColor: "orange") }}
                        // color="primary"
                        fullWidth>
                        Submit
                    </Button>
                    <br /><br />
                    <Button onClick={() => getRandomId()}
                        id="asteroid"
                        className="buttons"
                        variant='contained'
                        style={{ backgroundColor: "orange", color: "white" }}
                        fullWidth>
                        Random Asteroid
                    </Button>

                    <br /><br />
                </div>
            </Box >
        </div >
    )
}