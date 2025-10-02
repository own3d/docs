# Manifest Configuration <Badge text="Public Alpha" type="warning"/>

The manifest file is a YAML file which contains all the information about your extension. It can be used in combination
with the `own3d ext:deploy` command to deploy your extension to the OWN3D platform without the need to use the web
interface.

::: warning
This feature is currently in public alpha and is subject to change without notice and may not be suitable for production
use. Please report any issues you encounter to the OWN3D team.
:::

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
  browser-source:
    path: browser-source.html
```

::: tip Migration
Previously forms could be defined inline under `compatibilities.browser-source.forms` inside `manifest.yaml`. This inline
syntax is now deprecated. Move the form portion into a top-level `forms.yaml` placed alongside your `manifest.yaml`.
Keep the same `id` value so existing saved settings continue to resolve.
:::

::: details Extension with forms (current, using separate forms.yaml)

`manifest.yaml`
```yaml
schema_version: 1
id: 2c0135a2-d8a6-4002-b545-0eaf9780f9db
name: Extension that offers a form
version: 0.0.0
description: Extension that includes a customization form
summary: An example extension boilerplate
store_presence:
  images:
    logo: assets/logo.png
compatibilities:
  config:
    path: config.html
  browser-source:
    path: browser-source.html
```

`forms.yaml`
```yaml
schema_version: 1
id: 2c0135a2-d8a6-4002-b545-0eaf9780f9db
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

::: details (Deprecated) Legacy inline forms example

Do not use this format for new extensions. Shown only for reference if you encounter older projects.

```yaml
schema_version: 1
id: 2c0135a2-d8a6-4002-b545-0eaf9780f9db
name: Legacy Inline Forms Example
version: 0.0.0
description: Uses deprecated inline forms syntax
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

::: details Extension with Monetization support

Monetization is a new feature that allows you to sell products and subscriptions within your extension. This feature is
currently in development and is only available to a limited number of developers.

Deprecation of SKU's can only be done inside the Developer Console. Deprecating a SKU will not affect existing
subscriptions or in-app purchases that have been made and will only prevent new purchases of the SKU.

```yaml
schema_version: 1
id: 2c0135a2-d8a6-4002-b545-0eaf9780f9db
name: Extension that offers monetization
version: 0.0.0
description: Extension that includes monetization
summary: An example extension boilerplate
store_presence:
  images:
    logo: assets/logo.png
compatibilities:
  config:
    path: config.html
monetization:
  in_app_purchase:
    products:
      - sku: product-sku
        name: Product Name
        description: Product Description
        price: 100
  subscriptions:
    - sku: subscription-sku
      name: Subscription Name
      description: Subscription Description
      recurrence: weekly
      price: 100
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
For more information, see [Store Presence](#store-presence).

### `compatibilities`

The compatibilities of the extension. For more information, see [Compatibilities](#compatibilities).

### (Deprecated) Inline `forms` under `browser-source`
Inline forms are deprecated. Define forms in `forms.yaml` instead. See the "Extension with forms" example and the
[Syntax for Forms](syntax-for-forms.md) guide.

### `forms.yaml` (external file)
A separate file placed alongside `manifest.yaml` that declares the extension's configurable form. Required only if your
extension (e.g. a `browser-source`) exposes custom settings. Must contain:
- `schema_version`: Current form schema version (e.g. 1)
- `id`: Must exactly match the extension `id` in `manifest.yaml`
- `inputs`: Array of form field definitions
Optional: validations and other field-level metadata as documented in the Syntax for Forms guide.

### `permissions`

The permissions of the extension. For more information, see [Permissions](#permissions).

### `oauth`

TBD. For more information, see [OAuth](#oauth).

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

### `forms` (deprecated; only for legacy `browser-source` manifests)

Use the separate `forms.yaml` file instead. This key is ignored for new submissions and will be removed in a future
schema version.
