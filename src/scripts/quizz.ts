// Description
//   A simple quizz
//
// Dependencies:
//   "quizz": "0.0.8"
//
import { Robot } from 'hubot'
import { RocketChatBotAdapter } from 'hubot-rocketchat'
import { GameManager } from 'quizz'

module.exports = async function quizz(robot: Robot<RocketChatBotAdapter>) {

    robot.helpCommands().push("qstart - Start the quizz")
    robot.helpCommands().push("qstop - Stop the quizz")

    let quiz: GameManager = null

    robot.brain.on('loaded', () => {
        robot.brain.set('qscores', {})
    })

    robot.respond(/qstart$/i, (res) => {
        if (quiz) {
            res.send("Es läuft bereits ein Quizz.")
            return
        }

        const qscores = robot.brain.get('qscores')
        const print = (txt) => { res.send(txt) }

        quiz = new GameManager(print, qscores)
        quiz.start()
    })

    robot.respond(/qstop$/i, (res) => {
        if (quiz) {
            quiz.stop()
            quiz = null
        } else {
            res.send("Es läuft kein Quizz das gestoppt werden kann.")
        }
    })

    robot.hear(/(.*)/i, (msg) => {
        if (quiz) {
            quiz.handleMessage(msg.match[1], msg.message.user.name)
        }
    })

}
