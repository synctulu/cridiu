const AuthDetails = require('./data/auth.json')
const Discord = require('discord.js');
const client = new Discord.Client();

//ready event is vital
client.on('ready', () => {
   console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
   const channel = member.guild.channels.cache.find(ch => ch.name == 'member-log');

   //do nothing if channel wasn't found on this server
   if (!channel) return;

   channel.send("Welcome to the server, ${member}");
});

client.on('message', msg => {
   if (msg.content === 'ping') {
      msg.reply('pong!');
   }
});

client.login(process.env.tokenbot);
