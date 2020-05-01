// Initialize Channels client
let channels = new Pusher('65901c15ec569489ac03', {
  cluster: 'us2'
})

// Note: The app key and cluster are exposed on the client and not 
// sensitive. If app secret or app ID are needed, these are exposed
// as `now` environment variables e.g. '@[APP_NAME]-app-id'

// Subscribe to the appropriate channel
let channel = channels.subscribe('channel-name')

// Bind a callback function to an event within the subscribed channel
channel.bind('event-name', function(data) {
  // Do what you wish with the data from the event
})

async function pushData(data) {
  const res = await fetch('/api/channels-event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if (!res.ok) {
    console.error('failed to push data')
  }
}

module.exports = { pushData }