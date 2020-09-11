const fakequote = require('../../data/fakequote.json')

module.exports ={
    name: "fakequote",
    description: "Sends a fake quote from sun ztu",
    usage:"fakequote",
    category:"fun",
    aliases: [""],
    run: async (client,message,args) =>{
        args = args.join(" ");
        try{
            message.channel.send(`${fakequote[Math.floor(Math.random() * fakequote.length)]}`);
            }
            catch(error){
            console.log(error)
            }
    }
}
    
