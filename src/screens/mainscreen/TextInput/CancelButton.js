import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

const CancelButton = ({onCancelPress}) => {
  return (
    <TouchableOpacity onPress={onCancelPress}>
      <View style={styles.container}>
        <Text style={styles.text}>Отмена</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 11,
    marginRight: 16,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6534FF',
  },
})

export {CancelButton}
