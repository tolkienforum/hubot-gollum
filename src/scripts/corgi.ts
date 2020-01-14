import { Robot } from 'hubot'
import { RocketChatBotAdapter } from 'hubot-rocketchat'
// import * as httpm from 'typed-rest-client/HttpClient'
import * as rm from 'typed-rest-client/RestClient'

// const httpc: httpm.HttpClient = new httpm.HttpClient('vsts-node-api')
const restc: rm.RestClient = new rm.RestClient('hubot-gollum')

interface CorgiResponse {
    corgi: string
}

async function readCorgiUrl() {
    const restRes = await restc.get<CorgiResponse>("http://corginator.herokuapp.com/random")
    return restRes.result.corgi

//    const body = await (await httpc.get("http://corginator.herokuapp.com/random")).readBody()
//    const corgiResp: CorgiResponse = JSON.parse(body)
//    return corgiResp.corgi
}

module.exports = async function corgi(robot: Robot<RocketChatBotAdapter>) {

    robot.respond(/corgi me/i, (res) => {
        readCorgiUrl().then((url) => {
            res.send(url)
        })
    })

}
