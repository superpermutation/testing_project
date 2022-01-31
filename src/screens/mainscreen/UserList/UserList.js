import {FlatList, TouchableOpacity, RefreshControl} from 'react-native'
import React from 'react'
import {UserRow} from './UserRow'
import {useNavigation} from '@react-navigation/core'

const UserList = ({
  userInfoList,
  Header,
  isChosen,
  ListEmptyComponent,
  refreshing,
  onRefresh,
}) => {
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
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={'#6534FF'}
          colors={'#6534FF'}
        />
      }
    />
  )
}

export {UserList}
