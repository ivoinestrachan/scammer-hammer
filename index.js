const { Client, Intents } = require('discord.js');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Scammers', { type: 'WATCHING' })
});

client.on('message', (message) => {
  if (message.content.includes('discord.gg/')) {
      message.delete()
       .then(() => message.member.kick('User kicked for sending spam links.'))
       .then(message.channel.send('User has been kicked for sending spam links'))
  }
  if (message.content.includes('discordapp.com/')) {
      message.delete()
      .then(message.channel.send('User has been kicked for sending spam links'))
      .then(() => message.member.kick('User kicked for sending spam links.'))
      }
  if (message.content.includes('https:')) {
      message.delete()
       .then(() => message.member.kick('User kicked for sending spam links.'))
       .then(message.channel.send('User has been kicked for sending spam links'))
      }
  if (message.content.includes('http:')) {
      message.delete()
       .then(() => message.member.kick('User kicked for sending spam links.'))
       .then(message.channel.send('User has been kicked for sending spam links'))
      }
  if (message.content.includes('www.')) {
      message.delete()
       .then(() => message.member.kick('User kicked for sending spam links.'))
       .then(message.channel.send('User has been kicked for sending spam links'))
      }
})




client.login('token');