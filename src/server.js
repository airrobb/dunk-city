import Server from 'socket.io'
import { joinRoom, signIn, message } from './action-creators'

export default function startServer(store) {
  const io = new Server().attach(8090)
  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  )
  io.on('connection', (socket) => {

    socket.on('action', (data) => {
      store.dispatch(data)
    })
  })
}
