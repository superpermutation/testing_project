import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import ChosenCircle from '../../assets/chosencircle.svg'
import EmptyCircle from '../../assets/emptycircle.svg'

const RadioButton = ({isChosen, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {isChosen ? (
          <ChosenCircle height={24} width={24} />
        ) : (
          <EmptyCircle height={24} width={24} />
        )}
      </View>

      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 18,
  },
  iconContainer: {
    paddingLeft: 16,
    paddingRight: 12,
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
  },
})

export {RadioButton}
