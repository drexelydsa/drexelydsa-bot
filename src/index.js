/**
 * @fileoverview Entry point for the Discord bot application.
 * @module src/index.js
 * @author Drexel YDSA <drexelydsa@proton.me>
 * @version 1.0.0
 * @license MIT
 * 
 * This is a Discord bot that is meant to manage the Drexel YDSA Discord server. Solidarity forever!
 */
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');