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
organized in a more modular way, and you will have to import the modules explicitly.

### For General JavaScript Applications

::: warning
Avoid calling `initializeExtension()` multiple times in your application. Instead, initialize the extension once and
pass it around as needed. This approach ensures that the extension is correctly set up and avoids potential issues.
:::

```js
import { initializeExtension } from '@own3d/sdk/extension'
import { useAuth } from '@own3d/sdk/auth'

const extension = initializeExtension()

const { onAuthorized } = useAuth(extension)

onAuthorized(async (user) => {
    console.log(user)
})
```

### For Vue Applications

> This feature is available from version 0.0.30 onwards.

If you're using Vue, we provide a dedicated Vue plugin that makes integration seamless. Follow these steps:

**Step 1: Set Up the Vue Plugin**

```js
import './style.css'
import { createApp } from 'vue'
import { createExtension } from '@own3d/sdk/vue'
import App from './App.vue'

const extension = createExtension()
const app = createApp(App)

app.use(extension)
app.mount('#app')
```

::: warning
Note: Avoid calling `initializeExtension()` directly in Vue components. Use `createExtension()` during app bootstrap
instead.
::::

**Step 2: Use the SDK in Vue Components**

<!-- @formatter:off -->
```html
<script setup lang="ts">
import { inject } from 'vue'
import { useAuth } from '@own3d/sdk/auth'

const extension = inject('extension')
const {onAuthorized} = useAuth(extension)

onAuthorized((user) => {
  console.log(user)
})
</script>
```
<!-- @formatter:on -->

#### Optional: Creating a Pinia Store for SDK State

We recommend setting up a [Pinia](https://pinia.vuejs.org/getting-started.html) store to manage SDK state such as user
and context. This approach makes it easier to access these states reactively across your application. The following
example demonstrates how to set up a Pinia store for the extension state:

**Step 1: Create an Extension Store:**

```typescript
import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { inject, ref } from 'vue'
import type { Authorized, Context } from '@own3d/sdk/types'
import { useContext } from '@own3d/sdk/context'
import { useAuth } from '@own3d/sdk/auth'

export const useExtensionStore = defineStore('extension', () => {
  const user: Ref<Authorized | null> = ref(null)
  const context: Ref<Context | null> = ref(null)

  const extension = inject('extension')
  const {onContext} = useContext(extension)
  const {onAuthorized} = useAuth(extension)

  onContext((_context: Partial<Context>, changed: ReadonlyArray<keyof Context>) => {
    for (const key of changed) {
      context.value = {...context.value, [key]: _context[key]}
    }
  }, {immediate: true})

  onAuthorized((_user: Authorized) => {
    user.value = _user
  })

  return {
    user,
    context,
  }
})
```

**Step 2: Using the Store in a Component:**

<!-- @formatter:off -->
```html
<script setup lang="ts">
import { useExtensionStore } from './extension.ts'
import { storeToRefs } from 'pinia'

const extensionStore = useExtensionStore()
const { user, context } = storeToRefs(extensionStore)
</script>

<template>
  <div>
    User: {{ user }}
    Context: {{ context }}
  </div>
</template>
```
<!-- @formatter:on -->

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

### Notifications

The Notifications module provides API methods to send notifications to the user. Notifications can have different types such as `info`, `success`, `warning`, or `error`.

```typescript
import { initializeExtension } from '@own3d/sdk/extension'
import { useNotifications } from '@own3d/sdk/notifications'

const extension = initializeExtension()

const { notify, info, success, warning, error, dismiss, patch } = useNotifications(extension)

// Example: Send a custom notification
await notify({
    type: 'info',
    message: 'This is a custom notification!',
})

// Example: Send an info notification
await info('This is an info message.')

// Example: Send a success notification
await success({
    title: 'Success',
    message: 'Operation completed successfully.',
})

// Example: Send a warning notification
await warning('This is a warning message.')

// Example: Send an error notification
await error({
    title: 'Error',
    message: 'An error occurred.',
})

// Example: Dismiss a notification by ID
await dismiss('notification-id')

// Example: Update (patch) an existing notification
await patch('notification-id', {
  type: 'success',
  title: 'Updated Notification',
  message: 'The notification content has been updated.',
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

### Scene Builder

The Scene Builder module provides methods to interact with the Scene Builder, enabling developers to create interactive and customizable scenes.

```typescript
import { initializeExtension } from '@own3d/sdk/extension'
import { useSceneBuilder } from '@own3d/sdk/scene-builder'

const extension = initializeExtension()

const { setInteractive, onClick, setValues, patchValues } = useSceneBuilder(extension)

// Example: Set the Scene Builder to interactive mode
await setInteractive(true)

// Example: Listen for a click event on an input element
onClick('input-id', () => {
    console.log('Input clicked!')
})

// Example: Set values for Scene Builder inputs
await setValues({
    input1: 'value1',
    input2: 'value2',
})

// Example: Update specific values for Scene Builder inputs
await patchValues({
    input1: 'newValue1',
})
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

#### Chat Events via Socket

With the Socket module, you can also receive chat-related events such as:

- **`message`** – a new chat message  
- **`delete-message`** – a single message was deleted  
- **`clear-chat`** – the chat was cleared  

Unlike direct `socket.io` connections, you do **not** need to manually join the  
`<client_id>.<platform>.<platform_id>.chat` namespace. The SDK automatically handles this setup.

Example:

```js
on('message', (msg) => {
  console.log('New message:', msg)
})

on('delete-message', (msg) => {
  console.log('Message deleted:', msg)
})

on('clear-chat', () => {
  console.log('Chat cleared')
})
````

##### Message Object Summary

When handling a `message` event, the payload follows the [Message Protocol](./message-protocol.md).
Here are the key fields you’ll typically use:

| Field        | Type         | Description                                                              |
|--------------|--------------|--------------------------------------------------------------------------|
| `id`         | string       | Unique identifier of the message                                         |
| `type`       | string       | Message type, e.g. `message` or `announcement`                           |
| `timestamp`  | number       | UNIX timestamp (ms) when the message was received                        |
| `platform`   | string       | Source platform, e.g. `twitch`, `youtube`                                |
| `user`       | object       | Info about the sender (id, username, avatar, badges, color, …)           |
| `channel`    | object       | Info about the channel (id, platform_id, username, avatar)               |
| `message`    | string       | Raw message text                                                         |
| `fragments`  | array        | Rich breakdown of the message (mentions, emotes, cheermotes, plain text) |
| `parent`     | object\|null | Parent message (if this is a reply)                                      |
| `attributes` | object       | Metadata such as `edited`, `highlight`, `accent`                         |

👉 For the full schema and detailed fragment types, see the [Message Protocol → Message Reference](../chatbot/message-protocol.md).
