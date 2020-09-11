const quote = require('../../data/quote.json')

module.exports ={
    name: "quote",
    description: "Sens Sun Tzu's wise words on discord",
    usage:"quote",
    category:"fun",
    aliases: [""],
    run: async (client,message,args) =>{
        args = args.join(" ");
        try{
            message.channel.send(`${quote[Math.floor(Math.random() * quote.length)]}`);
            }
            catch(error){
            console.log(error)
            }
    }
}
    
