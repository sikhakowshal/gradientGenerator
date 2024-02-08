import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: 500;
  width: 90%;
  text-align: center;

  @media (min-width: 768px) {
    width: 50%;
  }
`

export const AppText = styled.p`
  color: #ededed;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
`

export const DirectionItemsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 0;
  list-style-type: none;
  width: 90%;

  @media (min-width: 768px) {
    width: 30%;
  }
`

export const ColorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60%;

  @media (min-width: 768px) {
    width: 25%;
  }
`

export const ColorInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HexCode = styled.p`
  color: #ededed;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`

export const ColorInput = styled.input`
  height: 45px;
  width: 120px;
  border: none;
  background: transparent;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  height: 36px;
  width: 120px;
  color: #1e293b;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 30px;
  background-color: #00c9b7;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`
