module.exports = (client, message) => {
    if(message.author.bot || !message.guild || !message.content.startsWith(client.config.prefix)) return;
    const [ cmd, ...args ] = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args);
};