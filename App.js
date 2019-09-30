import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import SearchScreen from './src/screens/SearchScreen'
import ShowResultsScreen from './src/screens/ShowResultsScreen'
import SignupScreen from './src/screens/SignupScreen'
// import SigninScreen from './src/screens/SigninScreen'
// import AccountScreen from './src/screens/AccountScreen'
import MapScreen from './src/screens/MapScreen'
// import  { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/store/reducers'
import ReduxThunk from 'redux-thunk'
import * as firebase from 'firebase/app'
import firebaseConfig from './config/index'
import 'firebase/auth'
import LoginForm from './src/components/LoginForm';

class App extends React.Component {
  constructor() {
    super()
    this.initializeFirebase()
  }
  initializeFirebase = () => {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    // const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      // <Provider store={store}>
        <AppContainer />
      // </Provider>
    )
  }
}

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    // Signin: SigninScreen,
    // navigationOptions: {
    //   title: 'Login'
    // }
  }),
  mainFlow: createBottomTabNavigator({
    Listings: createStackNavigator({
      Search: SearchScreen,
      ShowResults: ShowResultsScreen
    }),
    Map: MapScreen
    // Account: AccountScreen
  })
})


const AppContainer = createAppContainer(switchNavigator)



export default App
