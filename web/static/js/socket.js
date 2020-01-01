import {
  Socket
} from "phoenix"

let socket = new Socket("/socket", {
  params: {
    token: window.userToken
  }
})
socket.connect()

// Now that you are connected, you can join channels with a topic:
// const createSocket = (topicId) => {
let channel = socket.channel(`comments:${window.topicId}`, {})
channel.join()
  .receive("ok", resp => {
    console.log("Joined successfully", resp)
  })
  .receive("error", resp => {
    console.log("Unable to join", resp)
  })

document.querySelector('button').addEventListener('click', () => {
  const content = document.querySelector('textarea').value
  console.log(content)
  channel.push('comment:add', {
    content
  })
})
// }


// window.createSocket = createSocket
export default socket