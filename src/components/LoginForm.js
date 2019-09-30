import React from 'react'
import { View, Button, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Input, errorMessage } from 'react-native-elements'
import firebase from 'firebase'
import { loginInputChange, login } from '../store/index'
import { connect } from 'react-redux'
import _ from 'lodash'
import { NavigationEvents } from 'react-navigation'
import SearchScreen from '../screens/SearchScreen'


class LoginForm extends React.Component {

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps)
  //   if (!_.isEmpty(nextProps.user)) {
  //     this.props.navigation.navigate('Search')
  //   }
  // }

  login() {
    const { navigate } = this.props.navigation
    const { email, password } = this.props
    this.props.login({email, password})
  }

  showButton() {
    if (this.props.loading) {
      return (
        <View>
          <ActivityIndicator size={'small'} />
        </View>
      )
    }
    return (
      <Button title="Login" onPress={() => navigate('SearchScreen')} backgroundColor="#3bd3d4" />
    )
  }

  showError() {
    console.log(this.props.error)
    if (this.props.error) {
      return (
        <Text errorStyle={{ color: 'red' }} errorMessage="Authentication failed"></Text>
      )
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Input
        autoCapitalize="none"
          value={this.props.email}
          placeholder="Email"
          onChangeText={text => this.props.loginInputChange({'field': 'email', 'value': text})}
        />
        <Input
          value={this.props.password}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => this.props.loginInputChange({'field': 'password', 'value': text})}
        />
      <View>
        {this.showError()}
      </View>
      <View>
        {this.showButton()}
      </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    loading: state.auth.loading,
    user: state.auth.user,
    error: state.auth.error
  }
}

export default connect(mapStateToProps, {loginInputChange, login})(LoginForm)

const styles = StyleSheet.create({})
