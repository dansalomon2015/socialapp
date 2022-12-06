import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { ThemeContext } from '../theme'
import { outsideHeader, themedHeader, StackAnimation } from '../utils/navigation'

import SignInView from '../views/SignInView'
import SignUpView from '../views/SignUpView'
import OnBoardingView from '../views/OnBoardingView'
import AboutView from '../views/AboutView'

// Tutorial
const Tutorial = createStackNavigator()
const TutorialStack = () => {
  const { theme } = React.useContext(ThemeContext)

  return (
    <Tutorial.Navigator
      screenOptions={{
        ...outsideHeader,
        ...themedHeader(theme),
        ...StackAnimation,
      }}>
      <Tutorial.Screen
        name="OnBoard"
        component={OnBoardingView}
        options={{ headerShown: false }}
      />
      <Tutorial.Screen
        name="SignIn"
        component={SignInView}
        options={{ headerShown: false }}
      />
      <Tutorial.Screen
        name="SignUp"
        component={SignUpView}
        options={{ headerShown: false }}
      />
      <Tutorial.Screen name="About" component={AboutView} />
    </Tutorial.Navigator>
  )
}

export default TutorialStack
