import React from 'react';
import fetch from 'node-fetch';

export const App = async () => {
    let result =  await fetch('http://34.245.181.121:4040/')
    return (
        <div>
            <h2>This app returns a list of profile fields.</h2>
            <p>{result}</p>
        </div>
    )
}