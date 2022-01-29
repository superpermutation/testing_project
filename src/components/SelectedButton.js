import {StyleSheet, Text, View, TouchableOpacity, Touchable} from 'react-native'
import React from 'react'

const SelectedButton = ({isSelected, title, onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={isSelected ? styles.containerSelected : styles.container}>
          <Text style={isSelected ? styles.textSelected : styles.text}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  containerSelected: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderColor: '#6534FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  textSelected: {
    fontSize: 15,
    fontWeight: '600',
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: '#97979B',
  },
})

export {SelectedButton}
