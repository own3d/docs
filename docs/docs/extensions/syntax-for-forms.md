# Syntax for Forms <Badge text="public beta" type="warning"/>

## About YAML Syntax

YAML is a human-readable data-serialization language. It is commonly used for configuration files and in applications
where data is being stored or transmitted. YAML targets many of the same communications applications as Extensible
Markup Language (XML). YAML is a superset of JSON, and YAML files can be parsed as JSON.

## Native Inputs

Native inputs are inputs that are already available in the browser source. They are not defined in the form file.
These are the native inputs:

- **Title**
- **Transform**
- **Shadow**
- **Filters** (only available for images and videos)
- **Opacity**

![img.png](../../images/syntax-for-forms-static_v2.png)

## Creating Forms For Extensions

In opposite to native inputs, custom inputs are defined in the form file. These allow you to create custom inputs for
your extension. Even our internal widgets are using this system. The following example shows how to create a form for a
browser source:

![img.png](../../images/syntax-for-forms-dynamic_v2.png)

Creating forms for browser sources is very easy. We use YAML syntax to define the inputs. The following example shows
the syntax for a form with different input types:

> Each form must contain a uuid (`id`) and an array of inputs (`inputs`). The uuid is used to identify the form in the
> scene editor which must match with your extension id. The inputs array contains all the inputs that are available in
> the form.

```yaml
id: 98f9fab0-0714-46d8-ac77-d57130a1dc88
inputs:
  - type: input
    id: text
    attributes:
      label: Text
      description: This is a description
      value: Hello World
```

### Limitations

- The `id` of the form must match the `id` of the extension.
- The `id` of the inputs must be unique and cannot be `extension`.
- The `id` of the inputs must be an alphanumeric string with a length of 3-32 characters and may contain dashes and
  underscores.

## Fields

### Boolean Field

![Boolean Field](../../images/fields/boolean.png)

The `boolean` field may be used to represent a `boolean` / `on/off` value. The resulting `values` will be represented as
a boolean value.

```yaml
  - type: boolean
    id: random
    attributes:
      label: Random
      description: This is a description
      value: true
```

Resulting `values`:

```json:no-line-numbers
{
  "random": true
}
```

### Border Radius Field

![Border Radius Field Single](../../images/fields/border-radius-1.png)
![Border Radius Field Multiple](../../images/fields/border-radius-2.png)

The `border-radius` field provides a beautiful input that can be used to select a border radius value. The `value` is
required and must be an object with the following properties: `multiple`, `radius`, `top-left`, `top-right`,
`bottom-left` & `bottom-right`.
`multiple` will allow you to set the border radius for each corner individually.
The `radius` value will be used when `multiple` is set to `false`.

```yaml
  - type: border-radius
    id: border-radius
    attributes:
      label: Border Radius
      value:
        multiple: false
        radius: 0
        top-left: 0
        top-right: 0
        bottom-left: 0
        bottom-right: 0
```

Resulting `values`:

```json:no-line-numbers
{
  "border-radius": {
    "multiple": false,
    "radius": 0,
    "top-left": 0,
    "top-right": 0,
    "bottom-left": 0,
    "bottom-right": 0
  }
}
```

### Button Field

The `button` field allows you to create a button that can be used to trigger an action. It will emit an event through
the extension IPC module when the button is clicked. There is no `value` for this field.

```yaml
  - type: button
    id: button
    attributes:
      label: Click Me
```

Emitted event:

```js:no-line-numbers
import { useSceneBuilder } from '@own3d/sdk/scene-builder'

const { onClick } = useSceneBuilder(/* extension instance */)

onClick('foo', () => {
  console.log('clicked foo')
})
```

### Checkbox Field

:::warning
**Migration Required:** The `checkbox` field has been updated to return an array of selected values. Previously, it
returned an object with the selected value as the key and a boolean as the value.

Please update your code to handle the new format as shown in the example below.

Use `version: 2` in the field to enable the new format. The new format will be enabled by default in the future.
To stay compatible with the old format, use `version: 1`.
:::

