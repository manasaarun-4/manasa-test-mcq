import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Box } from '@material-ui/core';
// import classes from './App.module.css';
import './nasa.css';
export const Details = () => {
    const history = useHistory();
    const handleClick = (json) => history.push('/', { state: json })
    const { state } = useLocation();
    const test = state;
    // debugger;

    return (
        <div className="details" data-testid="details-1">
            <br /><br /><br /><br />
            <div className="innerbox">
                <Box className="carddetails">
                    <p><b>Name : </b> {test.state.name}</p>
                    <p><b>Nasa_jpl_url : </b> {test.state.nasa_jpl_url}</p>
                    <p><b>Is_potentially_hazardous_asteroid : </b> {test.state.is_potentially_hazardous_asteroid.toString()}</p>
                </Box>
                <br /><br />
                <button className="butns" onClick={() => handleClick()}><b>GO TO HOME</b></button>
            </div>

        </div>
    )
}