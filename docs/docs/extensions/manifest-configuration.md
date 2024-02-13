# Manifest Configuration <Badge text="RFC" type="warning"/>

The manifest file is a YAML file which contains all the information about your extension. It can be used in combination
with the `own3d ext:deploy` command to deploy your extension to the OWN3D platform without the need to use the web
interface.

## Manifest

The following is an example of a minimal manifest file:

```yaml
schema_version: 1
id: 2c0135a2-d8a6-4002-b545-0eaf9780f9db
name: Extension Example
version: 0.0.0
description: An example extension boilerplate
summary: An example extension boilerplate
store_presence:
  images:
    logo: assets/logo.png
compatibilities:
  config:
    path: config.html
```

::: details Extension with forms

```yaml
schema_version: 1
id: 2c0135a2-d8a6-4002-b545-0eaf9780f9db
name: Extension that offers permissions
version: 0.0.0
description: Extension that includes permissions for moderators
summary: An example extension boilerplate
store_presence:
  images:
    logo: assets/logo.png
compatibilities:
  config:
    path: config.html
  browser-source:
    path: browser-source.html
    forms:
      config_button: standalone
      inputs:
        - id: text
          type: input
          attributes:
            label: Text
            value: Hello World
            description: This is a description
          validations:
            required: true
```

:::

::: details Extension with permissions

```yaml
schema_version: 1
id: 2c0135a2-d8a6-4002-b545-0eaf9780f9db
name: Extension that offers permissions
version: 0.0.0
description: Extension that includes permissions for moderators
summary: An example extension boilerplate
store_presence:
  images:
    logo: assets/logo.png
compatibilities:
  config:
    path: config.html
permissions:
  schedule:write:
    name: Edit Schedule
    description: 'Edit your schedule'
    default: true
```

:::

::: details Extension with store presence

To be eligible for the store, the extension must have a store presence. The store presence includes the manifest keys
for `store_presence`, `author`, `support`, and `legal`.

```yaml
schema_version: 1
id: 2c0135a2-d8a6-4002-b545-0eaf9780f9db
name: Extension with store presence
version: 0.0.0
description: Extension that includes permissions for moderators
summary: An example extension boilerplate
store_presence:
  category: tools
  images:
    icon: assets/icon.png
    logo: assets/logo.png
    discovery: assets/discovery.png
  screenshots:
    - assets/screenshot1.png
    - assets/screenshot2.png
  keywords:
    - example
    - boilerplate
author:
  name: Example Author
  email: author@example.com
support:
  url: https://example.com/support
  email: support@example.com
legal:
  terms: https://example.com/terms
  privacy: https://example.com/privacy
```

:::

::: details Extension with OAuth scopes

```yaml
schema_version: 1
id: 2c0135a2-d8a6-4002-b545-0eaf9780f9db
name: Extension that offers permissions
version: 0.0.0
description: Extension that includes permissions for moderators
summary: An example extension boilerplate
store_presence:
  images:
    logo: assets/logo.png
oauth:
  scopes:
    - user:read
  redirect_uri: https://example.com/oauth
```

:::

## Manifest Keys

### `schema_version`

The version of the manifest schema. The current version is `1`.

### `id`

The unique identifier of the extension. This identifier is used to identify the extension in the OWN3D platform.

You can generate a UUID using the [OWN3D Developer Console](https://console.dev.own3d.tv/resources/extensions/new).

### `name`

The name of the extension. Your name cannot include any form of the words "Extension", or "OWN3D".

### `version`

The version of the extension.

### `description`

The Description is viewable only on the Extension Details page. It should be the full details about the functions of
your Extension. This is your chance to tell them why they should install your Extension.

### `summary`

The Summary is viewable throughout OWN3D. It should be one to two brief sentences describing what your Extension does.
To provide more detail, use the Description field.

### `store_presence`

The store presence of the extension. This key is required if you want to publish your extension in the OWN3D store.
For more information, see [Store Presence](#store-presence-1).

### `compatibilities`

The compatibilities of the extension. For more information, see [Compatibilities](#compatibilities-1).

### `permissions`

The permissions of the extension. For more information, see [Permissions](#permissions-1).

### `oauth`

TBD. For more information, see [OAuth](#oauth-1).

### `author`

The author of the Extension as shown to the public, e.g. "StreamTV Media GmbH".

### `support`

The support of the extension. This includes the following keys:

- `url`: The URL of the support.
- `email`: The email of the support.

### `legal`

The legal of the extension. This includes the following keys:

- `terms`: The URL of the terms.
- `privacy`: The URL of the privacy.

## Store Presence

The store presence of the extension is required if you want to publish your extension in the OWN3D store. The store
presence includes the following keys:

### `category`

The category of the extension.

### `images`

The images of the extension. This includes

- `icon`: The icon image of the extension.
- `logo`: The logo image of the extension.
- `discovery`: The discovery image of the extension.

### `screenshots`

The screenshots of the extension.

### `keywords`

The keywords of the extension.

## Compatibilities

The compatibilities of the extension include the following

Each compatibility includes the following

### `path`

The path of the compatibility.

### `forms` (optional; only for `browser-source`)

The forms of the compatibility.