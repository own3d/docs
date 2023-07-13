# Examples

## Trigger Alerts <Badge text="beta" type="warning"/>

Right now you can trigger alerts by two ways:

- **Using templates**: You can use existing templates from the user to trigger alerts.
- **Using custom templates**: You can create your own templates to trigger alerts.

### Type 1: Trigger alerts using existing templates

```http request
POST https://api.own3d.pro/v1/alerts
Authorization: Bearer {access_token}
Content-Type: application/json
Accept: application/json

{
    "template": "follow",
    "data": {
        "name": "GhostZero"
    }
}
```

#### Supported Templates

| Template         | Description                                   |
|------------------|-----------------------------------------------|
| `follow`         | Someone follows your channel                  |
| `gift-subscribe` | Someone gifted a subscription to your channel |
| `subscribe`      | Someone subscribes to your channel            |
| `cheer`          | Someone cheers on your channel                |
| `raid`           | Someone raids your channel                    |
| `donation`       | Someone donates to your channel               |

### Type 2: Trigger alerts using custom templates <Badge text="beta" type="warning"/>

```http request
POST https://api.own3d.pro/v1/alerts
Authorization: Bearer {access_token}
Content-Type: application/json
Accept: application/json

{
    "template": {
        "image_href": "https://media.giphy.com/media/pzmbXFDiRbEEk1vCtP/giphy-downsized.gif",
        "sound_href": "",
        "title": "Custom Alert",
        "subtitle": "{{message}}",
        "display_time": 10000,
        "layout": "banner",
        "volume": 0,
        "font_size": 1.4,
        "font_family": "Montserrat",
        "font_weight": 600,
        "font_color": "#ffffff",
        "font_highlight_color": "#8205b3",
        "font_animation": "wiggle",
        "font_delay": 0,
        "animation_alert_enter": "fade-in",
        "animation_alert_leave": "fade-out"
    },
    "data": {
        "message": "Hello World!"
    }
}
```

### Type 3: Trigger alerts using custom templates and custom data <Badge text="closed beta" type="warning"/>

In our latest alert engine update, we added the ability to use custom `fields` in your templates. Which allow you to
create
more dynamic alerts and animations. The `fields` property is an array of key-value pairs, which you can use in your
HTML, CSS and JS templates using the `{key}` syntax.

Custom Fields (`fields`) are mostly used for additional settings within your theme to change the appearance of your
alert. For example, you can create a custom field called `font_color` and use it in your CSS to change the color of your
alert.

> **Coming Soon:**
> Custom Fields can also be edited by the streamer in the OWN3D dashboard. In order to use custom fields in the
> dashboard, using form inputs. Therefore, the field must be added to the `fields` array of the alert configs too.

```http request
POST https://api.own3d.pro/v1/alerts
Authorization: Bearer {access_token}
Content-Type: application/json
Accept: application/json

{
    "template": {
        "user_defaults": true,
        "html": "<div>{key}</div>",
        "css": "/** CSS */",
        "js": "/** JS */",
        "fields": {
            "key": "{{message}}"
        }
    },
    "data": {
        "message": "Hello World!"
    }
}
```

## Socket API

The Socket API is a simple way to receive realtime updates from our infrastructure. It is used within our browser source
to display alerts, for example.

### Use Sockets with Socket.IO

```javascript
import { io } from 'socket.io-client'

// Connect to the socket
const socket = io('https://socket-hel1-1.own3d.dev', {
    withCredentials: true, // Required for cookies
})

// Join a room for the current user
socket.on('connect', () => {
    console.log(`Connected to socket server, id: ${socket.id}`)
    socket.emit('room', '90a951d1-ea50-4fda-8c4d-275b81f7d219.twitch.106415581')
})

// Listen for events
socket.on('notifysub', (data) => {
    console.log('Got a new event from the notification subscription service:', data)
})
```

::: warning

The socket server uses sticky sessions to distribute the load across multiple servers. If you're using NodeJS, you must
use the `serverid` cookie to connect to the correct server, otherwise you will encounter connection issues.

```javascript
import { io } from 'socket.io-client'

// List of available servers
const servers = [
    // The list of available servers is not public. 
    // Please contact us if you need access to the list of available servers.
]

// Select a random server
const server = servers[Math.floor(Math.random() * servers.length)]

// Connect to the socket
const socket = io('https://socket-hel1-1.own3d.dev', {
    withCredentials: true, // Required for cookies
    extraHeaders: {
        Cookie: 'serverid=' + server, // Set the serverid cookie
    },
})

// continue as usual
```

:::

### Use Sockets with OWN3D Extension Helper <Badge text="beta" type="warning"/>

> This feature using the [OWN3D Extension Helper](extensions/extension-helper.md).

Using the OWN3D Extension Helper, you can easily connect to the socket server and listen for events.

```javascript
OWN3D.ext.socket.on('notifysub', (data) => {
    console.log('Got notify-sub event', data)
})

OWN3D.ext.socket.on('browser-source-updated', (data) => {
    console.log('Got browser-source-updated event', data)
})
```