import React, {useCallback} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet'
import {RadioButtonGroup} from './RadioButtonGroup'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

const CustomModal = ({isChosen, setIsChosen, bottomSheetRef}) => {
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),

    [],
  )
  const insets = useSafeAreaInsets().top
  return (
    <BottomSheet
      style={styles.container}
      handleComponent={() => <View style={styles.handle} />}
      enablePanDownToClose={true}
      index={-1}
      snapPoints={[184 + insets]}
      backdropComponent={renderBackdrop}
      ref={bottomSheetRef}>
      <Text style={styles.text}>Сортировка</Text>
      <RadioButtonGroup isChosen={isChosen} setIsChosen={setIsChosen} />
    </BottomSheet>
  )
}

const styles = StyleSheet.create({
  handle: {
    backgroundColor: '#C3C3C6',
    width: 56,
    height: 4,
    borderRadius: 2,
    marginTop: 8,
    marginBottom: 12,
    alignSelf: 'center',
  },
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal: 8,
  },
  text: {
    fontWeight: '600',
    color: '#050510',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 16,
  },
})

export {CustomModal}
