import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { outsideHeader, themedHeader, StackAnimation } from '../utils/navigation'
import PrivacyAndSettingsView from '../views/PrivacyAndSettingsView'
import BlockView from '../views/BlockView'
import PrivacyPolicy from '../views/About/PrivacyPolicy'
import TermsOfServices from '../views/About/TermsOfServices'
import Eula from '../views/About/Eula'
import { ThemeContext } from '../theme'

// Menu
const Menu = createStackNavigator()
const MenuStack = () => {
  const { theme } = React.useContext(ThemeContext)
  return (
    <Menu.Navigator
      screenOptions={{
        gestureEnabled: false,
        ...outsideHeader,
        ...themedHeader(theme),
        ...StackAnimation,
      }}
    >
      <Menu.Screen name="PrivacyAndSettings" component={PrivacyAndSettingsView} />
      <Menu.Screen name="Block" component={BlockView} />
      <Menu.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Menu.Screen name="TermsOfServices" component={TermsOfServices} />
      <Menu.Screen name="Eula" component={Eula} />
    </Menu.Navigator>
  )
}

export default MenuStack
