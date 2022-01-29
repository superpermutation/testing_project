import {StyleSheet, Text, View, FlatList, Image} from 'react-native'
import React from 'react'

const LoadScreen = () => {
  const source = require('../../assets/planet.png')
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={source} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 56,
    height: 56,
  },
})

export {LoadScreen}
