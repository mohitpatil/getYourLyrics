import React from 'react';
import bounce from './bounce.gif';

const Spinner = () => {
    return (
        <div>
            <img
            src={bounce}
            alt="loading..."
            style= {{ width: '200px',
            margin: '40px auto',
            display: 'block' }} />
        </div>
    )
}

export default Spinner;