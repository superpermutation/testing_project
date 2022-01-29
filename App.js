import {StyleSheet, Text, View, StatusBar, FlatList} from 'react-native'
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'
import {useEffect} from 'react'
import {UserProfile} from './src/screens/userProfile/UserProfile'
import {UserBlock} from './src/screens/userProfile/UserBlock'
import {UserInfoRow} from './src/screens/userProfile/UserInfoRow'
import Phone from './assets/phone.svg'
import Star from './assets/star.svg'
import {UserList} from './src/components/UserList'
import {CustomTextInput} from './src/components/CustomTextInput'
import {TitleList} from './src/components/TitleList'
import {LoadScreen} from './src/components/LoadScreen'
import {getUserInfo} from './src/utils/requests'
import {MainScreen} from './src/screens/mainscreen/MainScreen'
import dayjs from 'dayjs'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {UserProfileScreen} from './src/screens/userProfile/UserProfileScreen'

import 'dayjs/locale/ru' // import locale

import updateLocale from 'dayjs/plugin/updateLocale'
import relativeTime from 'dayjs/plugin/relativeTime'

const Stack = createNativeStackNavigator()

dayjs.locale('ru') // use locale
dayjs.extend(updateLocale)
dayjs.extend(relativeTime)

dayjs.updateLocale('ru', {
  monthsShort: [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'нов',
    'дек',
  ],
})

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} />
      {/* <View style={styles.container}>
        <UserBlock />
        <View style={[styles.container, {backgroundColor: 'white'}]}>
          <UserInfoRow Icon={<Phone />} dateOfBirth={'+7 (999) 900 90 90'} />
          <UserInfoRow
            Icon={<Star />}
            dateOfBirth={'5 июня 1996'}
            age={'24 года'}
          />
          <UserList />

          

          <TitleList />
        </View>
      </View> */}
      {/* <LoadScreen /> */}
      <NavigationContainer>
        <Stack.Navigator initialScreen={'Main'}>
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UserProfileScreen"
            component={UserProfileScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8',
  },
})
