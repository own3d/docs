# Examples

## Trigger Alerts

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

| Template | Description |
| --- | --- |
| `follow` | Someone follows your channel |
| `gift-subscribe` | Someone gifted a subscription to your channel |
| `subscribe` | Someone subscribes to your channel |
| `cheer` | Someone cheers on your channel |
| `raid` | Someone raids your channel |
| `donation` | Someone donates to your channel |
| `host` | Someone hosts your channel |

### Type 2: Trigger alerts using custom templates

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

## Socket API

The Socket API is a simple way to receive realtime updates from our infrastructure. It is used within our browser source
to display alerts, for example.

```javascript
import {io} from 'socket.io-client';

// Connect to the socket
const socket = io('https://socket-hel1-1.own3d.dev', {
    withCredentials: true, // Required for cookies
});

// Join a room for the current user
socket.on('connect', () => {
    console.log(`Connected to socket server, id: ${socket.id}`);
    socket.emit('room', '90a951d1-ea50-4fda-8c4d-275b81f7d219.twitch.106415581');
});

// Listen for events
socket.on('notifysub', (data) => {
    console.log('Got a new event from the notification subscription service:', data);
});
```