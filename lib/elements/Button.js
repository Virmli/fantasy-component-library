import { darken } from 'polished';
import styled from 'styled-components';
import * as colours from '../styles/colours';

const Button = styled.button`
  background: ${({ bgColour }) => colours[bgColour]};
  border: none;
  border-radius: 10px;
  color: ${({ fontColour }) => colours[fontColour]};
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: 40px;
  font-weight: 200;
  margin: 8px 0;
  outline: none;
  padding: 0 12px;
  text-transform: uppercase;
  transition: all 300ms ease;
  &:hover {
    background: ${({ bgColour }) => darken(0.1, colours[bgColour])};
  }
`;

Button.defaultProps = {
    bgColour: 'blue',
    fontColour: 'white'
};

export default Button;
