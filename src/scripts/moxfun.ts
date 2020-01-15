import {Robot} from 'hubot'
import {RocketChatBotAdapter} from 'hubot-rocketchat'
import * as harteier from '../data/harteier.json'
import * as weicheier from '../data/weicheier.json'
import * as phrases from '../data/phrases.json'

function removeAtSignFromUsername(username: string): string {
    return username.replace("@", "")
}

module.exports = async function moxfun(robot: Robot<RocketChatBotAdapter>) {

    robot.helpCommands().push("!hartei 'Benutzer' - tätuliert 'Benutzer' mit einem Spruch der Macht.")
    robot.helpCommands().push("!weichei 'Benutzer' - tätuliert 'Benutzer' mit einem Spruch der Schwäche.")
    robot.helpCommands().push("!phrase - Ein zufälliger Satz zum nachdenken.")

    robot.hear(/!hartei (.*)$/i, (res) => {
        const he = res.random(harteier)
        const from = res.message.user.name
        const to = removeAtSignFromUsername(res.match[1])
        res.send(`@${from} nennt @${to} ${he}`)
    })

    robot.hear(/!weichei (.*)$/i, (res) => {
        const we = res.random(weicheier)
        const from = res.message.user.name
        const to = removeAtSignFromUsername(res.match[1])
        res.send(`@${from} nennt @${to} ${we}`)
    })

    robot.hear(/!phrase$/i, (res) => {
        const phr = res.random(phrases)
        res.send(phr)
    })

}
