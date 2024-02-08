import {Component} from 'react'

import {
  AppContainer,
  Heading,
  AppText,
  DirectionItemsContainer,
  ColorsContainer,
  ColorInputContainer,
  HexCode,
  ColorInput,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onClickGenerateButton = () => {
    const {activeDirection, color1, color2} = this.state

    this.setState({
      gradientValue: `to ${activeDirection}, ${color1}, ${color2}`,
    })
  }

  updateDirectionId = direction => {
    this.setState({activeDirection: direction})
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  render() {
    const {activeDirection, color1, color2, gradientValue} = this.state

    return (
      <AppContainer
        color1={color1}
        color2={color2}
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <AppText>Choose Direction</AppText>
        <DirectionItemsContainer>
          {gradientDirectionsList.map(directionItem => (
            <GradientDirectionItem
              key={directionItem.directionId}
              activeDirection={activeDirection}
              directionItem={directionItem}
              updateDirectionId={this.updateDirectionId}
            />
          ))}
        </DirectionItemsContainer>
        <AppText>Pick the Colors</AppText>
        <ColorsContainer>
          <ColorInputContainer>
            <HexCode>{color1}</HexCode>
            <ColorInput
              type="color"
              value={color1}
              onChange={this.onChangeColor1}
            />
          </ColorInputContainer>
          <ColorInputContainer>
            <HexCode>{color2}</HexCode>
            <ColorInput
              type="color"
              value={color2}
              onChange={this.onChangeColor2}
            />
          </ColorInputContainer>
        </ColorsContainer>
        <GenerateButton type="button" onClick={this.onClickGenerateButton}>
          Generate
        </GenerateButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator
