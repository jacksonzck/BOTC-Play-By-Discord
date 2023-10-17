const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const fs = require('fs')
module.exports = {
    /**
     * 
     * @param {*} guildId 
     * @returns 
     */
    get_guild_json: function (guildId) {
      // whatever
      file = fs.readFileSync("/data/" + guildId + ".json")
      JSON.parse()
      return guild_json
    },
    run_timestep: function () {
      // whatever
    }
  };
