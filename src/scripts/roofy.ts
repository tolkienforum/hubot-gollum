import { Robot } from 'hubot'
import { RocketChatBotAdapter } from 'hubot-rocketchat'

module.exports = async function roofy(robot: Robot<RocketChatBotAdapter>) {

    robot.respond(/roofy me/i, (res) => {
        const dt = new Date()
        const url = "https://www.tolkienforum.de/stuff/botme/roofys.php?t=" + dt.getTime()
        res.send(url)
    })

}
