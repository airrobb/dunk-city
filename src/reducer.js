import { Map } from 'immutable'

import { INITIAL_STATE } from './core'

export default function reducer (state = INITIAL_STATE, action) {
  console.log(state)
  switch (action.type) {
    case 'MESSAGE':
      return state.update('messages', (messages) => messages.push(Map({
        message: action.message,
        user: action.user
      })))
    case 'JOIN_ROOM':
      return state
    case 'NEW_USER':
      return state.update('users', (users) => users.push(Map({
        name: action.user,
        id: action.socket.id
      })))
    case 'DISCONNECT':
      return state.update('users', (users) => {
        return users.delete(users.findIndex((user) => {
          return user.get('id') === action.id
        }))
      })
    default:
      return state
  }
}
