import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const LoadScreen = ({onRefresh}) => {
  const source = require('../../assets/planet.png')
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={source} />
      <Text style={styles.firstText}>Какой-то сверхразум все сломал</Text>
      <View style={styles.centralTextContainer}>
        <Text style={styles.centralText}>Постараемся быстро починить</Text>
      </View>
      <TouchableOpacity onPress={onRefresh}>
        <Text style={styles.lastText}>Попробовать снова</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 16,
  },
  image: {
    width: 56,
    height: 56,
  },
  firstText: {
    fontWeight: '600',
    fontSize: 17,
  },
  centralTextContainer: {
    marginVertical: 12,
  },
  lastText: {
    color: '#6534FF',
    fontWeight: '600',
    fontSize: 16,
  },
  centralText: {
    color: '#97979B',
    fontWeight: '400',
    fontSize: 16,
  },
})

export {LoadScreen}
