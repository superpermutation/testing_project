import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import dayjs from 'dayjs'

const userDepartment = {
  ios: 'IOS',
  android: 'Android',
  design: 'Designer',
  management: 'Manager',
  qa: 'QA',
  back_office: 'Back Office',
  frontend: 'Frontender',
  hr: 'HR',
  pr: 'PR',
  backend: 'Backender',
  support: 'Support',
  analytics: 'Analyst',
}

const UserRow = ({title, tag, department, birthday, isChosen, isFirst}) => {
  return (
    <View style={isFirst ? [styles.cardRow, {paddingTop: 22}] : styles.cardRow}>
      <View style={styles.container}>
        <View style={styles.icon} />
        <View style={styles.textContainer}>
          <View style={styles.textRowContainer}>
            <Text style={styles.nameText}>{title}</Text>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
          <Text style={styles.positionText}>{userDepartment[department]}</Text>
        </View>
      </View>
      {isChosen && (
        <Text style={styles.dateText}>{dayjs(birthday).format('D MMM')}</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    paddingTop: 12,
  },
  container: {
    paddingLeft: 16,

    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 72,
    width: 72,
    borderRadius: 64,
    backgroundColor: 'black',
  },
  textContainer: {
    paddingLeft: 16,
  },
  textRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    color: '#050510',
    fontWeight: '500',
    fontSize: 16,
  },
  tagText: {
    color: '#97979B',
    fontWeight: '500',
    fontSize: 14,
    marginLeft: 4,
  },
  positionText: {
    color: '#55555C',
    fontWeight: '400',
    fontSize: 13,
    marginTop: 3,
  },
  dateText: {
    fontWeight: '400',
    fontSize: 15,
    color: '#55555C',
  },
})

export {UserRow}
