const { Wechaty } = require('wechaty')
const qrcodeTerminal = require('qrcode-terminal')

const bot = new Wechaty()

bot
.on('scan',function(qrcode){
  qrcodeTerminal.generate(qrcode)
})
.on('login',function(user){
  console.log('${user.name()} login')
})
.on('logout',function(user){
  console.log('${user.name()} logout')
})
.on('message',function(message){
  if(message.self()){
    return
  }

  if(message.type()!= bot.Message.Type.Text){
    return
  }

  const content = message.text()
  const contact = message.from()
  const room = message.room()

  if (room) {
    console.log('Message in Room:'+room)
  }
  console.log(content)
})
.start()
