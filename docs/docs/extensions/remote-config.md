# Remote Config <Badge text="closed beta" type="warning"/>

## Introduction

OWN3D's Remote Config Service is a very simple key-value store which can be used to store values like strings, numbers,
booleans, and objects without the need to create your own backend. In future versions, we will add support for
pushing updates to the client when the config changes, allowing you to update your extension without the need to
reload it.

::: warning
**Do not store sensitive data in the Remote Config!** The Remote Config is not encrypted and can be accessed by anyone
who interacts with the extension.
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

To write to the Remote Config, you can either use the [Extension Helper](extension-helper.md) or generate a JWT token
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

To read from the Remote Config, you can use the following code snippet:

```js
const config = await OWN3D.ext.config.getSegments()
```

The `config` object contains the following properties:

| Parameter     | Type     | Description                                   |
|---------------|----------|-----------------------------------------------|
| `global`      | `object` | The global segment of the Remote Config.      |
| `broadcaster` | `object` | The broadcaster segment of the Remote Config. |
| `developer`   | `object` | The developer segment of the Remote Config.   |

## Write to the Remote Config Service

::: warning
Inside the Extension, you can only write to the `broadcaster` segment of the Remote Config. To write to the `global`
or `developer` segment, you need to use the Remote Config API.
:::

To write to the Remote Config, you can use the following code snippet:

```js
await OWN3D.ext.config.setSegment('broadcaster', {
    foo: 'bar',
})
```

## Listen to changes of the Remote Config Service

::: danger
This feature is not yet implemented.
:::

To listen to changes of the Remote Config, you can use the following code snippet:

```js
OWN3D.ext.socket.on('remote-config', (data) => {
    console.log('Config changed', data)
})
```

### Parameters

| Parameter      | Type     | Description                                                           |
|----------------|----------|-----------------------------------------------------------------------|
| `segments`     | `object` | The segments of the Remote Config that have changed.                  |
| `extension_id` | `string` | The extension id of the extension that has changed the Remote Config. |
