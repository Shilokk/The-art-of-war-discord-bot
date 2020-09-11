const Discord = require("discord.js");
const prefix = "sz!"


module.exports ={
  name: "help",
  description: "Displays all the commands",
  usage:"help",
  category:"info",
  aliases: ["h"],
  run: async (client,message,args) =>{
    //We have to set a argument for the help command beacuse its going to have a seperate argument.
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    //Custom Help command by using the second argument.

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        const embed = new Discord.MessageEmbed()
        .setColor(0x1d1d1d)
        .setTimestamp(new Date())
        .setDescription(`Type \`${prefix}help [command]\` to get more specific information about a command.`)
        .addField("Here are all the commands", "```help (this command) | botsize | fakequote | ide | info | quote | sunztuimage | sunztu | sunztuinfo | theartofwar```")
        .addField("```Here are the commands currently not working", "All commands are currently working :)```")
            .addFields({ name: 'Prefix', value: '```sz!```', inline: true})
            .setColor('#00FFF3')
            
        message.channel.send(embed);
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
    if(helpArgs[0]) {
      const cmd = client.commands.get(helpArgs[0])

      if(cmd) {      
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${cmd.name} Command`)
        .setDescription(`
        - **Command's Description** __${cmd.description || "There is no Description for this command."}__
        - **Command's Usage:** __${cmd.usage || "No Usage"}__
        - **Command's Category:** __${cmd.category || "Category"}__
        - **Command's Aliases:** __${cmd.aliases || "No Aliases"}__
        `)
        .setColor('#2EFF00')

    message.channel.send(embed);
      }
    }
  }
}




  