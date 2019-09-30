import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const SignupScreen = ({navigation}) => {
  // const { state, signup } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Find Doc</Text>
      </Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={(newEmail) => setEmail(newEmail)}
          autoCapitalize="none"
          autoCorrect={false}
        />
      <Spacer />
        <Input
          secureTextEntry={true}
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
      <Spacer>
        <Button
          title="Sign Up"
          onPress={() => signup({email, password})}
        />
      </Spacer>
      <Button
        title="Go to main flow"
        onPress={() => navigation.navigate('mainFlow')}
      />
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    header: null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  }
})

export default SignupScreen

// import React, { Component } from 'react'
// import { View, Text, TextInput, StyleSheet, ActivityIndicator } from 'react-native'
// import { colors, Button } from 'react-native-elements'
// import firebase from 'firebase'
// import 'firebase/auth'


// class SignupScreen extends React.Component {

//   constructor() {
//     super()
//     this.state = {
//       email: '',
//       password: '',
//       isLoading: false
//     }
//   }

//   onSignIn = async () => {
//     if(this.state.email && this.state.password) {
//       this.setState({isLoading: true})
//       try {
//         const response = await firebase.auth()
//         .signInWithEmailAndPassword(this.state.email, this.state.password)

//         if(response) {
//           this.setState({isLoading: false})
//         }
//       } catch (error) {
//         this.setState({isLoading: false})
//         switch(error.code){
//           case 'auth/user not found':
//             alert('A user with that email does not exist. Try signing up')
//           break;
//             case'auth/invalid-email':
//               alert('Please enter an email address')
//         }
//       }
//     }
//     else {
//       alert('Please enter an email address')
//     }
//   }

//   onSignUp = async () => {
//     if(this.state.email && this.state.password) {
//       this.setState({isLoading: true})
//       try {
//         const response = await firebase.auth()
//         .createUserWithEmailAndPassword(this.state.email, this.state.password)

//         if(response) {
//           this.setState({isLoading:false})
//           this.onSignIn(this.state.email, this.state.password)
//         }
//       } catch (error) {
//         this.setState({isLoading: false})
//         if(error.code == 'auth/email-already-in-use')
//         alert('User already Exists. Try logging in')
//       }
//     } else {
//       alert('Please enter email and password')
//     }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         {this.state.isLoading?
//         <View>
//           <ActivityIndicator />
//         </View>
//         : null}
//        <TextInput
//         autoCapitalize="none"
//         style={styles.textInput}
//         placeholder="Email"
//         keyboardType="email-address"
//         onChangeText={email => this.setState({email})}
//        />
//        <TextInput
//         style={styles.textInput}
//         placeholder="Password"
//         secureTextEntry
//         onChangeText={password => this.setState({password})}
//        />

//        <Button
//         onPress = {this.onSignIn}
//         title='Login'
//        />
//       <Button
//         onPress = {this.onSignUp}
//         title='Signup'
//        />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   textInput: {
//     height: 50,
//     borderWidth: 0.5,
//     borderColor: colors.borderColor,
//     marginHorizontal: 40,
//     marginBottom: 10,
//     paddingHorizontal: 10
//   }
// })

// export default SignupScreen
