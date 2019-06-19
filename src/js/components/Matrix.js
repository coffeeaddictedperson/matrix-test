import React from 'react';
import PropTypes from 'prop-types';
import MatrixCell from './MatrixCell'
class Matrix extends React.Component{
    constructor(){
        super();

        this._testDimension = [
            [0, -6, 9, 12],
            [0, 9, 12, 120],
            [0, -6, 9, 12],
            [0, -6, 9, 12]
        ];
    }


    render(){
        if(!this._hasEqualRowSize()) return (<div className="component-matrix">Invalid row sizes</div>);

        return (
            <div className="component-matrix">
                <table>
                {this._testDimension.map((row, rowKey) => {
                   const Rows = row.map((cell, key) => <MatrixCell key={rowKey + '' + key} readOnly={true} value={cell}/>);
                   return (<tr>{Rows}</tr>);
                })}
                </table>
            </div>
        );
    }

    _hasEqualRowSize(){
        let firstRowLen = this._testDimension[0].length;
        return !this._testDimension.find(row => row.length !== firstRowLen);
    }
}

Matrix.defaultProps = {
    rows: 1,
    cols: 1
};

Matrix.propTypes = {
    rows: PropTypes.number,
    cols: PropTypes.number
};

export default Matrix;