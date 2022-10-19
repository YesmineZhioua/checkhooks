import React from 'react';
import {useLocation} from 'react-router-dom';

export default function MovieRoute () {
    const location = useLocation();
    return(
        <div>
        <p>{location.state.description}</p>

        <img src={location.state.Trailer} />
        </div>
    )

}