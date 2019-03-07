import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  text-align: center;
  width: ${props => props.full ? '100%' : 'auto'};
  font-size: ${props => props.fontSize ? props.fontSize : '1.5vw'};
  padding: ${props => props.minh ? '7px 20px' : '2vw 5vw'};
  transition: color .3s, background-color .3s;
  -webkit-transition: color .3s, background-color .3s;
  border: ${props => props.primary ? 'none' : '1px solid #E74C3C'};
  color: ${props => props.primary ? 'white' : '#E74C3C'};
  background-color: ${props => props.primary ? '#E74C3C' : 'white'};
  font-weight: bold;
  :hover {
    background-color: ${props => props.primary ? '#ff7675' : 'white'} ;
  }
`;
