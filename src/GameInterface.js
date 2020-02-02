import React from 'react';
import './App.css';

export default function reset () {
        return (
            <button className="button" onClick={() => window.location.reload(false)}>
                Reset!
            </button>
        );


}