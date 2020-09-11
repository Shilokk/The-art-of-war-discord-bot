const Discord = require("discord.js");


module.exports ={
      name: "theartofwar",
      description: "Find places where you can find the book The art of war",
      usage:"theartofwar",
      category:"fun",
      aliases: [""],
      run: async (client,message,args) =>{
        message.channel.send(new Discord.MessageEmbed().setDescription("You can find the art of war as an audio book [here](https://www.audible.com/pd/The-Art-of-War-Audiobook/B08BWYDDGM?source_code=AUDORWS0718179KY7) and you can find the paper back [here](https://www.amazon.com/gp/product/0804830800?ref=ppx_pt2_dt_b_prod_image) The Art of War is an ancient Chinese military treatise dating from the Late Spring and Autumn Period. The work, which is attributed to the ancient Chinese military strategist Sun Tzu, is composed of 13 chapters. Each one is devoted to an aspect of warfare and how it applies to military strategy and tactics.").setColor("RANDOM"))
      }
    }