![Border Radius Field Multiple](../../images/fields/checkbox.png)

The `checkbox` field may be used to represent a `boolean` / `on/off`value. The resulting `values` will be represented as
an array of selected values.

```yaml
  - type: checkbox
    id: checkbox
    version: 2
    attributes:
      label: Checkbox
      description: This is a description
    options:
      - label: Option 1
        value: option-1
        checked: true
        required: true
      - label: Option 2
        value: option-2
        checked: false
        required: false
```

Resulting `values`:

```json:no-line-numbers
{
  "checkbox": [
    "option-1"
  ]
}
```

Resulting legacy `values`:

```json:no-line-numbers
// version: 1
{
  "checkbox": {
    "option-1": true,
    "option-2": false
  }
}
```

### Chips Field

![Chips Field](../../images/fields/chips.png)

The `chips` field provides a set of chips that can be selected. It behaves exactly like a `dropdown` field, but with a
different UI.

```yaml
  - type: chips
    id: battery
    attributes:
      label: Battery
      value: full
    options:
      - label: Full
        value: full
        icon: battery-full
      - label: Half
        value: half
        icon: battery-half
      - label: Empty
        value: empty
        icon: battery-empty
```

Resulting `values`:

```json:no-line-numbers
{
  "battery": "full"
}
```

### Color Field

![Color Field](../../images/fields/color-1.png)
![Colorpicker](../../images/fields/color-2.png)

The `color` field provides a color picker that can be used to select a color. The hex code can be either 6 or 8 characters long. The 8 character hex code will be used for the alpha channel.

If `allow-gradient` is set, the user can choose between `color`, `linear gradient` and `radial gradient`.


```yaml
  - type: color
    id: color
    attributes:
      label: Color
      allow-gradient: true
      value: "#ff0000"
```

Resulting `values` for hex-color:

```json:no-line-numbers
{
  "color": "#ff0000"
}
```

Resulting `values` for `linear-gradient`
```json:no-line-numbers
{
  "color": "linear-gradient(90deg, #FF9602 0%, #ffffff 100%)"
}
```

Resulting `values` for `radial-gradient`
```json:no-line-numbers
{
  "color": "radial-gradient(circle, #c99144ff 0%, #ffffff 100%)"
}
```

<!--
### Divider

The `divider` field displays a horizontal line and provides no other functionaliy.
```yaml
  - type: divider
    id: divider
```
-->

### Dropdown Field

![Dropdown Field](../../images/fields/dropdown.png)

The `dropdown` field provides a dropdown menu. The `select` options may be defined in the `options` array.

```yaml
  - type: dropdown
    id: dropdown
    attributes:
      label: Dropdown
      value: 2
    options:
      - label: Option 1
        value: 1
      - label: Option 2
        value: 2
      - label: Option 3
        value: 3
```

Resulting `values`:

```json:no-line-numbers
{
  "dropdown": 2
}
```

### File Field

::: warning
The `file` field UI will be updated soon.
:::

![File Field](../../images/fields/file.png)

The `file` field allows you to upload a file. The `mimeTypes` array is required and must contain a list of mime types
which are allowed to be uploaded but limited to the following types: `mp3`, `mp4`, `webm`, `wav`, `png`, `jpg`, `jpeg`
and `gif`. The max file size is 5MB by default.

Multiple files can be uploaded by setting the `multiple` attribute to `true`. When multiple is set to `true`, the
`value` will be an array of file ids & types.

We offer multiple popups for selecting files. The `popup` attribute can be used to define which popup should be used.
If you don't define a popup, the default popup `files` will be used. The following popups are available:

- `files` - Allows you to select files from your OWN3D media library
- `gifs` - Allows you to select GIFs from Tenor

```yaml
  - type: file
    id: image
    attributes:
      label: Image
      multiple: false
      mimeTypes:
        - image/*
```

Resulting `values`:

```json:no-line-numbers
{
  "image": {
    "id": "1337",
    "type": "file"
  }
}
```

#### How Files Are Stored

