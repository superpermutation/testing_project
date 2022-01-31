import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native'
import React, {useState, useRef} from 'react'

import {SearchIcon} from './SearchIcon'
import {CancelButton} from './CancelButton'
import Cross from '../../assets/cross.svg'
import {OptionsIcon} from './OptionsIcon'

const CustomTextInput = ({text, setText, openModal, isChosen}) => {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef(null)
  const onCancelPress = () => {
    inputRef.current.blur()
    setText('')
  }
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={
          !isFocused ? styles.container : [styles.container, {marginRight: 0}]
        }>
        <SearchIcon color={isFocused ? '#050510' : '#C3C3C6'} />
        <TextInput
          placeholder="Введи имя, тег, почту..."
          placeholderTextColor={'#C3C3C6'}
          style={styles.input}
          value={text}
          onChangeText={setText}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          ref={inputRef}
        />

        {!isFocused ? (
          <TouchableOpacity onPress={openModal}>
            <OptionsIcon color={isChosen === 1 ? '#6534FF' : '#C3C3C6'} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setText('')}>
            <Cross height={24} width={24} />
          </TouchableOpacity>
        )}
      </View>
      {isFocused && <CancelButton onCancelPress={onCancelPress} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingVertical: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
    marginRight: 16,
    marginLeft: 16,
    borderRadius: 16,
    backgroundColor: '#F7F7F8',
    flex: 1,
  },
  input: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 8,
    flex: 1,
  },
})

export {CustomTextInput}
