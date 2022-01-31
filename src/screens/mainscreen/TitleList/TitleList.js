import {StyleSheet, FlatList} from 'react-native'
import React from 'react'
import {SelectedButton} from './SelectedButton'

const TitleList = ({DATA, selected, setSelected}) => {
  const renderItem = ({item}) => (
    <SelectedButton
      isSelected={selected === item.id}
      title={item.title}
      onPress={() => setSelected(item.id)}
    />
  )
  return (
    <FlatList
      style={styles.container}
      horizontal={true}
      data={[{id: 'all', title: 'Все'}, ...DATA]}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}></FlatList>
  )
}

const styles = StyleSheet.create({
  container: {
    // paddingBottom: 10,
    marginHorizontal: 16,
    backgroundColor: 'white',
  },
})

export {TitleList}
