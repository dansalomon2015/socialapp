import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { outsideHeader, themedHeader, StackAnimation } from '../utils/navigation'
import SignInView from '../views/SignInView'
import ForgotPasswordView from '../views/ForgotPasswordView'
import UpdatePasswordView from '../views/UpdatePasswordView'
import SignUpView from '../views/SignUpView'
import OnBoardingView from '../views/OnBoardingView'
import AboutView from '../views/AboutView'
import { COLOR_WHITE, themes } from '../constants/colors'
import HeaderLeft from '../containers/HeaderLeft'

// Outside
const Menu = createStackNavigator()
const MenuStack = () => {
  const theme = 'light'

  return (
    <Menu.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        ...outsideHeader,
        ...themedHeader(theme),
        ...StackAnimation,
      }}>
      <Menu.Screen name="About" component={AboutView} />
    </Menu.Navigator>
  )
}

export default MenuStack
