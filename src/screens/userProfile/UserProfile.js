import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Arrow from '../../../assets/arrow.svg'

const UserProfile = () => {
  return (
    <View>
      <View style={styles.arrow}>
        <Arrow width={24} height={24} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  arrow: {
    marginLeft: 16,
    marginTop: 58,
  },
})

export {UserProfile}
