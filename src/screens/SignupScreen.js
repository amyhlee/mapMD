import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import * as firebase from 'firebase/app'
import 'firebase/auth'

class SignupScreen extends React.Component {
  constructor() {
    super()
    this.state={
      email: '',
      password: '',
      isLoading: false
    }
  }

  onSignIn = async () => {
    if(this.state.email && this.state.password) {
      try {
        const response = await firebase.auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
      } catch (error) {
        switch(error.code) {
          case 'auth/user-not-found':
            alert('A user with that email does not exist. Please register')
            break;
            case 'auth/invalid-email':
              alert('Please enter an email address')
        }
      }
    } else {
      alert('Pleae enter an email address')
    }
  }

  onSignUp = async () => {
    if(this.state.email && this.state.password) {
      try {
        const response = await firebase.auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
      } catch (error) {
        if(error.code == 'auth/email-already-in-use') {
          alert('User already exists')
        }
      }
    } else {
        alert('Please enter email and password')
      }
   }

  render() {
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Welcome to Map MD!</Text>
      </Spacer>
        <Input
          label="Email"
          onChangeText={email => this.setState({email})}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType='email-address'
          value={this.state.email}
        />
      <Spacer />
        <Input
          secureTextEntry={true}
          label="Password"
          onChangeText={password => this.setState({password})}
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.password}
        />
      <Spacer>
        <Button
          title="Login"
          onPress={this.onSignIn}
        />
      </Spacer>
      <Spacer>
      <Button
        title="Signup"
        onPress={this.onSignUp}
      />
      </Spacer>
      <Button
        title="Proceed as Guest"
        onPress={() => this.props.navigation.navigate('mainFlow')}
      />
    </View>
    )
  }
}

// SignupScreen.navigationOptions = () => {
//   return {
//     header: null
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  }
})

export default SignupScreen


