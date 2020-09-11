const Discord = require("discord.js");


module.exports ={
      name: "sunztu",
      description: "Tells you who sunztu is",
      usage:"sunztu",
      category:"fun",
      aliases: [""],
      run: async (client,message,args) =>{
        message.channel.send(new Discord.MessageEmbed().setDescription("Sun Tzu was a Chinese general, military strategist, writer and philosopher who lived in the Eastern Zhou period of ancient China. Sun Tzu is traditionally credited as the author of The Art of War, an influential work of military strategy that has affected both Western and East Asian philosophy and military thinking.").setColor("RANDOM"))
      }
    }