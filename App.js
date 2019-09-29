import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import SearchScreen from './src/screens/SearchScreen'
import ShowResultsScreen from './src/screens/ShowResultsScreen'
// import SignupScreen from './src/screens/SignupScreen'
// import SigninScreen from './src/screens/SigninScreen'
// import AccountScreen from './src/screens/AccountScreen'
import MapScreen from './src/screens/MapScreen'
import  { Provider as AuthProvider } from './src/context/AuthContext'

const switchNavigator = createSwitchNavigator({
  // loginFlow: createStackNavigator({
  //   Signup: SignupScreen,
  //   Signin: SigninScreen,
  // }),
  mainFlow: createBottomTabNavigator({
    Listings: createStackNavigator({
      Search: SearchScreen,
      ShowResults: ShowResultsScreen
    }),
    Map: MapScreen
    // Account: AccountScreen
  })
})

// const navigator = createStackNavigator({
// },
// {
//   initialRouteName: 'Search',
//   defaultNavigationOptions: {
//     title: 'Find Doc'
//   }
// });

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}
