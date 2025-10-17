# OWN3D Extension SDK Reference

The OWN3D Extension SDK is a modular, event-driven toolkit for building extensions on the OWN3D platform. This document is the authoritative reference for all SDK features, types, and usage patterns.

---

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Extension Object Reference](#extension-object-reference)
- [Module Reference](#module-reference)
  - [Auth](#auth)
  - [Coins](#coins)
  - [Context](#context)
  - [Notifications](#notifications)
  - [PubSub](#pubsub)
  - [Remote Config](#remote-config)
  - [Scene Builder](#scene-builder)
  - [Socket](#socket)
  - [Subscription](#subscription)
  - [IPC](#ipc)
  - [Support](#support)
- [Types Reference](#types-reference)
- [Advanced Topics](#advanced-topics)
  - [Chat and Platform Events via Socket](#chat-and-platform-events-via-socket)
- [Appendix](#appendix)

---

## Introduction

The SDK provides composable modules for authentication, context, notifications, messaging, configuration, scene interaction, and more. All modules are accessed via composable functions, passing the central `Extension` object.

---

## Installation

Install the modular SDK:
```bash
npm install @own3d/sdk
```

---

### Vue Integration

#### Setup for Vue Applications

> **Important:** Only call `initializeExtension` (or `createExtension`) **once** in your application. The extension instance should be shared across all components to avoid duplicated state and event listeners.

##### 1. Create the Extension Instance Once
```typescript
// main.ts
import { createApp } from 'vue'
import { createExtension } from '@own3d/sdk/vue'
import App from './App.vue'

const extension = createExtension() // Only call this ONCE
const app = createApp(App)
app.use(extension)
app.mount('#app')
```

##### 2. Access the Extension in Vue Components

You can access the extension instance in any component using `<script setup>` and the Vue inject API.

**Script Setup Example:**
```vue
<script setup lang="ts">
import { inject, onMounted } from 'vue'

const extension = inject('extension')

onMounted(() => {
  if (extension) {
    extension.on('event', (data: any) => {
      // handle event
    })
  }
})
</script>
```

---

## Extension Object Reference

The `Extension` object is the central context for all SDK modules. It provides event handling, messaging, user/context state, and HTTP utilities.

```typescript
export interface Extension {
    on: (event: string, callback: (data: any) => void) => void;
    once: (event: string, callback: (data: any) => void) => void;
    postMessage: (event: string, data: any, callback?: (data: any) => void) => void;
    emit: (event: string, data: any) => void;
    user?: Authorized;
    context?: Context;
    axios: any;
    state: any;
}
```

**Initialization Example:**
```typescript
import { initializeExtension } from '@own3d/sdk/extension'
const extension = initializeExtension()
```

---

## Module Reference

### Auth
Authenticate the extension and listen for user state changes.

```typescript
import { useAuth } from '@own3d/sdk/auth'
const { onAuthorized } = useAuth(extension)
onAuthorized((user) => { console.log(user) })
```
**Signature:**
```typescript
function useAuth(extension: Extension): {
  onAuthorized: (authCallback: (auth: Authorized) => void) => void
}
```

### Coins
Manage virtual currency, products, and transactions.

```typescript
import { useCoins } from '@own3d/sdk/coins'
const { getProducts, showCoinsBalance, useCoins, onTransactionComplete, onTransactionCancelled } = useCoins(extension)
getProducts().then(console.log)
```
**Signature:**
```typescript
function useCoins(extension: Extension): {
  getProducts: () => Promise<any>,
  showCoinsBalance: () => void,
  useCoins: (sku: string, metadata: Metadata) => Promise<Transaction>,
  onTransactionComplete: (callback: (transaction: Transaction) => void) => void,
  onTransactionCancelled: (callback: (transaction: Transaction) => void) => void
}
```

### Context
Access and react to extension context changes.

```typescript
import { useContext } from '@own3d/sdk/context'
const { onContext } = useContext(extension)
onContext((context, changed) => { console.log(context, changed) })
```
**Signature:**
```typescript
function useContext(extension: Extension): {
  onContext: (
    contextCallback: <T extends Partial<Context>>(context: T, changed: ReadonlyArray<keyof T>) => void,
    options?: { immediate: boolean }
  ) => void
}
```

### Notifications
Send notifications to users (info, success, warning, error), dismiss, or patch them.

```typescript
import { useNotifications } from '@own3d/sdk/notifications'
const { notify, info, success, warning, error, dismiss, patch } = useNotifications(extension)
await info('Welcome!')
```
**Signature:**
```typescript
function useNotifications(extension: Extension): {
  notify: (content: Notification) => Promise<NotificationResponse>,
  dismiss: (id: string) => Promise<NotificationResponse>,
  patch: (id: string, content: Notification) => Promise<NotificationResponse>,
  info: (content: string | Notification) => Promise<NotificationResponse>,
  success: (content: string | Notification) => Promise<NotificationResponse>,
  warning: (content: string | Notification) => Promise<NotificationResponse>,
  error: (content: string | Notification) => Promise<NotificationResponse>
}
```

### PubSub
Publish and subscribe to cross-extension messages.

```typescript
import { usePubSub } from '@own3d/sdk/pubsub'
const { publish, subscribe } = usePubSub(extension)
subscribe('foo', (data) => console.log(data))
await publish('foo', { bar: 'baz' })
```
**Signature:**
```typescript
function usePubSub(extension: Extension): {
  publish: (event: string, data: any) => Promise<void>,
  subscribe: (event: string, callback: (data: any) => void) => void
}
```

### Remote Config
Get and set configuration segments without a backend.

```typescript
import { useRemoteConfig } from '@own3d/sdk/remote-config'
const { getSegments, setSegment } = useRemoteConfig(extension)
const segments = await getSegments()
await setSegment('creator', { key: 'value' })
```
**Signature:**
```typescript
function useRemoteConfig(extension: Extension): {
  getSegments: () => Promise<ConfigSegments>,
  setSegment: (segment: ConfigSegmentKey, content: JsonObject) => Promise<void>
}
```

### Scene Builder
Interact with the Scene Builder, set values, listen for input events.

```typescript
import { useSceneBuilder } from '@own3d/sdk/scene-builder'
const { setInteractive, onClick, setValues, patchValues } = useSceneBuilder(extension)
await setInteractive(true)
onClick('input-id', () => console.log('Clicked!'))
```
**Signature:**
```typescript
function useSceneBuilder(extension: Extension): {
  setInteractive: (interactive: boolean) => Promise<void>,
  onClick: (inputId: string, callback: () => void) => void,
  setValues: (values: Record<string, string>) => Promise<void>,
  patchValues: (values: Record<string, string>) => Promise<void>
}
```

### Socket
The Socket module is the unified entry point for receiving both **platform events** (such as `notifysub` for new subscriptions, donations, etc.) and **chat events** (such as messages, deletions, and chat clears).

Use the Socket module to subscribe to these real-time events from the OWN3D platform:

```typescript
import { useSocket } from '@own3d/sdk/socket'
const { on } = useSocket(extension)

// Platform event (e.g., new subscription)
on('notifysub', (event) => {
  console.log('Platform event:', event)
})

// Chat message event
on('message', (msg) => {
  console.log('Chat message:', msg)
})

// Chat message deleted
on('delete-message', (data) => {
  console.log('Message deleted:', data)
})

// Chat cleared
on('clear-chat', () => {
  console.log('Chat cleared')
})
```

**Note:** All platform and chat events are delivered through the Socket module. You do not need to use any other module for these real-time events.

**Signature:**
```typescript
function useSocket(extension: Extension): {
  on: (event: string, callback: (data: any) => void) => void
}
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


### Subscription
Trigger Pro subscription upsell dialogs.

```typescript
import { useSubscription } from '@own3d/sdk/subscription'
const { showProSubscriptionUpsell } = useSubscription(extension)
showProSubscriptionUpsell({ firstpromoter: { slug: 'my-slug' } })
```
**Signature:**
```typescript
function useSubscription(extension: Extension): {
  showProSubscriptionUpsell: (options: ProSubscriptionUpsellOptions) => void
}
```

### IPC
Internal messaging between extension and overlay (not for extension-to-extension communication).

```typescript
import { useIpc } from '@own3d/sdk/ipc'
const { send, invoke, on } = useIpc(extension)
send('channel', { key: 'value' })
invoke('channel', { key: 'value' }).then(console.log)
```
**Signature:**
```typescript
function useIpc(extension: Extension): {
  send: (channel: string, payload: any) => void,
  invoke: (channel: string, payload: any) => Promise<any>,
  on: (channel: string, callback: (payload: any) => void) => void
}
```

### Support
Utility functions for style and font management.

```typescript
import { textStyle } from '@own3d/sdk/support'
const style = textStyle(fontSettings)
```
**Signature:**
```typescript
function textStyle(
  fontSettings: FontSettings | undefined | null,
  transformer?: { [key: string]: (x: CssValue) => CssValue }
): CssProperties
```

---

## Advanced Topics

### Event System
- Use `on`, `once`, `emit` for event-driven programming.
- All modules rely on extension events for state changes and communication.

### IPC vs PubSub
- IPC: Internal, extension ↔ overlay/platform.
- PubSub: Cross-extension, configuration ↔ widget, etc.

### Configuration
- Remote Config module allows segment-based config without backend.

### Scene Builder
- Set interactive mode, listen for input events, set/patch values.

---

## Appendix

### Conventions
- All modules use composable functions: `useX(extension): XComposable`.
- Pass the `Extension` object to all modules.
- Strong typing throughout.

### Extensibility
- Add new modules by following the composable pattern.
- Extend types in `types.ts` for new features.

---

## Example: Full Extension Setup

```typescript
import { initializeExtension } from '@own3d/sdk/extension'
import { useAuth } from '@own3d/sdk/auth'
import { useContext } from '@own3d/sdk/context'
import { useNotifications } from '@own3d/sdk/notifications'

const extension = initializeExtension()
const { onAuthorized } = useAuth(extension)
const { onContext } = useContext(extension)
const { info } = useNotifications(extension)

onAuthorized((user) => info(`Welcome, ${user.username}!`))
onContext((context, changed) => console.log('Context changed:', changed, context))
```