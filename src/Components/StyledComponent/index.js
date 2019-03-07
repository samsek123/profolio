import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  text-align: center;
  font-size: ${props => props.fontSize ? props.fontSize : '1.5vw'};
  padding: ${props => props.minh ? '7px 20px' : '2vw 5vw'};
  transition: color .3s, background-color .3s;
  -webkit-transition: color .3s, background-color .3s;
  border: ${props => props.primary ? 'none' : '1px solid #2E2E2E'};
  color: ${props => props.primary ? 'white' : '#2E2E2E'};
  background-color: ${props => props.primary ? '#E74C3C' : 'white'};
  :hover {
    background-color: ${props => props.primary ? '#ff7675' : 'white'} ;
  }
`;
