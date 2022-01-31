import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'

const Loop = () => {
  const source = require('../../assets/loopNotFound.png')
  return (
    <View style={styles.container}>
      <Image height={56} width={56} source={source} />
      <Text style={styles.textBold}>Мы никого не нашли</Text>
      <Text style={styles.textTransparent}>
        Попробуй скорректировать запрос
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 80,
  },
  textBold: {
    fontWeight: '600',
    fontSize: 17,
    color: '#050510',
    marginTop: 8,
    marginBottom: 12,
  },
  textTransparent: {
    fontWeight: '400',
    color: '#97979B',
    fontSize: 16,
  },
})

export {Loop}
