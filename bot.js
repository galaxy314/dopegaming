const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setPresence({ game: { name: 'Dope Gaming', type: 2}, status: 'online'}).then(console.log).catch(console.error);
    client.user.setStatus('online').then(console.log).catch(console.error);
    console.log('I am ready!');
});

client.on('message', message => {
  if (message.author.bot) return;
  
  if(message.content.ToLowerCase() == 'dope'){
      message.channel.send('gaming');
  }
});

client.login(process.env.BOT_TOKEN);
