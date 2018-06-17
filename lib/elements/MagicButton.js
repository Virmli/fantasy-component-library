import React from 'react';
import PropTypes from 'prop-types';
import { darken } from 'polished';// TODO try to remove this library.
import * as colours from '../styles/colours';
import '../styles/magicButton.scss';

/** Label with required field display, htmlFor, and block styling */
class MagicButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            magicButtonHover: false
        };
        this.handleMouseHover = this.handleMouseHover.bind(this);
    }

    handleMouseHover() {
        this.setState({ magicButtonHover: !this.state.magicButtonHover });
    }

    render() {
        const magicButtonInline = {
            background: colours[this.props.bgColour],
            color: colours[this.props.fontColour]
        };
        if (this.state.magicButtonHover) {
            magicButtonInline.background = darken(0.2, colours[this.props.bgColour]);
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
    bgColour: PropTypes.string,
    /** User change color of font */
    fontColour: PropTypes.string
};

MagicButton.defaultProps = {
    bgColour: 'blue',
    fontColour: 'white'
};


export default MagicButton;

// const Button = styled.button`
//   background: ${({ bgColour }) => colours[bgColour]};
//   border: none;
//   border-radius: 10px;
//   color: ${({ fontColour }) => colours[fontColour]};
//   cursor: pointer;
//   display: inline-block;
//   font-size: 16px;
//   line-height: 40px;
//   font-weight: 200;
//   margin: 8px 0;
//   outline: none;
//   padding: 0 12px;
//   text-transform: uppercase;
//   transition: all 300ms ease;
//   &:hover {
//     background: ${({ bgColour }) => darken(0.1, colours[bgColour])};
//   }
// `;
