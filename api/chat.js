const Channels = require('pusher')

const {
  APP_ID: appId,
  KEY: key,
  SECRET: secret,
  CLUSTER: cluster
} = process.env

const channels = new Channels({
  appId,
  key,
  secret,
  cluster
})

module.exports = (req, res) => {
  const payload = req.body
  channels.trigger('chat', 'message', payload, () => {
    res.send(payload);
    res.status(200).send("Message sent successfully");
  }).catch(
    () => {res.status(500).send("Server error");}
  )
}