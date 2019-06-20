import React from 'react';
import TestItem from "./TestItem";
export default class Main extends React.Component{
    render(){
        return (
            <div className="component-app">
                <h1>Matrix test</h1>
                <h3>Description</h3>
                <h3>Simple tests (count of cols and rows)</h3>
                <TestItem dimensions={{rows: 3, cols: 2}} matrixA='random' keys="simple0" testType="dimention"/>
                <h3>Ratio tests</h3>
                <TestItem dimensions={{rows: 3, cols: 2}} matrixARatio={7} matrixA='random' keys="ratio" testType="equation"/>
                <h3>Sum test</h3>
                <h3>subtraction test</h3>
                <h3>subtraction test</h3>
            </div>
        );
    }
}
