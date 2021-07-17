const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = process.env.PREFIX;
const { DiscordTogether } = require('discord-together');
dt = new DiscordTogether(bot);

bot.on("ready", function() {
    bot.user.setActivity(`Hi, Im Discord Together bot`);
    console.log(`${bot.user.username} is Ready`);
});

bot.on('message', async message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    if (message.content === PREFIX + "activity") {
        message.channel.send('**Activities:** youtube, poker, betrayal, fishing, chess');
    };
    if (message.content === PREFIX + "activity youtube") {
        if(message.member.voice.channel) {
            dt.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
    if (message.content === PREFIX + "activity poker") {
        if(message.member.voice.channel) {
            dt.createTogetherCode(message.member.voice.channelID, 'poker').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
    if (message.content === PREFIX + "activity betrayal") {
        if(message.member.voice.channel) {
            dt.createTogetherCode(message.member.voice.channelID, 'betrayal').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
    if (message.content === PREFIX + "activity fishing") {
        if(message.member.voice.channel) {
            dt.createTogetherCode(message.member.voice.channelID, 'fishing').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
    if (message.content === PREFIX + "activity chess") {
        if(message.member.voice.channel) {
            dt.createTogetherCode(message.member.voice.channelID, 'chess').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
});

client.login(process.env.TOKEN);
