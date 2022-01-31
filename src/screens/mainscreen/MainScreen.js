import React, {useEffect, useState, useRef, useMemo, useCallback} from 'react'
import {SafeAreaView} from 'react-native'
import {getUserInfo} from '../../utils/requests'
import {CustomTextInput, Loop} from './TextInput'
import {TitleList} from './TitleList'
import {UserList, SkeletonBlock} from './UserList'
import {CustomModal} from './Modal'
import {LoadScreen} from './LoadScreen'
import {useLoadData, useFilterUsers} from './hooks'

const departments = {
  ios: 'IOS',
  android: 'Android',
  design: 'Designers',
  management: 'Managers',
  qa: 'QA',
  back_office: 'Back Office',
  frontend: 'Frontenders',
  hr: 'HR',
  pr: 'PR',
  backend: 'Backenders',
  support: 'Support',
  analytics: 'Analysts',
}

const mapDepartments = (userInfo) =>
  Array.from(new Set(userInfo.map((i) => i.department)))

const MainScreen = () => {
  const bottomSheetRef = useRef(null)
  const openModal = () => bottomSheetRef.current.expand()
  const [text, setText] = useState('')
  const [selected, setSelected] = useState('all')
  const [isChosen, setIsChosen] = useState(0)

  const {isLoading, isError, refreshing, userInfo, onRefresh} = useLoadData()

  const departmentList = mapDepartments(userInfo).map((i) => ({
    id: i,
    title: departments[i],
  }))

  const users = useFilterUsers({userInfo, selected, text, isChosen})

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {isError ? (
        <LoadScreen onRefresh={onRefresh} />
      ) : (
        <>
          <CustomTextInput
            text={text}
            setText={setText}
            openModal={openModal}
            isChosen={isChosen}
          />

          <UserList
            userInfoList={users}
            ListEmptyComponent={isLoading ? <SkeletonBlock /> : <Loop />}
            isChosen={!!isChosen}
            Header={
              <TitleList
                DATA={departmentList}
                selected={selected}
                setSelected={setSelected}
              />
            }
            onRefresh={onRefresh}
            refreshing={refreshing}
          />
          <CustomModal
            isChosen={isChosen}
            setIsChosen={setIsChosen}
            bottomSheetRef={bottomSheetRef}
          />
        </>
      )}
    </SafeAreaView>
  )
}

export {MainScreen}
