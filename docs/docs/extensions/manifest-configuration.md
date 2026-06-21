# Manifest Configuration

The manifest file (`manifest.yaml`) describes your extension and is used with `own3d ext:deploy` to deploy to the OWN3D
platform. Schema version 2 splits configuration across two files: `manifest.yaml` for metadata and compatibilities, and
an optional `forms.yaml` for browser-source input fields.

## Typical AI Widget Manifest

Most AI-generated widgets use a browser-source only manifest with a fixed canvas size:

```yaml
schema_version: 2
id: a214167b-7af5-432a-a4df-f8e2493eeb3e
name: Bar
version: 1.0.0
compatibilities:
  browser-source:
    path: index.html
    sizing:
      width: 800
      height: 600
```

## Manifest Keys

### `schema_version`

Must be `2`.

### `id`

UUID of the extension. Generate one at
the [OWN3D Developer Console](https://console.dev.own3d.tv/resources/extensions/new).

### `name`

Display name of the extension. Must not contain the words "Extension" or "OWN3D".

### `version`

SemVer version string (e.g. `1.0.0`). Must match the version registered in the Developer Console.

### `description`

Full description shown on the Extension Details page.

### `summary`

One or two sentences shown throughout OWN3D. Keep it short; use `description` for details.

### `base_url`

Optional external base URL for the extension version.

### `compatibilities`

Declares which surfaces the extension runs on. See [Compatibilities](#compatibilities-1).

### `store_presence`

Required for store listing. See [Store Presence](#store-presence-1).

### `publisher`

- `name`: Publisher display name (e.g. "StreamTV Media GmbH").

### `author`

- `name`: Author display name.
- `email`: Author contact email.

### `support`

- `url`: Support page URL.
- `email`: Support email address.

### `legal`

- `terms`: Terms of service URL.
- `privacy`: Privacy policy URL.

### `oauth`

- `scopes`: Array of OAuth scopes (e.g. `[user:read]`).
- `redirect_uri`: Array of allowed redirect URIs.

## Compatibilities

Supported types under `compatibilities`:

| Key                  | Description                                |
|----------------------|--------------------------------------------|
| `browser-source`     | Overlay rendered as a browser source       |
| `config`             | Configuration panel in the OWN3D dashboard |
| `background-service` | Background service page                    |
| `standalone`         | Standalone page                            |

### `path`

HTML file path for this compatibility type.

### `sizing` (browser-source only)

Default canvas size and position:

- `x`, `y`: Default position (pixels).
- `width`, `height`: Default size (pixels).

### `resize_by_default` (browser-source only)

Boolean. Whether the browser source is resizable by default. Defaults to `false`.

## Store Presence

Required to list in the OWN3D store. Nested under `store_presence`:

### `category`

Store category string.

### `images`

- `icon`: Icon image path.
- `logo`: Logo image path.
- `discovery`: Discovery banner image path.

### `screenshots`

Array of screenshot file paths.

### `keywords`

Array of search keyword strings.

## Forms (forms.yaml)

Forms are defined in a **separate** `forms.yaml` file — they are not allowed inside `manifest.yaml`. Forms configure
user-editable inputs for the `browser-source` compatibility. For the full list of available input types and their
options, see [Syntax for Forms](./syntax-for-forms.md).

```yaml
schema_version: 1
id: a214167b-7af5-432a-a4df-f8e2493eeb3e
has_demo_mode: false
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