import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

const userDepartment = {
  ios: 'IOS',
  android: 'Android',
  design: 'Designer',
  management: 'Manager',
  qa: 'QA',
  back_office: 'Back Office',
  frontend: 'Frontender',
  hr: 'HR',
  pr: 'PR',
  backend: 'Backender',
  support: 'Support',
  analytics: 'Analyst',
}

const UserBlock = ({item}) => {
  const insets = useSafeAreaInsets().top
  return (
    <View style={[styles.container, {paddingTop: insets}]}>
      <View style={styles.icon} />
      <View style={styles.user}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.tag}>{item.tag}</Text>
      </View>

      <Text style={styles.position}>{userDepartment[item.department]}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F8',
    alignItems: 'center',
  },
  icon: {
    height: 104,
    width: 104,
    backgroundColor: 'black',
    borderRadius: 64,
    marginTop: 28,
    marginBottom: 24,
  },
  user: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#050510',
  },
  tag: {
    fontSize: 17,
    color: '#97979B',
    marginLeft: 4,
  },
  position: {
    fontSize: 13,
    color: '#55555C',
    fontWeight: '400',
    marginBottom: 24,
  },
})

export {UserBlock}
