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
user-editable inputs (text fields, toggles, dropdowns, color pickers, etc.) for the `browser-source` compatibility.
The full syntax, including the `id`/`inputs` structure and limitations, is documented in
[Syntax for Forms](./syntax-for-forms.md). Jump straight to a field type:

`forms.yaml` has its own `schema_version`, separate from and unaffected by `manifest.yaml`'s `schema_version`. As of
now it must always be `1`.

| Field                                                                        | Use it for                                     |
|-------------------------------------------------------------------------------|-------------------------------------------------|
| [Input](./syntax-for-forms.md#input-field)                                    | Plain text or number input                       |
| [Boolean](./syntax-for-forms.md#boolean-field)                                | Single on/off switch                             |
| [Checkbox](./syntax-for-forms.md#checkbox-field)                              | One or more checkboxes                           |
| [Dropdown](./syntax-for-forms.md#dropdown-field)                              | Single choice from a list                        |
| [Select](./syntax-for-forms.md#select-field)                                  | Single/multi choice select box                   |
| [Chips](./syntax-for-forms.md#chips-field)                                    | Multi-value tag-style input                      |
| [Tags](./syntax-for-forms.md#tags-field)                                      | Free-form tag list                               |
| [Color](./syntax-for-forms.md#color-field)                                    | Color picker                                     |
| [Slider](./syntax-for-forms.md#slider-field)                                  | Numeric value on a range                         |
| [Volume](./syntax-for-forms.md#volume-field)                                  | Volume level control                             |
| [Border Radius](./syntax-for-forms.md#border-radius-field)                    | Corner radius control                            |
| [Font Settings](./syntax-for-forms.md#font-settings-field)                    | Font family/size/weight controls                 |
| [File](./syntax-for-forms.md#file-field)                                      | File/image upload                                |
| [Link](./syntax-for-forms.md#link-field)                                      | URL input                                        |
| [Button](./syntax-for-forms.md#button-field)                                  | Triggerable action button                        |
| [Resource](./syntax-for-forms.md#resource-field)                              | Reference to another OWN3D resource               |
| [Platforms](./syntax-for-forms.md#platforms-field)                            | Streaming platform selector                       |
| [Platform-Event](./syntax-for-forms.md#platform-event-field)                  | Platform event selector                          |
| [Repeater](./syntax-for-forms.md#repeater-field)                              | Repeatable group of fields                        |
| [Paragraph](./syntax-for-forms.md#paragraph-field)                            | Static text/help copy (not an input)              |
| [Divider](./syntax-for-forms.md#divider)                                      | Visual separator (not an input)                   |
| [Accordion](./syntax-for-forms.md#accordion-field)                            | Collapsible group of fields                       |
| [Group](./syntax-for-forms.md#group-field)                                    | Grouped/nested fields                             |
| [Row](./syntax-for-forms.md#row-field)                                        | Horizontal layout of fields                       |
| [Search](./syntax-for-forms.md#search-field)                                  | Searchable selection field                        |
| [Tabs](./syntax-for-forms.md#tabs-field)                                      | Tabbed grouping of fields                         |

Any field's `attributes` can also include `optional: true` to make it toggleable — see
[Making a field optional](#making-a-field-optional) below.

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

### Making a field optional

Any field's `attributes` can include `optional: true` to render it as a toggleable field in the settings UI. When
`optional: true` is set, the saved value becomes an object with `toggled` and `value` properties instead of a plain
value — see [Input Field](./syntax-for-forms.md#input-field) for the exact shape and a worked example.