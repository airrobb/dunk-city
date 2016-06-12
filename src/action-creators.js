export function message (data) {
  return {
    type: 'MESSAGE',
    user: data.user,
    message: data.message,
    room: data.room
  }
}
export function signIn (data) {
  return {
    type: 'NEW_USER',
    user: data.user,
  }
}
export function joinRoom (data) {
  return {
    type: 'JOIN_ROOM',
    user: data.user,
    room: data.room
  }
}
export function disconnect (id) {
  return {
    type: 'DISCONNECT',
    id: id
  }
}
