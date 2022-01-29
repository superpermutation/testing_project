import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {UserRow} from './UserRow'
import {useNavigation} from '@react-navigation/core'

const UserList = ({userInfoList, Header, isChosen, ListEmptyComponent}) => {
  const navigation = useNavigation()
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('UserProfileScreen', {item})}>
      <UserRow
        isFirst={index === 0}
        title={item.title}
        tag={item.tag}
        department={item.department}
        birthday={item.birthday}
        isChosen={isChosen}
      />
    </TouchableOpacity>
  )
  return (
    <FlatList
      ListHeaderComponent={Header}
      renderItem={renderItem}
      data={userInfoList}
      keyExtractor={(item) => item.id}
      stickyHeaderIndices={[0]}
      backgroundColor={'white'}
      ListEmptyComponent={ListEmptyComponent}
    />
  )
}

const styles = StyleSheet.create({})

export {UserList}
