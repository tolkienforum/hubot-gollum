import { Robot } from 'hubot'
import { RocketChatBotAdapter } from 'hubot-rocketchat'

module.exports = async function lion(robot: Robot<RocketChatBotAdapter>) {

    robot.respond(/lion me/i, (res) => {
        res.send("Jupp! Löwe kommt sofort!")

        const dt = new Date()
        const url = "https://www.tolkienforum.de/stuff/botme/lions.php?t=" + dt.getTime()
        res.send(url)
    })

}
