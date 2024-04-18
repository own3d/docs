# Extension Helper <Badge text="public beta" type="warning"/>

This document describes the extension helper, a piece of software that runs within the extension iframe. It provides a
set of functions to communicate with the extension supervisor.

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and
"OPTIONAL" in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

## Table of Contents

[[toc]]

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

> This script MUST be added as the first script before any other scripts to pass the review.

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

  OWN3D.ext.socket.on('remote-config', (data) => {
    console.log('Config changed', data)
  })
</script>
```

## API

### `OWN3D.ext`

#### `OWN3D.ext.version`

Returns the version of the extension helper.

#### `OWN3D.ext.environment`

Returns the environment of the extension helper. Possible values are `production` and `development`.

#### `OWN3D.ext.context`

The context superglobal provides information about the context in which the extension is running.

This may change during the lifecycle of the extension. Any change to the context is communicated to the extension via
the
[`OWN3D.ext.onContext(callback)`](#own3d-ext-oncontext-callback) event.

#### `OWN3D.ext.user`

The user superglobal provides information about the user who interacts with the extension.

See [`OWN3D.ext.onAuthorized(callback)`](#own3d-ext-onauthorized-callback) for a list of properties.

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

::: warning
You MUST register this callback only once. By registering this callback, the helper will wait for the extension to be
authorized before executing the callback. On any subsequent authorization, the callback will be called again.
:::

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

::: warning
The context provided in the callback parameters MAY be partial and only contain the changed keys. To get a full context,
you should use the `OWN3D.ext.context` superglobal. This callback MAY not be called for the initial context, so you
should always use the `OWN3D.ext.context` superglobal for the initial context.
:::

```js
OWN3D.ext.onContext((context, changed) => {
    for (const key of changed) {
        console.log(`Context changed ${context[key]}`)
    }
})
```

### `OWN3D.ext.coins`

The coins module provides a set of functions to exchange coins for products. Coins are a digital good that can be
purchased by users. Products are a set of items that can be exchanged for coins.

**Products**

Products are defined in the Developer Console. Products have a sku, a name, a cost. The cost is defined in coins. The
cost is the amount of coins that are required to exchange for the product.

| Property    | Type     | Description                                                        |
|-------------|----------|--------------------------------------------------------------------|
| sku         | `string` | The sku of the product.                                            |
| name        | `string` | The name of the product.                                           |
| cost        | `Cost`   | The cost of the product.                                           |
| cost.amount | `number` | The amount of coins that are required to exchange for the product. |
| cost.type   | `string` | The type of the cost. Can be `coins`.                              |
| environment | `string` | The environment of the product. Can be `production` or `sandbox`.  |

**Transactions**

A transaction is a record of an exchange of coins for a product.

| Property            | Type           | Description                                                                            |
|---------------------|----------------|----------------------------------------------------------------------------------------|
| id                  | `string`       | The id of the transaction.                                                             |
| client_id           | `string`       | The id of the client.                                                                  |
| user_id             | `string`       | The id of the user.                                                                    |
| channel_id          | `string`       | The id of the channel.                                                                 |
| subscription        | `Subscription` | The subscription that was exchanged for coins.                                         |
| product             | `Product`      | The product that was exchanged for coins.                                              |
| product.sku         | `string`       | The sku of the product.                                                                |
| product.name        | `string`       | The name of the product.                                                               |
| product.cost        | `Cost`         | The cost of the product.                                                               |
| product.cost.amount | `number`       | The amount of coins that are required to exchange for the product.                     |
| product.cost.type   | `string`       | The type of the cost. Can be `coins`.                                                  |
| product.environment | `string`       | The environment of the product. Can be `production` or `sandbox`.                      |
| product.recurrence  | `string`       | The recurrence of the product. Can be `one-time` or `weekly`, `monthly` or `yearly`.   |
| metadata            | `Metadata`     | The key-value map of metadata that was sent with the transaction.                      |
| status              | `string`       | The status of the transaction. Can be `pending`, `completed`, `cancelled` or `failed`. |

#### `OWN3D.ext.coins.getProducts()`

Returns a list of products available for exchange.

##### Example

```js
OWN3D.ext.coins.getProducts().then((products) => {
    console.log('Got products', products)
})
```

#### `OWN3D.ext.coins.showCoinsBalance()`

Shows the current coins balance.

##### Example

```js
OWN3D.ext.coins.showCoinsBalance()
```

#### `OWN3D.ext.coins.useCoins(sku, metadata)`

Exchange coins for a product.

##### Parameters

- `sku` - The sku of the product to exchange coins for.
- `metadata` - The metadata to send with the transaction.

##### Example

```js
OWN3D.ext.coins.useCoins('test', { foo: 'bar' })
```

#### `OWN3D.ext.coins.onTransactionComplete(callback)`

Registers a callback that is called when a transaction is completed.

##### Parameters

- `callback` - A function that is called when a transaction is completed.

##### Example

```js
OWN3D.ext.coins.onTransactionComplete((transaction) => {
    console.log('Transaction completed', transaction)
})
```

#### `OWN3D.ext.coins.onTransactionCancelled(callback)`

Registers a callback that is called when a transaction is cancelled.

##### Parameters

- `callback` - A function that is called when a transaction is cancelled.

##### Example

```js
OWN3D.ext.coins.onTransactionCancelled((transaction) => {
    console.log('Transaction cancelled', transaction)
})
```

### `OWN3D.ext.socket`

The socket module is an event emitter. It provides a set of functions, so you can listen to events from our event bus.

#### `OWN3D.ext.socket.on(event, callback)`

##### Example

```js
OWN3D.ext.socket.on('remote-config', (data) => {
    console.log('Config changed', data)
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

**Channels**

Here is a list of channels that are available:

- `obs:scene-changed`: Gets callbacks when the scene changes in OBS
- `obs:source-visible-changed`: Gets callbacks when the visibility of the browser source changes in OBS
- `obs:source-active-changed`: Gets callbacks when the active/inactive state of the browser source changes in OBS

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

### `OWN3D.ext.config` <Badge text="public beta" type="warning"/>

::: warning
**Do not store sensitive data in the Remote Config!** The Remote Config is not encrypted and can be accessed by anyone
who interacts with the extension.
:::

The config namespace allows streamers and developers to store and retrieve data. To learn more about the Remote Config
Service, see the [Remote Config](remote-config.md) documentation.

#### `OWN3D.ext.config.getSegments(): Promise<ConfigSegments>` <Badge text="public beta" type="warning"/>

Get all segments.

##### Example

```js
OWN3D.ext.config.getSegments().then((segments) => {
    console.log('Segments', segments)
})
```

#### `OWN3D.ext.config.setSegment(segment, content): Promise<void>` <Badge text="public beta" type="warning"/>

Set the value of a key.

##### Parameters

- `segment` - The segment to set the value of.
- `content` - The content to set (object).

##### Example

```js
OWN3D.ext.config.setSegment('test', { foo: 'bar' })
```

### `OWN3D.ext.features` <Badge text="closed beta" type="warning"/>

::: warning
The `OWN3D.ext.features` module is currently not supported in the public beta.
:::

The feature-flag namespace provides information about the current global feature flags.

#### `OWN3D.ext.features.isEnabled(feature: string)` <Badge text="closed beta" type="warning"/>

Returns whether the current feature flag is enabled.

##### Parameters

- `feature` - The feature to check.

##### Example

```js
if (OWN3D.ext.features.isEnabled('feature-flag')) {
    console.log('Feature flag is enabled')
}
```

#### `OWN3D.ext.features.getFeatures()` <Badge text="closed beta" type="warning"/>

Returns a list of all available feature flags.

##### Example

```js
console.log('Features', OWN3D.ext.features.getFeatures())
// Features [ 'feature-flag' ]
```
