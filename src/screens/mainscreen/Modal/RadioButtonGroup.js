import {RadioButton} from './RadioButton'
import {View, TouchableOpacity} from 'react-native'

const RadioButtonGroup = ({isChosen, setIsChosen}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => setIsChosen(0)}>
        <RadioButton title={'По алфавиту'} isChosen={isChosen === 0} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsChosen(1)}>
        <RadioButton title={'По дате рождения'} isChosen={isChosen === 1} />
      </TouchableOpacity>
    </View>
  )
}

export {RadioButtonGroup}
