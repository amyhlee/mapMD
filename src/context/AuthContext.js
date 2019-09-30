import createDataContext from './createDataContext'
import authApi from '../api/authApi'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload }
    default:
      return state
  }
}

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await authApi.post('/signup', { email, password })
    } catch (error) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
  }
}

const signin = (dispatch) => {
  return ({ email, password }) => {

  }
}

const signout = (dispatch) => {

}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false, errorMessage: '' }
)
