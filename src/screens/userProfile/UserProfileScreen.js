import React from 'react'
import {StyleSheet, View, TouchableOpacity} from 'react-native'
import {UserBlock} from './UserBlock'
import {UserInfoRow} from './UserInfoRow'
import {UserProfile} from './UserProfile'
import Star from '../../../assets/star.svg'
import Phone from '../../../assets/phone.svg'
import dayjs from 'dayjs'
import * as Linking from 'expo-linking'

const UserProfileScreen = ({route}) => {
  const {item} = route.params
  return (
    <View style={styles.container}>
      <UserBlock item={item} />
      <UserInfoRow
        Icon={<Star />}
        item={dayjs(item.birthday).format('D MMMM YYYY')}
        age={dayjs(item.birthday).toNow(true)}
      />
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(`tel:${item.phone}`)
        }}>
        <UserInfoRow Icon={<Phone />} item={item.phone} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})

export {UserProfileScreen}
