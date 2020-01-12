// Description
//   A simple quizz
//
// Dependencies:
//   "quizz": "0.0.8"
//
import { Robot } from 'hubot'
import { RocketChatBotAdapter } from 'hubot-rocketchat'
import { GameManager } from 'quizz'

module.exports = async function example(robot: Robot<RocketChatBotAdapter>) {

    robot.helpCommands().push("qstart - Start the quizz")
    robot.helpCommands().push("qstop - Stop the quizz")

    let quizz = null

    robot.brain.on('loaded', () => {
        robot.brain.set('qscores', {})
    })

    robot.respond(/qstart$/i, (res) => {
        if (quizz) {
            res.send("Es läuft bereits ein Quizz.")
            return
        }

        const qscores = robot.brain.get('qscores')
        const print = (txt) => { res.send(txt) }

        quizz = new GameManager(print, qscores)
        quizz.start()
    })

    robot.respond(/qstop$/i, (res) => {
        if (quizz) {
            quizz.stop()
            quizz = null
        } else {
            res.send("Es läuft kein Quizz das gestoppt werden kann.")
        }
    })

    robot.hear(/(.*)/i, (msg) => {
        if (quizz) {
            quizz.handleMessage(msg.match[1], msg.message.user.name)
        }
    })

}
