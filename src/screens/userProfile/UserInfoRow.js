import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const UserInfoRow = ({Icon, age, item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{Icon}</View>
      <View style={styles.textBlock}>
        <Text style={styles.text}>{item}</Text>
        <Text style={styles.ageText}>{age}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 21,

    width: '100%',
    alignItems: 'center',
    paddingLeft: 16,
    paddingTop: 26,
    paddingRight: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  textBlock: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 12,
  },
  text: {
    fontSize: 16,
    color: '#050510',
    fontWeight: '500',
  },
  ageText: {
    color: '#97979B',
    fontSize: 16,
    fontWeight: '500',
  },
})

export {UserInfoRow}
