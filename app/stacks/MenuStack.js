import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PrivacyAndSettingsView from '../views/PrivacyAndSettingsView'
import PrivacySettingsView from '../views/PrivacySettingsView'
import BlockView from '../views/BlockView'
import { ThemeContext } from '../theme'

// Menu
const Menu = createStackNavigator()
const MenuStack = () => {
  return (
    <Menu.Navigator initialRouteName={'PrivacyAndSettings'}>
      <Menu.Screen name="PrivacyAndSettings" component={PrivacyAndSettingsView} />
      <Menu.Screen name="PrivacySettings" component={PrivacySettingsView} />
      <Menu.Screen name="Block" component={BlockView} />
    </Menu.Navigator>
  )
}

export default MenuStack
