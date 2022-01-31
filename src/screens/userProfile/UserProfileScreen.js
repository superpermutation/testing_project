import React, {useCallback} from 'react'
import {StyleSheet, View, TouchableOpacity} from 'react-native'
import {UserBlock} from './UserBlock'
import {UserInfoRow} from './UserInfoRow'
import Star from '../../../assets/star.svg'
import Phone from '../../../assets/phone.svg'
import dayjs from 'dayjs'
import * as Linking from 'expo-linking'
import {Arrow} from './Arrow'
import {useNavigation} from '@react-navigation/native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

const UserProfileScreen = ({route}) => {
  const navigation = useNavigation()
  const {item} = route.params
  const onPress = useCallback(() => navigation.goBack(), [])
  const insets = useSafeAreaInsets().top
  return (
    <View style={styles.container}>
      <View style={[styles.arrowButton, {top: insets + 14}]}>
        <Arrow onPress={onPress} />
      </View>
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
  arrowButton: {
    position: 'absolute',

    left: 12,
    zIndex: 100,
  },
})

export {UserProfileScreen}
