# Extension SDK

The new OWN3D Extension SDK is a collection of tools and utilities to help you build extensions for the OWN3D platform.
It is designed to be a lightweight and easy-to-use package that provides a simple interface to interact with the OWN3D
platform.

## SDK versions: namespaced and modular

OWN3D provides two API versions for extensions:

- **Javascript - Namespaced**: This version aims to be a Twitch Extension like experience. It is a single script that
  provides the bare minimum to get started with the OWN3D Extension platform. Because the namespaced APi does not
  benefit from ongoing new feature support, most new apps should instead use the modular API.
- **Javascript - Modular**: This version is a collection of modules that provide a more flexible and feature-rich
  experience. It is the recommended version for new apps.

## Installation

If your starting a new project, we recommend using the **modular version** of the SDK. To install the modular SDK, run:

```bash
npm install @own3d/sdk
```

After installing the SDK, you can import the modules you need in your project. Keep in mind that your code will be
organized in a more modular way, and you will have to import the modules you need explicitly.

```js
import { initializeExtension } from '@own3d/sdk/extension'
import { useAuth } from '@own3d/sdk/auth'

const extension = initializeExtension()

const { onAuthorized } = useAuth(extension)

onAuthorized(async (user) => {
    console.log(user)
})
```

## Modules

### Auth

The Auth module provides methods to authenticate the extension with the OWN3D platform. It allows you to get the current
authenticated user and listen for changes to the authentication state.

```js
import { initializeExtension } from '@own3d/sdk/extension'
import { useAuth } from '@own3d/sdk/auth'

const extension = initializeExtension()

const { onAuthorized } = useAuth(extension)

onAuthorized(async (user) => {
    console.log(user)
})
```

### Context

The Context module provides methods to get the current context of the extension. The context is a set of key-value pairs
that describe the current state of the extension.

```js
import { initializeExtension } from '@own3d/sdk/extension'
import { useContext } from '@own3d/sdk/context'

const extension = initializeExtension()

const { onContext } = useContext(extension)

onContext((context, changed) => {
    console.log(context, changed)
})
```

### Remote Config

The Remote Config module provides methods to get and set configuration values without providing a backend service. Make
sure to check out our [Remote Config documentation](./remote-config.md) for more information.

```js
import { initializeExtension } from '@own3d/sdk/extension'
import { useRemoteConfig } from '@own3d/sdk/remote-config'

const extension = initializeExtension()

const { getSegments, setSegment } = useRemoteConfig(extension)

const segments = await getSegments()
console.log(segments)

await setSegment('creator', { key: 'value' })
```

### Socket

The Socket module provides methods to connect to our event bus, which is a real-time messaging system that allows you to
receive events from the OWN3D platform. For example, you can listen for events like new subscriptions or donations via
our [NotifySub Event Types](../notify-sub/event-types.md) or custom events. You can also use the Socket module to
receive events from the extension itself, like Remote Config changes.

::: tip
While we technically use our event bus as our transit for our PubSub system, we recommend using the PubSub module
for this purpose, as it provides a more straightforward interface.
:::

```js
import { initializeExtension } from '@own3d/sdk/extension'
import { useSocket } from '@own3d/sdk/socket'

const extension = initializeExtension()

const { on } = useSocket(extension)

on('notifysub', (data) => {
    console.log(data)
})
```

### PubSub

The PubSub module provides methods to publish and subscribe to messages on a PubSub channel. PubSub channels are used to
send messages between different parts of the extension, like communicating between the configuration page and the scene
builder widget. You can also use PubSub channels to send messages between different extensions.

**Rate Limits**: The PubSub module has a rate limit of 30 messages per minute per combination of client ID and channel
ID.

::: warning
Avoid using our internal IPC module for communication between different parts of your extension. Instead, use the PubSub
module. IPC is only intended for communication between the extension and the OWN3D platform.
:::

```js
import { initializeExtension } from '@own3d/sdk/extension'
import { usePubSub } from '@own3d/sdk/pubsub'

const extension = initializeExtension()

const { publish, subscribe } = usePubSub(extension)

subscribe('foo', (data) => {
    console.log(data)
})

await publish('foo', {
    bar: 'baz',
})
```


