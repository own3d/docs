# Message Protocol

This protocol is intended as a generic data format to store and transmit chat messages coming from different platforms
through our socket system.

## Namespace

At own3d we follow the `<client_id>.<platform>.<platform_id>[.<extension>]` namespace format.

- Example for own3d chatbot: `chatbot.<shard>`  
- Example for own3d user: `90a951d1-ea50-4fda-8c4d-275b81f7d219.own3d.1.chat`

The `.chat` extension is a public room for all users to read.

## Socket Connection

```typescript
// Select a random server
const server: AxiosResponse<string[]> = await axios.get('https://socket-hel1-1.own3d.dev/server-ids')
const serverId: string = server.data[0]
// Connect to the socket
const socket = io('https://socket-hel1-1.own3d.dev', {
    withCredentials: true, // Required for cookies
    extraHeaders: {
        Cookie: 'serverid=' + serverId, // Set the serverid cookie
    },
})

socket.on('connect', () => {
    // login as chatbot or user
})

socket.on("message", (data: TBD) => {
    // TODO handle chat message
});

socket.on("clear-chat", (data: TBD) => {
    // TODO handle delete message
});

socket.on("delete-message", (data: TBD) => {
    // TODO handle clear chat
});
```

## Message Reference

<!-- @formatter:off -->
```json
{
  "id": "9b1aef5e-b16a-4c7a-916e-309b7d581e67",
  "type": "message", // message oder announcement
  "timestamp": 1705400139136, // Y2K38 acknowledged
  "platform": "twitch", // twitch, youtube, etc.
  "user": {
    "platform_id": "12354",
    "username": "Sender",
    "avatar_url": "https://api.own3d.pro/v1/resolvers/avatars/{platform}/{platform_id}",
    "color": "#000000", // nullable
    "badges": [
      { "type": "moderator", "text": "Moderator", "id": "1234" },
      { "type": "subscriber", "text": "Subscriber", "id": "1234", "count": 1 },
      { "type": "custom", "text": "TwitchCon 2022", "id": "1234" }
    ]
  },
  "channel": {
    "id": "1", // own3d id
    "platform_id": "4321",
    "username": "OWN3D",
    "avatar_url": "https://api.own3d.pro/v1/resolvers/avatars/{platform}/{platform_id}"
  },
  "message": "Hello @World! KEKW! Kappa Cheer17",
  "fragments": [
    { "type": "text", "text": "Hello " },
    { "type": "mention", "text": "@World" },
    { "type": "text", "text": "! KEKW! " },
    { "type": "emote", "text": "ExtraLife", "data": { "platform": "twitch", "platform_id": "302426269", "emote_set_id": "0" } },
    { "type": "cheermote", "text": "Cheer17", "data": { "platform": "twitch", "platform_id": "cheer", "bits": 17, "tier": 1 } }
  ],
  "parent": {
    "id": "9b1aef5e-b16a-4c7a-916e-309b7d581e67",
    "message": "Hello World!" // nullable
  }, // nullable
  "attributes": {
    "edited": false,
    "accent": "#ffffff",
    "action": false,
    "highlight": false
  }
}
```
<!-- @formatter:on -->