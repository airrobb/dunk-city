import Server from 'socket.io'
import { joinRoom, signIn, message, disconnect } from './action-creators'

export default function startServer(store) {
  const io = new Server().attach(8090)
  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  )
  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS())
    socket.on('action', (data) => {
      if (data.type === 'NEW_USER') {
        data.socket = socket
      }
      store.dispatch(data)
    })
    socket.on('disconnect', () => {
      store.dispatch(disconnect(socket.id))
    })
  })
}
