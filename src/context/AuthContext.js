import createDataContext from './createDataContext'
import authApi from '../api/authApi'
// import { runInNewContext } from 'vm'

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
      console.log(response.data) //********************************** */
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
  return () => {

  }
}
export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false, errorMessage: '' }
)
