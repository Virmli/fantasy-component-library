import React from 'react';
import PropTypes from 'prop-types';
import * as colors from '../styles/colors';
import '../styles/label.scss';

const labelSizes = {
    small: {
        'font-size': '12px',
        'line-height': '12px'
    },
    medium: {
        'font-size': '14px',
        'line-height': '16px'
    },
    large: {
        'font-size': '16px',
        'line-height': '16px'
    }
};

/** Label with required field display, and block styling */
class Label extends React.Component {
    render() {
        const customStyle = {
            color: colors[this.props.color],
            fontWeight: this.props.fontWeight,
            fontSize: labelSizes[this.props.size]['font-size'],
            lineHeight: labelSizes[this.props.size]['line-height'],
            textTransform: this.props.textTransform
        };
        return (
            <label className="label"
                style={customStyle}>
                {this.props.label} { this.props.asterisk && <span style={{ color: colors[this.props.color] }}> *</span> }
            </label>
        );
    }
}

Label.propTypes = {
    color: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.string,
    fontWeight: PropTypes.number,
    textTransform: PropTypes.string,
    asterisk: PropTypes.bool
};

Label.defaultProps = {
    color: 'silver',
    fontWeight: 400,
    size: 'medium',
    textTransform: 'uppercase'
};

export default Label;
