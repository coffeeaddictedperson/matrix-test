import React from 'react';
import PropTypes from 'prop-types';
class Operand extends React.Component{
    render(){
        return(<div className="component-operand">{this.type}</div>);
    }

    get type(){
        const options = {
            plus:   '+',
            minus:  '-',
            equal:  '='
        };
        return options[this.props.type || 'plus'];
    }
}

Operand.defaultProps = {
    type: 'equal'
};

Operand.propTypes = {
    type: PropTypes.oneOf(['plus', 'minus', 'equal'])
};

export default Operand;