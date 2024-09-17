# Remote Config <Badge text="public beta" type="warning"/>

![rsc.png](..%2F..%2Fimages%2Frsc.png)

## Introduction

OWN3D's Remote Config Service is a very simple key-value store which can be used to store values like strings, numbers,
booleans, and objects without the need to create your own backend. In future versions, we will add support for
pushing updates to the client when the config changes, allowing you to update your extension without the need to
reload it.

::: warning
**Do not store sensitive data in the Remote Config!** The Remote Config is not encrypted and can be accessed by anyone
who interacts with the extension. If you need to store sensitive data, we recommend using the [Key-Value Store](kv.md).
:::

## Segments

The Remote Config is divided into three segments: `global`, `developer`, and `broadcaster`. Each segment has its own
permissions and can be modified by different parties, but all segments can be accessed by all users who interact with
the extension.

### Permissions needed to modify segments

- `global`:  Only the **developer** can change this segment.
- `developer`: Only the **developer** can change this segment.
- `broadcaster`: The **broadcaster** and **developer** can change this segment.

## Generate a JWT token

To write to the Remote Config, you can either use the [Extension SDK](sdk.md) or generate a JWT token
manually. To generate a JWT token manually, you can use the following code snippet:

```js
const token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    client_id: 'your_extension_id',
    channel_id: '1', // required when writing to the developer or broadcaster segment
    mode: 'external',
    scopes: ['*'],
}, 'your_jwt_secret')
```

## Read from the Remote Config Service

### Read using the Extension Helper

To read from the Remote Config, you can use the following code snippet:

```js
import { initializeExtension } from '@own3d/sdk/extension'
import { useRemoteConfig } from '@own3d/sdk/remote-config'

const extension = initializeExtension()

const { getSegments } = useRemoteConfig(extension)

const config = await getSegments()
```

The `config` object contains the following properties:

| Parameter     | Type     | Description                                   |
|---------------|----------|-----------------------------------------------|
| `global`      | `object` | The global segment of the Remote Config.      |
| `broadcaster` | `object` | The broadcaster segment of the Remote Config. |
| `developer`   | `object` | The developer segment of the Remote Config.   |

### Read using the Remote Config API

To read from the Remote Config, you can use the following code snippet:

```js
const response = await fetch('https://ext.own3d.pro/v1/remote-configs/segments', {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer <token>',
        'Content-Type': 'application/json',
    },
})

const config = await response.json()
```

## Write to the Remote Config Service

To write to the Remote Config, you can either use the [Extension Helper](extension-helper.md) or use the Remote Config
API.
However, writing to the `global` or `developer` segment is only possible using the Remote Config API.

The API only accept objects as values. If you want to store a string, you need to wrap it in an object. Arrays will be
stored as objects with numeric keys.

We highly recommend to only write to specific keys of the Remote Config, instead of overwriting the whole segment. This
will help to avoid conflicts with other services writing to the Remote Config.

To empty a segment, you can send an empty object.

### Write using the Extension Helper

::: warning
Inside the Extension, you can only write to the `broadcaster` segment of the Remote Config. To write to the `global`
or `developer` segment, you need to use the Remote Config API.
:::

To write to the Remote Config, you can use the following code snippet:

```js
import { initializeExtension } from '@own3d/sdk/extension'
import { useRemoteConfig } from '@own3d/sdk/remote-config'

const extension = initializeExtension()

const { setSegment } = useRemoteConfig(extension)

await setSegment('broadcaster', {
    foo: 'bar',
})
```

### Write using the Remote Config API

To write to the Remote Config, you can use the following code snippet:

```js
const response = await fetch('https://ext.own3d.pro/v1/remote-configs/segments', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer <token>',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        broadcaster: { foo: "bar" }
    }),
})
```

## Listen to changes of the Remote Config Service

To listen to Remote Config changes, you can use the following code snippet, but be aware that you will receive
config changes from all extensions installed by the content creator:

```js
import { initializeExtension } from '@own3d/sdk/extension'
import { useSocket } from '@own3d/sdk/socket'

const extension = initializeExtension()

const { on } = useSocket(extension)

on('remote-config', (data) => {
    // Only handle changes from your extension
    if (data.extension_id !== 'your_extension_id') return

    console.log('Config changed', data)
})
```

### Parameters

| Parameter      | Type     | Description                                                           |
|----------------|----------|-----------------------------------------------------------------------|
| `segments`     | `object` | The segments of the Remote Config that have changed.                  |
| `extension_id` | `string` | The extension id of the extension that has changed the Remote Config. |
| `channel_id`   | `string` | The channel id of the channel where the extension is installed.       |

## Using the Remote Config in Twitch Extension

::: warning
This feature is only available for selected partnered developers.
:::

### Write using the Remote Config API (as Twitch Extension)

**Prerequisite**: To be able to write to the Remote Config as a Twitch Extension, you need to have your Twitch Extension
connected with your OWN3D Extension. Furthermore, you MUST use the **Extension Configuration Service** Capability.

Twitch Extensions, using the Remote Config API requires different headers. To write to the Remote Config as a Twitch
Extension, you need to use the `X-Twitch-Segment-Version` header which must be set to the **Developer Writable Channel
Segment Version** of the extension.

Furthermore, you need to use the `Authorization` header with the value `Twitch <token>`. The token is the Twitch JWT
token which is provided by the Twitch Extension Helper.

To write to the Remote Config as a Twitch Extension, you can use the following code snippet:

```js
const response = await fetch('https://ext.own3d.pro/v1/remote-configs/segments', {
    method: 'POST',
    headers: {
        'X-Twitch-Segment-Version': '1',
        'Authorization': 'Twitch <token>',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        broadcaster: { foo: "bar" }
    }),
})
```

### Get Remote Config changes via Twitch PubSub

When using PubSub, we will send a message to the extension when the Remote Config changes. The message will have the
following format:

```json
{
  "event": "remote-config-updated",
  "data": {
    "links": {
      "self": "https://cdn.example.com/remote-configs/..."
    }
  }
}
```

A sample code snippet to handle this message is as follows:

```ts
Twitch.ext.listen('broadcast', async (_, __, message) => {
    const payload = JSON.parse(message as string)
    if (payload.event === 'remote-config-updated') {
        const {data} = await axios.get(payload.data.links.self);

        // handle config changes
    }
})
```

### Get Remote Config changes via Twitch Configuration

When using the Twitch Configuration Service, we will store the remote config in the developer configuration. The
developer configuration will have the following format:

```json
{
  "links": {
    "self": "https://cdn.example.com/remote-configs/..."
  }
}
```

A sample code snippet to handle this message is as follows:

```ts
Twitch.ext.configuration.onChanged(async () => {
    if (Twitch.ext.configuration.developer) {
        let payload = JSON.parse(Twitch.ext.configuration.developer.content);
        const {data} = await axios.get(payload.links.self);

        // handle config
    }
})
```