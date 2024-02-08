import {DirectionItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {activeDirection, directionItem, updateDirectionId} = props
  const {value, displayText} = directionItem

  const isDirectionActive = activeDirection === value

  const onClickDirectionButton = () => {
    updateDirectionId(value)
  }

  return (
    <DirectionItem>
      <DirectionButton
        type="button"
        isDirectionActive={isDirectionActive}
        onClick={onClickDirectionButton}
      >
        {displayText}
      </DirectionButton>
    </DirectionItem>
  )
}

export default GradientDirectionItem
