require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

const DALLAS_GIF_URL = 'https://tenor.com/oFGNSsBAV1b.gif';

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.content.toLowerCase().includes('dallas')) {
    message.reply(DALLAS_GIF_URL);
  }
});

client.login(process.env.TOKEN);
