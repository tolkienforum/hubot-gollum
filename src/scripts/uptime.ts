import * as moment from 'moment'
import * as momentDurationFormatSetup from 'moment-duration-format'
import { Robot } from 'hubot'
import { RocketChatBotAdapter } from 'hubot-rocketchat'

momentDurationFormatSetup(moment)

function customTemplate() {
    return this.duration.asSeconds() >= 86400 ? "w [weeks], d [days]" : "hh:mm:ss"
}

module.exports = async function uptime(robot: Robot<RocketChatBotAdapter>) {

    const bootTime = moment()

    return robot.respond(/uptime/igm, (res: any) => {

        // typecast to use the .format lib declared above without a type warning... pretty janky.
        const up = (moment.duration(moment().diff(bootTime)) as any).format(customTemplate, {trim: false})

        res.send(`I have been up for ${up}, since ${bootTime.format("MMMM Do, HH:mm:ss")}`)
    })

}
