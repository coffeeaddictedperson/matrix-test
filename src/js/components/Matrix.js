import React from 'react';
import PropTypes from 'prop-types';
import MatrixCell from './MatrixCell'
class Matrix extends React.Component{
    render(){
        if(!this._hasEqualRowSize()) return (<div className="component-matrix">Invalid matrix values</div>);
        return (
            <div className="component-matrixContainer">
                {this._getRatioComponent()}
                <div className="component-matrix">
                    <table>
                        <tbody>
                            {this.props.values.map((row, rowKey) => {
                                return (<tr key={rowKey}>{
                                   Array.isArray(row)
                                    ? row.map((cell, key) => <MatrixCell key={rowKey + '' + key} readOnly={true} value={cell}/>)
                                    : <MatrixCell key={rowKey} readOnly={true} value={row}/>
                                }</tr>);
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    _getRatioComponent(){
        if(typeof this.props.ratio === 'undefined'
            || this.props.ratio === 1) return '';
        return(<div className="component-matrixRatio">{this.props.ratio}</div>);
    }

    _hasEqualRowSize(){
        let firstRowLen = this.props.values && this.props.values[0].length;
        return !this.props.values.find(row => row.length !== firstRowLen);
    }
}

Matrix.defaultProps = {
    values: [1]
};

Matrix.propTypes = {
    values: PropTypes.array,
    ratio: PropTypes.number
};

export default Matrix;