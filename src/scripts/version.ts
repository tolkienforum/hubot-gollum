// Description:
//   Get version info for debugging in Rocket.Chat
//
// Dependencies:
//   hubot-rocketchat
//
// Commands:
//   bot rc version - < Tells you the Hubot, Driver and Rocket.Chat versions >
//
import { Robot } from 'hubot'
import { RocketChatBotAdapter } from 'hubot-rocketchat'

module.exports = async function version(robot: Robot<RocketChatBotAdapter>) {

  robot.helpCommands().push("rc version - Tells you the Hubot, Driver and Rocket.Chat versions")

  robot.respond(/\brc(-|\s)version\b/i, (res) => {
    const hubotPackage = require.main.require('hubot/package.json')
    const adapterPackage = require.main.require('hubot-rocketchat/package.json')
    const sdkPackage = require.main.require('@rocket.chat/sdk/package.json')
    // const gollumPackage = require.main.require('./package.json')

    robot.adapter.callMethod('getServerInfo').then((result) => {
      res.send(
        `You're on Rocket.Chat ${result.version}, using Hubot ${hubotPackage.version}.`,
        `Adapter version ${adapterPackage.version}, using version ${sdkPackage.version} of the SDK.`,
        // `Gollum version ${gollumPackage.version}`,
      )
    })
  })

}