When a file is uploaded using this field, OWN3D will store the file for you. The file will be stored in the OWN3D CDN
and will be available until the file is deleted. The `value` of the field will be the file id which can be used to
retrieve the file using the [File Storage API](../file-storage.md).

### Font Settings Field

![Font-Settings Field](../../images/fields/font-settings.png)

The `font-settings` field provides a multi input field for font settings. It provides a list of fonts that are available
in [Bunny Fonts](https://fonts.bunny.net/) (the font provider for OWN3D and equivalent to Google Fonts).

```yaml
  - type: font-settings
    id: font-settings
    attributes:
      label: Font Settings
      value:
        font-color: "#ffffff"
        font-family: Inter
        font-weight: 400
        font-size: 14
        text-align: left
        font-style: normal
        letter-spacing: 0
        line-height: 1.2
        text-indent: 0
```

Resulting `values`:

```json:no-line-numbers
{
  "font-settings": {
    "font-color": "#ffffff",
    "font-family": "Inter",
    "font-weight": 400,
    "font-size": 14,
    "text-align": "left",
    "font-style": "normal",
    "letter-spacing": "normal",
    "line-height": 1.2
  }
}
```

### Input Field

![Input Field](../../images/fields/input.png)

The `input` field provides a simple text input.
The `type` attribute can be used to define the type of input (`text` , `number`). The `type` attribute is optional and defaults to `text`.

```yaml
  - type: input
    id: text
    attributes:
      description: This is a description
      label: Text
      optional: false
      type: text
      value: Hello World
```

Resulting `values`:

```json:no-line-numbers
{
  "text": "Hello World"
}
```

If `optional: true` is set, the `value` will be an object with a `toggled` and `value` property.

```yaml{6,9-10}
  - type: input
    id: text
    attributes:
      description: This is a description
      label: Text
      optional: true
      type: text
      value:
        toggled: true
        value: Hello World
```

Resulting `values`:

```json:no-line-numbers
{
  "text": {
    "toggled": true | false,
    "value": "Hello World"
  }
}
```

### Link Field

![Link Field](../../images/fields/link.png)

The `link` field allows you to create a link that can be used to navigate to a specific URL. It will open the link in a
new tab. There is no `value` for this field.

The `type` attribute can be used to define the type of link (`button` or `text`). The `type` attribute is optional and defaults to `text`.

```yaml
  - type: link
    id: link
    attributes:
      label: Link
      value: https://example.com
      type: text # optional
```

### Paragraph Field

![Paragraph Field](../../images/fields/paragraph.png)

The `paragraph` field allows you to display a paragraph of text. The `headline` is optional. There is no `value` for this field.

```yaml
  - type: paragraph
    id: paragraph
    attributes:
      headline: Headline
      content: Lorem ipsum dolor sit amet, consetetur sadipscing elitr…
```

### Platforms Field

![Platform Field](../../images/fields/platform.png)

The `platforms` fields allows you to select a single or multiple streaming platform connection. It will automatically
fetch the available platforms from the Connections API and pass them to the extension context. The `value` will be an
array of selected platforms. `options` can be omitted. The selectable values will be the intersection of `options` (if
given) and the platforms that are connected to the user account, including the `"own3d"` platform.

```yaml
  - type: platforms
    id: connections
    options:
      - value: twitch
      - value: youtube
      - value: own3d
    attributes:
      label: Platforms
      multiple: false
```

Resulting `values`:

```json:no-line-numbers
{
  "platforms": [
    "twitch",
    "youtube"
  ]
}
```

```json
{
  "context": {
      "connections": [
        {
          "platform": "twitch",
          "channel_id": "1337"
        },
        {
          "platform": "youtube",
          "channel_id": "1337"
        }
      ]
    }
}
```

### Resource Field

::: warning
The `resource` field is currently not supported in the scene editor.
:::

Additional `resource` options may be defined in the `options` array, like in the `dropdown` field. When using the
`multiple` option, the value will be an array of selected values.

```yaml
  - type: resource
    id: alert-set
    attributes:
      label: Alert Set
      description: This is a description
      value: 1337
      multiple: false
      resource:
        resolver: fetch
        endpoint: /v1/alerts-sets
        map:
          label: $.data[*].name
          value: $.data[*].id
```

Resulting `values`:

```json:no-line-numbers
{
  "alert-set": "1337"
}
```

### Select Field

::: warning
**Limited Support**: The `select` field currently only supports the `grid` style.
:::

![Select Field](../../images/fields/select.png)

The `select` field provides different ways to represent a select menu. Options may be defined in the `options` array.

```yaml
  - type: select
    id: my-select
    attributes:
      type: grid
      multiple: false | true
      value: [ option-1 ] # This is always an array
    options:
      - label: Option 1 with icon
        value: option-1
        icon: sparkles # Fontawesome Icon
      - label: Option 2 with image
        value: option-2
        image: images/option-2-thumbnail.png # Path to image in the extension
```

Resulting `values`:

```json:no-line-numbers
{
  "my-select": [ "option-1" ]
}
```

### Slider Field

![Select Field](../../images/fields/slider.png)

The `slider` field provides a beautiful slider that can be used to select a value. The `min`, `max` & `step` values are
required.

```yaml
  - type: slider
    id: age
    attributes:
      label: Age
      value: 18
      min: 13
      max: 99
      step: 1
```

Resulting `values`:

```json:no-line-numbers
{
  "age": 18
}
```

### Tags Field

![Tags Field](../../images/fields/tags.png)

The `tags` field allow you to freely type in a list of words. This field is useful for adding a list of users, for
which may be included or excluded from a feature, for example.

```yaml
  - type: tags
    id: ignored-users
    attributes:
      label: Ignored Users
      description: The users that will be ignored
      value:
        - user1
        - user2
```

Resulting `values`:

```json:no-line-numbers
{
  "ignored-users": [ "user1", "user2" ]
}
```

### Volume Field

![Volume Field](../../images/fields/volume.png)

The `volume` field provides a beautiful slider that can be used to select a volume value. The `value` is required and must be a number between 0 and 1.

```yaml
  - type: volume
    id: volume
    attributes:
      label: Volume
      value: 0.5
```

Resulting `values`:

```json:no-line-numbers
{
  "volume": 0.5
}
```

## Organizing Fields

Sometimes it is necessary to group fields together. This allows you to structure the form in a more appealing way and
makes it easier for the user to understand the form. The following fields can be used to group fields:

| Field                         | Description                                                               |
|-------------------------------|---------------------------------------------------------------------------|
| [Accordion](#accordion-field) | A group of fields that can be collapsed and expanded.                     |
| [Group](#group-field)         | Visually combines other fields into a group.                              |
| [Search](#search-field)       | Makes it possible to search through fields and their ancestors.           |
| [Tabs](#tabs-field)           | Provides a tab bar with defined tabs to structure and group other fields. |

### Accordion Field

The `accordion` field can be used to group any number of other fields.

![Accordion Field](../../images/fields/accordion-1.png)
![Accordion Field open](../../images/fields/accordion-2.png)

```yaml
  - type: accordion
    id: my-accordion
    attributes:
      label: My Accordion
    fields:
      - type: boolean
        id: random
        attributes:
          label: Random
          description: This is a description
          value: true
      - type: input
        id: text
        attributes:
          label: Text
          description: This is a description
          value: Hello World
          type: text
      - ...
```

The field does not store any values.

### Group Field

![Group Field](../../images/fields/group.png)

The `group` field can be used to visually combine other fields into a group.

```yaml
  - type: group
    id: my-group
    attributes:
      label: My Group
    fields:
      - type: boolean
        id: random
        attributes:
          label: Random
          description: This is a description
          value: true
      - type: input
        id: text
        attributes:
          label: Text
          description: This is a description
          value: Hello World
          type: text
      - ...
```

The field does not store any values.

### Search Field

![Search Field](../../images/fields/search.png)

The `search` field can be used to group any number of other fields and search through them and all of their ancestors.
Searched ancestor fields: `label`, `description`, `title`, `value`

```yaml
  - type: search
    id: my-search
    fields:
      - type: boolean
        id: random
        attributes:
          label: Random
          description: This is a description
          value: true
      - type: input
        id: text
        attributes:
          label: Text
          description: This is a description
          value: Hello World
          type: text
      - ...
```

The field does not store any values.

### Tabs Field

![Tabs Field](../../images/fields/tabs.png)

The `tabs` field provides a tab bar with defined tabs to structure and group other fields. Recommended to be used as the
top level field. The optional `templates` field in a tab specified the pre-selected tab when the user selects templates
in the configuration menu.

```yaml
  - type: tabs
    id: my-tabs
    tabs:
      - label: Tab1
        fields:
          - type: boolean
            id: random
            attributes:
              label: Random
              description: This is a description
              value: true
          - ...
      - label: Tab2
        templates: true
        fields:
          - type: input
            id: text
            attributes:
              label: Text
              description: This is a description
              value: Hello World
              type: text
          - ...
```

## Conditional Fields

::: tip
Conditional fields require additional review and may delay the review process. Please use them only when necessary and
avoid using them for complex logic since they will decrease the performance of the form.
:::

Conditional fields allow you to show or hide fields based on the value of another field. Conditional fields are defined
using the `if` attribute. The `if` attribute must be a valid JavaScript expression that returns a boolean value, and it
can be used either for the field itself or for values in the `options` array. As of now, only `values` are available in
the context.

The following example shows how to use conditional fields in multiple ways:

```yaml
  - id: theme
    type: dropdown
    options:
      - label: Default
        value: default
      - label: Legacy
        value: legacy
      - label: Bubbles
        value: bubbles
      - label: Zwietracht
        value: discord
    attributes:
      label: Theme
      value: default
  - id: options
    type: checkbox
    options:
      - label: Test Mode
        value: test-mode
      - if: "['default', 'legacy'].includes(values.theme)"
        label: Show Badges
        value: show-badges
        checked: true
      - if: "['default', 'legacy'].includes(values.theme)"
        label: Show Avatars
        value: show-avatars
      - label: Hide Old Messages
        value: hide-old-messages
      - label: Hide Commands
        value: hide-commands
    attributes:
      label: Options
  - id: message-timeout
    if: values.options.includes('hide-old-messages')
    type: input
    attributes:
      type: number
      label: Message Cleanup
      value: 30
      description: The number of seconds to cleanup
```

## Receiving Values

### Using the API

The values are received using the [TBD](https://example.com) endpoint. The following example shows how data is
represented in the API:

```json
{
  "values": {
    "resource": "1337",
    "text": "Hello World",
    "dropdown": 2,
    "checkbox": [
      "code-of-conduct"
    ],
    "font-settings": {
      "font-family": "Impact",
      "font-style": "bold",
      "font-size": 14
    },
    "ignored-users": [
      "user1",
      "user2"
    ],
    "image": {
      "id": "98f9fd85-0832-44fa-87d1-e24d9741f632",
      "type": "file"
    }
  }
}
```

### Using the Extension Helper

The values are received using the [Extension Helper](extension-helper.md) method `OWN3D.ext.onContext(...)`. The
following example shows how to receive the values from the form:

```typescript
OWN3D.ext.onContext((context, changed) => {
    // context['inputs'] contains the current inputs (TBC)
    // context['values'] contains the values from the form
});
```

![img.png](../../images/extension-context.png)

## Demo-Mode
Add `has_demo_mode: true` to the manifest.yaml. This will add a "Demo-Mode"-Box to the Settings in the Scene-Builder.

```yaml
id: 98f9fab0-0714-46d8-ac77-d57130a1dc88
inputs:
  [...]
has_demo_mode: true
```

![test-mode.png](../../images/extension-test-mode.png)

Changing the toggle, the Supervisor gets an update:

```js
OWN3D.ext.onContext((context, changed) => {
  // changed => ['demo_mode']
  // context['demo_mode'] => true|false
});
```
