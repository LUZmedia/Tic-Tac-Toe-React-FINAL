import React from 'react';
import GameTitle from './GameTitle';
import "./App.css";

export default class Game extends React.Component {


    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div id="game">
                <GameTitle/>
            </div>
        );
    }

}