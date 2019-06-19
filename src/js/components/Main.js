import React from 'react';
import Matrix from './Matrix';

export default class Main extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="component-app">
                <h1>Matrix test</h1>
                <p>Description goes here</p>
                <Matrix key={1}></Matrix>
                <Matrix key={2}></Matrix>
            </div>
        );
    }
}
