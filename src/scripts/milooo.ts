import { Robot } from 'hubot'
import { RocketChatBotAdapter } from 'hubot-rocketchat'

module.exports = async function milooo(robot: Robot<RocketChatBotAdapter>) {

    robot.respond(/milooo me/i, (res) => {
        res.send("Miloooo!!!")

        const dt = new Date()
        const url = "https://www.tolkienforum.de/stuff/botme/milooos.php?t=" + dt.getTime()
        res.send(url)
    })

}
