# Extension Helper <Badge text="closed beta" type="warning"/>

## Terminology

- **Extension**: A piece of software that can be installed on OWN3D to add functionality.
- **ext-types**: A set of typescript definitions for the extension helper.
- **Extension Helper**: A piece of software run within the extension iframe that provides a set of functions communicate
  with the supervisor.
- **Extension Supervisor**: A piece of software acting as a bridge between the extension and the OWN3D platform.

## How this helper works

The extension helper is a piece of software that runs within the extension iframe. It provides a set of functions to
communicate with the extension supervisor. The supervisor is within the OWN3D platform and acts as a bridge between the
extension and the platform.

## Use the extension helper within your extension

1. Install the package for typed definitions

```bash
yarn add own3d/ext-types
```

2. Add the extension helper script to your extension

> This script must be added as the first script before any other scripts to pass the review.

```html

<script src="https://extension-files.ext-own3d.tv/latest/own3d-ext.js"></script>
```

3. Use the extension helper

```vue

<script>
  console.log(`Running ${OWN3D.ext.version} on ${OWN3D.ext.environment}`)

  OWN3D.ext.onAuthorized((data) => {
    console.log('onAuthorized', data)
  })

  OWN3D.ext.onContext((context, changed) => {
    for (const key of changed) {
      console.log(`Context changed ${context[key]}`)
    }
  })

  OWN3D.ext.socket.on('notifysub', (data) => {
    console.log('Got notify-sub event', data)
  })

  OWN3D.ext.socket.on('browser-source-updated', (data) => {
    console.log('Got browser-source-updated event', data)
  })
</script>
```

## API

### `OWN3D.ext`

#### `OWN3D.ext.version`

Returns the version of the extension helper.

#### `OWN3D.ext.environment`

Returns the environment of the extension helper. Possible values are `production` and `development`.

#### `OWN3D.ext.onAuthorized(callback)`

Registers a callback that is called when the extension is authorized.

##### Parameters

- `callback` - A function that is called when the extension is authorized.

The callback receives an object with the following properties:

| Parameter      | Type     | Description                                                                                                        |
|----------------|----------|--------------------------------------------------------------------------------------------------------------------|
| `client_id`    | `string` | The client id of the extension.                                                                                    | 
| `client_token` | `string` | JWT token that can be used for OWN3D API requests. [Usage of Extension Client Tokens](tokens-and-client-tokens.md) |
| `channel_id`   | `object` | The user id of the channel where the extension is installed.                                                       |
| `user_id`      | `object` | The user id of the user who interacts with the extension.                                                          |
| `scopes`       | `object` | The scopes of the user who interacts with the extension.                                                           |
| `token`        | `object` | JWT token that should be used for any Extension Backend request.                                                   |

##### Example

```js
OWN3D.ext.onAuthorized((data) => {
    console.log('onAuthorized', data)
})
```

#### `OWN3D.ext.onContext(callback)`

Registers a callback that is called when the context is updated.

##### Parameters

- `callback` - A function that is called when the context is updated.

##### Example

```js
OWN3D.ext.onContext((context, changed) => {
    for (const key of changed) {
        console.log(`Context changed ${context[key]}`)
    }
})
```

### `OWN3D.ext.socket`

The socket module is an event emitter. It provides a set of functions, so you can listen to events from our event bus.

#### `OWN3D.ext.socket.on(event, callback)`

##### Example

```js
OWN3D.ext.socket.on('notifysub', (data) => {
    console.log('Got notify-sub event', data)
})
```

### `OWN3D.ext.ipc`

The ipc module is an event emitter. It provides a set of functions, so you can send messages from the extension to the
supervisor and vice versa.

**IPC Channels**

In extensions, processes communicate by passing messages through developer-defined "channels" with the
ipc module. These channels are **arbitrary** (you can name them whatever you want, but we recommend using something that
describes the channel's purpose) and **bidirectional** (you can use the same channel name for both sides).

**Understanding context-isolated processes**

The extension helper runs in a context-isolated process. This means that the extension helper is running in a separate
process than the supervisor. The supervisor is running in the OWN3D platform. The extension helper and the supervisor
communicate with each other via the ipc module.

- Extensions cannot directly access the DOM of the OWN3D platform.
- Extensions cannot access cookies or local storage of the OWN3D platform.
- Extensions cannot access the user session of the OWN3D platform without the user's consent.

#### `OWN3D.ext.ipc.send(channel, payload)`

Sends a message to the supervisor.

##### Parameters

- `channel` - The channel to send the message to.
- `payload` - The payload to send.

##### Example

```js
OWN3D.ext.ipc.send('test', { foo: 'bar' })
```

#### `OWN3D.ext.ipc.on(channel, listener)`

Registers a listener for a channel.

##### Parameters

- `channel` - The channel to listen to.
- `listener` - A function that is called when a message is received.

##### Example

```js
OWN3D.ext.ipc.on('test', (payload) => {
    console.log('Got test message', payload)
})
```
