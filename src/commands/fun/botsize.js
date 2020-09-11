const { MessageEmbed } = require('discord.js')
const os = require('os')
const ms = require("ms");
module.exports = {
    name: "bot-size",
    description: "says the bot size",
    usage:"bot-size",
    category:"info",
    aliases: ["botsize"],
    run: async (client, message, args) => {
        function formatDate(date) {
            return new Intl.DateTimeFormat('en-US').format(date)
        }
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Bot Stats')
            .setColor('#000000')
            .addFields(
                {
                    name: '🌐 Servers',
                    value: `Serving ${client.guilds.cache.size} servers.`,
                    inline: true
                },
                {
                    name: '📺 Channels',
                    value: `Serving ${client.channels.cache.size} channels.`,
                    inline: true
                },
                {
                    name: '👥 Server Users',
                    value: `Serving ${client.users.cache.size}`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: 'Join Date',
                    value: formatDate(client.user.createdAt),
                    inline: true
                },
                {
                    name: 'Server Info',
                    value: `Cores: ${os.cpus().length}`,
                    inline: true
                },
                {
                    name: "⌛ Uptime",
                    value: ` ${ms(os.uptime() * 1000, { long: true})}.`,
                  }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)
    }
}