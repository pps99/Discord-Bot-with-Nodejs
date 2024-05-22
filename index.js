const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const TOKEN = '';// Put your own token 

client.on('messageCreate',(message) => {
    if(message.author.bot) return;
    message.reply({
        content: 'Hi From Bot'
    });
});

client.on('interactionCreate',(interaction) =>{
    console.log(interaction);
    interaction.reply('Pong');
});

client.login(TOKEN);
