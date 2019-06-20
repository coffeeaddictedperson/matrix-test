import React from 'react';
import PropTypes from 'prop-types';
import Matrix from './Matrix';
import Operand from './Operand';
class TestItem extends React.Component {
    constructor(){
        super();
        this.state = {
            propsIsValid: null
        }
    }

    componentDidMount(){

        this._propTypes = {
            number: "number",
            matrix: "matrix",
            dimensions: "dimensions",
            operand: "operand"
        };

        this._matrixProps = {
            dimensions: { value: this.props.dimensions, type: this._propTypes.dimensions},
            operand:    { value: this.props.operandType, type: this._propTypes.operand},

            aRatio:     { value: this.props.matrixARatio, type: this._propTypes.number },
            bRatio:     { value: this.props.matrixBRatio, type: this._propTypes.number },
            resultRatio:{ value: this.props.matrixResultRatio, type: this._propTypes.number },

            matrixA:    { prop: this.props.matrixA, type: this._propTypes.matrix },
            matrixB:    { prop: this.props.matrixB, type: this._propTypes.matrix },
            matrixResult:{prop: this.props.matrixResult, type: this._propTypes.matrix }
        };

        if( this._checkProps()) {
            // todo
            Object.values(this._matrixProps)
                .filter(data => data.type === this._propTypes.matrix && data.prop === 'random')
                .forEach(data=> {
                    data.value = this._generateMatrixValues();
                });
        }

    }

    render(){
        console.log('render', this.propsIsValid)
        return (
            <div className="component-app">
                {!this.state.propsIsValid ? 'Props is not valid' : this.getTestView()}
            </div>
        );
    }

    getTestView() {
        return (
            <div>
                { this._getMatrixView(this._matrixProps.aRatio, this._matrixProps.matrixA, 'matrixA') }
                { this.props.testType === "equation" ? <Operand type="equal"/> : ''}
            </div>
        );
    }

    /**
     * Validate props
     * @return {boolean}
     * @private
     */
    _checkProps(){
        // validate ratio
        const isValidRatios = !Object.entries(this._matrixProps)
            .filter(([key, data])=> data.type === this._propTypes.number)
            .find(([key, data]) => !this._isValidNumericValue(data.value));
        // validate matrix count
        // at least one matrix should be set as random
        const randomMatrixCount = Object.entries(this._matrixProps)
            .filter(([key, data])=> data.type === this._propTypes.matrix && data.prop === 'random')
            .length,
            isValidMatrixCount = randomMatrixCount > 0 && randomMatrixCount < 3;
        const propsIsValid = isValidRatios && isValidMatrixCount;
        this.setState({propsIsValid: propsIsValid});
        return propsIsValid;
    }

    /**
     * Validate number
     * @param value {any}
     * @return {boolean}
     * @private
     */
    _isValidNumericValue(value) {
        return typeof value === "number";
    }

    /**
     * Get Matrix View
     * @param ratio {number}
     * @param matrix {number[][]}
     * @param name {string}
     * @return {string|ReactDOM}
     * @private
     */
    _getMatrixView(ratio, matrix, name) {
        return (<Matrix  key={name} values={matrix.value} ratio={ratio.value}/>);
    }

    /**
     * Generate Matrix
     * @return {number[][]}
     * @private
     */
    _generateMatrixValues(){
        if(!this._matrixProps.dimensions.value) return [];
        const {rows, cols} = this._matrixProps.dimensions.value;
        let array = [];
        for(let y = 0; y < rows; y++) {
            array[y] = [];
            for (let x = 0; x < cols; x++) {
                array[y][x] = this._getRandomValue();
            }
        }
        return array;
    }

    /**
     * Get random value
     * @return {number} Number in range(-100, 100)
     */
    _getRandomValue() {
        const _min = -20, _max = 20;
        return Math.floor(Math.random()  * (_max - _min) ) + _min;
    }
}
TestItem.matrixValues = {
    random: 'random',
    unknown: 'unknown',
    'null': null
};
TestItem._matrixValues = Object.values(TestItem.matrixValues);


TestItem.defaultProps = {
    matrixARatio: 1,
    matrixA: null,
    matrixBRatio: 1,
    matrixB: null,
    matrixResultRatio: 1,
    matrixResult: null
};


TestItem.propTypes = {
    matrixARatio: PropTypes.number,
    matrixA: PropTypes.oneOf(TestItem._matrixValues),

    operandType: PropTypes.oneOf(['plus', 'minus']),

    matrixBRatio: PropTypes.number,
    matrixB: PropTypes.oneOf(TestItem._matrixValues),

    matrixResultRatio: PropTypes.number,
    matrixResult: PropTypes.oneOf(TestItem._matrixValues),

    dimensions: PropTypes.shape({
        rows: PropTypes.number,
        cols: PropTypes.number
    }).isRequired,

    testType: PropTypes.oneOf(["dimension", "equation"]).isRequired
};

export default TestItem;