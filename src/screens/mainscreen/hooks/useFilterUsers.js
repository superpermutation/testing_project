import {useMemo} from 'react'

export const useFilterUsers = ({userInfo, selected, text, isChosen}) =>
  useMemo(() => {
    const userInfoList = userInfo.map((i) => ({
      id: i.id,
      title: i.firstName + ' ' + i.lastName,
      tag: i.userTag.toLowerCase(),
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
