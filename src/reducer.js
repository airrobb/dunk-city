import { Map } from 'immutable'

import { INITIAL_STATE } from './core'

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'MESSAGE':
      return state.update('messages', (messages) => messages.push(Map({
        message: action.message,
        user: action.user
      })))
    case 'JOIN_ROOM':
      return state
    case 'NEW_USER':
      return state.update('users', (users) => users.push(action.user))
    default:
      return state
  }
}
