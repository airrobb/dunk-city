import { INITIAL_STATE } from './core'

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'MESSAGE':
      return state
    default:
      return state
  }
}
