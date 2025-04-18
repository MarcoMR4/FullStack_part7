import userService from '../services/userService' 

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_USERS':
      return action.payload
    default:
      return state
  }
}

export const initializeUsers = () => {
  return async (dispatch) => {
    const users = await userService.getAll()
    dispatch({
      type: 'SET_USERS',
      payload: users,
    })
  }
}

export default usersReducer
