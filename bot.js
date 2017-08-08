const Discord = require("discord.js")
const client = new Dicscord.Client()

client.on('ready'.()=>{
    console.log ('Bot logged in as ${client.user.tag}!');
    
)};

client.on('message', msg=> {
  if(msg.content === 'ping') {
    msg.reply ('Pong!');
  }
})

client.login('')

