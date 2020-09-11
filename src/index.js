const { Client, Collection } = require('discord.js');
const client = new Client();
client.config = require('./data/config.json');



["aliases","commands"].map(x => client[x] = new Collection());
['command','events'].map(x => require(`./handlers/${x}`)(client));
client.on('ready', () => {
    function randomStatus() {
        let status = [`Im in ${client.guilds.cache.size} guilds!`, `I am server ${client.users.cache.size}`, `listening to thw wise words of Sun Ztu`] // You can change it whatever you want.
        let rstatus = Math.floor(Math.random() * status.length);
        
        // client.user.setActivity(status[rstatus], {type: "WATCHING"}); 
        // You can change the "WATCHING" into STREAMING, LISTENING, and PLAYING.
        // Example: streaming
        
        client.user.setActivity(status[rstatus], {type: "STREAMING", url: "https://www.twitch.tv/chilledcow"});
      }; setInterval(randomStatus, 30000) // Time in ms. 30000ms = 30 seconds. Min: 20 seconds, to avoid ratelimit.
    console.log(`Hi, ${client.user.username} is now online!`);
});

client.login(client.config.token);