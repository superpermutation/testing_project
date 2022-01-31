import {StatusBar} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import {MainScreen, UserProfileScreen} from './src/screens'
import dayjs from 'dayjs'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

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
