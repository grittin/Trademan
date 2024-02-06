import { io } from "socket.io-client"

export const ws = () => {
    const socket = io('https://demotrade.efintradeplus.com:8443/Stock', {
      withCredentials: true,
      transports: ['polling', 'websocket'],
      rejectUnauthorized: false
    })
    socket.on('update data', (data: any) => {
        console.log("sd",(data))
      })

      socket.on('connect', () => {
        socket.emit(
          'set room',
          JSON.stringify([
          { room: 'IE_MAI' }, 
          { room: 'IE_SET50' }, 
          { room: 'IE_SET100' }, 
          { room: 'IE_SETHD' }, 
          { room: 'IE_SSET' }, 
          { room: 'IE_SETCLMV' }, 
          { room: 'IE_SETWB' }, 
          { room: 'IE_SETESG' }, 
          { room: 'IE_SET50FF' }, 
          { room: 'IE_SET100FF' }])
        )
      })
    
      socket.on('disconnect', () => {
      })
};