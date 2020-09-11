const Discord = require("discord.js");

module.exports ={
    name: "info",
    description: "Provides some bot info",
    usage:"info",
    category:"Utility",
    aliases: [""],
    run: async (client,message,args) =>{
        var time = Date.now();

        const embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("Bot Info")
            .addField("Bot Author", "(Shilo K. [Shilo K.#5541])", true)
            .addField(`Discord.js Version`, `v${Discord.version}`, true)
            .addField(`Node Version`, `${process.version}`, true)
            .addField(`Bot Version`, "v1")
            .setFooter(`Time taken: ${Date.now() - time}ms`);
            await message.channel.send({ embed });
    
    }
}