import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen';
import UploadScreen from '../screens/UploadScreen';

const MainStack = createStackNavigator()

const RootNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name='home'
        component={HomeScreen}
        options={{ title: 'Home'}}
      />
      <MainStack.Screen
        name='upload'
        component={ UploadScreen }
        options={{ title: 'Upload'}}
      />
    </MainStack.Navigator>
  )
}

export default RootNavigator
