const { CommandInteraction, SlashCommandBuilder } = require("discord.js")
const clock = require("../clock.js")
module.exports = {
    data: new SlashCommandBuilder()
        .setName("run_timestep")
        .setDescription('Runs a single timestep.'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        
    }
}