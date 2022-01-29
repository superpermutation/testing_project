import React, {useEffect, useState, useRef, useMemo} from 'react'
import {SafeAreaView, Text} from 'react-native'
import {getUserInfo} from '../../utils/requests'
import {CustomTextInput} from '../../components/CustomTextInput'
import {TitleList} from '../../components/TitleList'
import {UserList} from '../../components/UserList'
import {CustomModal} from '../../components/CustomModal'
import {Loop} from '../../components/Loop'
import {SkeletonBlock} from '../userProfile/SkeletonBlock'

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
  const [isLoading, setIsLoading] = useState(true)
  const bottomSheetRef = useRef(null)
  const openModal = () => bottomSheetRef.current.expand()
  const [text, setText] = useState('')
  const [selected, setSelected] = useState('all')
  const [isChosen, setIsChosen] = useState(0)
  useEffect(() => {
    getUserInfo()
      .then((res) => setUserInfo(res.data.items))
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setIsLoading(false))
  }, [])
  const [userInfo, setUserInfo] = useState([])
  const departmentList = mapDepartments(userInfo).map((i) => ({
    id: i,
    title: departments[i],
  }))

  const users = useMemo(() => {
    const userInfoList = userInfo.map((i) => ({
      id: i.id,
      title: i.firstName + ' ' + i.lastName,
      tag: i.userTag.toLowerCase(),
      // department: userDepartment[i.department],
      department: i.department,
      birthday: i.birthday,
      phone: i.phone,
    }))
    const userList = userInfoList.filter((i) =>
      selected === 'all' ? true : i.department === selected,
    )
    let a = []
    if (!isChosen) {
      a = userList.sort((a, b) => (a.title < b.title ? -1 : 1))
    } else {
      a = userList.sort(
        (a, b) =>
          Number(a.birthday.slice(5).replace('-', '')) -
          Number(b.birthday.slice(5).replace('-', '')),
      )
    }
    return a.filter(
      (i) =>
        i.title.toLowerCase().startsWith(text.trim().toLowerCase()) ||
        i.tag.startsWith(text.trim().toLowerCase()),
    )
  }, [isChosen, selected, userInfo, text])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
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
      />
      <CustomModal
        isChosen={isChosen}
        setIsChosen={setIsChosen}
        bottomSheetRef={bottomSheetRef}
      />
    </SafeAreaView>
  )
}

export {MainScreen}
