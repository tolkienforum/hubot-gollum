import { Robot } from 'hubot'
import { RocketChatBotAdapter } from 'hubot-rocketchat'
import * as harteier from '../data/harteier.json'
import * as weicheier from '../data/weicheier.json'
import * as phrases from '../data/phrases.json'

module.exports = async function moxfun(robot: Robot<RocketChatBotAdapter>) {

    robot.hear(/!hartei (.*)$/i, (res) => {
        const he = res.random(harteier)
        const from = res.message.user.name
        const to = res.match[1]
        res.send(`@${from} nennt @${to} ${he}`)
    })

    robot.hear(/!weichei (.*)$/i, (res) => {
        const we = res.random(weicheier)
        const from = res.message.user.name
        const to = res.match[1]
        res.send(`@${from} nennt @${to} ${we}`)
    })

    robot.hear(/!phrase$/i, (res) => {
        const phr = res.random(phrases)
        res.send(phr)
    })

}
