/**
 * @fileoverview Entry point for the Discord bot application.
 * @module src/index.js
 * @author Drexel YDSA <drexelydsa@proton.me>
 * @version 1.0.0
 * @license MIT
 * 
 * This is a Discord bot that is meant to manage the Drexel YDSA Discord server. Solidarity forever!
 */
import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';

// create client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

// login to Discord
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// handle messages
client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // ignore bot messages
});