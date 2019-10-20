// const initialState = {
//   email: '',
//   password: '',
//   user: {},
//   error: '',
//   loading: false
// }

// const AuthenticationReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case 'LOGIN_INPUT_CHANGE':
//       return {...state, [action.payload.field]: action.payload.value}
//     case 'LOGIN_SUCCESS':
//       return {...state, user: action.payload, loading: false}
//     case 'LOGIN_FAILURE':
//       return {...state, error: 'Authentication failed', loading: false}
//     case 'LOADING':
//       return {...state, loading: true}
//     default:
//       return state
//   }
// }

// export default AuthenticationReducer
