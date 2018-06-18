import React from 'react';
import PropTypes from 'prop-types';
import { darken } from 'polished';// TODO try to remove this library.
import * as colors from '../styles/colors';
import '../styles/magicButton.scss';

/** Label with required field display, htmlFor, and block styling */
class MagicButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            magicButtonHover: false,
            buttonSizes: {
                small: {
                    'font-size': '14px',
                    'line-height': '30px',
                    padding: '0 8px'
                },
                medium: {
                    'font-size': '16px',
                    'line-height': '40px',
                    padding: '0 12px'
                },
                large: {
                    'font-size': '18px',
                    'line-height': '50px',
                    padding: '0 16px'
                },
                wide: {
                    'font-size': '16px',
                    'line-height': '40px',
                    padding: '0 36px'
                },
                extraWide: {
                    'font-size': '16px',
                    'line-height': '40px',
                    padding: '0 72px'
                },
                fullWidth: {
                    'font-size': '16px',
                    'line-height': '40px',
                    padding: '0 8px'
                }
            }
        };
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.setDisplay = this.setDisplay.bind(this);
        this.setWidth = this.setWidth.bind(this);
    }

    handleMouseHover() {
        this.setState({ magicButtonHover: !this.state.magicButtonHover });
    }

    setDisplay(size) {
        return size === 'fullWidth' ? 'block' : 'inline-block';
    }
    setWidth(size) {
        return size === 'fullWidth' ? '100%' : 'initial';
    }

    render() {
        const magicButtonInline = {
            background: colors[this.props.bgColor],
            color: colors[this.props.fontColor],
            display: this.setWidth(this.props.size),
            fontSize: this.state.buttonSizes[this.props.size]['font-size'],
            lineHeight: this.state.buttonSizes[this.props.size]['line-height'],
            padding: this.state.buttonSizes[this.props.size].padding,
            width: this.setWidth(this.props.size)
        };
        if (this.state.magicButtonHover) {
            magicButtonInline.background = darken(0.2, colors[this.props.bgColor]);
        }
        return (
            <button type="button"
                className="magicButton"
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}
                style={magicButtonInline}
            >{this.props.label}</button>
        );
    }
}

MagicButton.propTypes = {
    /** Button Label text */
    label: PropTypes.string,
    /** Display asterisk after label if true */
    bgColor: PropTypes.string,
    /** User change color of font */
    fontColor: PropTypes.string,
    /** Size of the button */
    size: PropTypes.string
};

MagicButton.defaultProps = {
    bgColor: 'blue',
    fontColor: 'white',
    size: 'medium'
};


export default MagicButton;

