const Discord = require("discord.js");


module.exports ={
      name: "sunztuinfo",
      description: "Get info on sunztu",
      usage:"sunztu",
      category:"fun",
      aliases: [""],
      run: async (client,message,args) =>{
        message.channel.send(new Discord.MessageEmbed().setDescription("Works written: The Art of War Profession: Philosopher, Author, Strategist Place of birth: Qi Died: 496 BC, Wu, Nationality: Chinese, Children: Sun Di, Sun Ming, Sun Chi").setColor("RANDOM"))
      }
    }