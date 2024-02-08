import styled from 'styled-components'

export const DirectionItem = styled.li`
  list-style-type: none;
  width: 50%;
  text-align: center;

  @media (min-width: 768px) {
    width: 80px;
  }
`

export const DirectionButton = styled.button`
  color: ${props => (props.isDirectionActive ? '#1e293b' : '#334155')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
  padding-left: 12px;
  padding-right: 12px;
  border: none;
  border-radius: 5px;
  height: 30px;
  width: 80%;
  margin-top: 20px;
  cursor: pointer;
  background-color: ${props =>
    props.isDirectionActive ? '#ffffff' : '#ededed'};
  opacity: ${props => (props.isDirectionActive ? 1 : 0.5)};

  @media (min-width: 768px) {
    width: 100%;
  }
`
