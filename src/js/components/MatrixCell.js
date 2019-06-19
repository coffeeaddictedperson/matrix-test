import React from 'react';
import PropTypes from 'prop-types';
class MatrixCell extends React.Component{
    render(){
        const {readOnly, value} = this.props;
        if(readOnly) {
            return (<td className="component-matrixCell">{value}</td>)
        }
        return(
            <div className="component-matrixCell"><input defaultValue={value}/></div>
        )
    }
}

MatrixCell.defaultProps = {
    readOnly: true,
    value: 1
};

MatrixCell.propTypes = {
    readOnly: PropTypes.bool,
    value: PropTypes.number
};

export default MatrixCell;