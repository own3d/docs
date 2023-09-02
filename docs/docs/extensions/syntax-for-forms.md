# Syntax for Forms <Badge text="closed beta" type="warning"/>

## About YAML Syntax

YAML is a human-readable data-serialization language. It is commonly used for configuration files and in applications
where data is being stored or transmitted. YAML targets many of the same communications applications as Extensible
Markup Language (XML). YAML is a superset of JSON, and YAML files can be parsed as JSON.

## Native Inputs

Native inputs are inputs that are already available in the browser source. They are not defined in the form file.
These are the native inputs (w-full = width-full; refers to the width of the form input):

- **Title** (`w-full`)
- **X-Position** (`w-1/2`), **Y-Position** (`w-1/2`)
- **Width** (`w-1/2`), **Height** (`w-1/2`)
- **Opacity** (`w-full`)

## Creating Forms For Browser Sources

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
    validations:
      required: true
```

### Limitations

- The `id` of the form must match the `id` of the extension.
- The `id` of the inputs must be unique and cannot be `extension`.
- The `id` of the inputs must be an alphanumeric string with a length of 3-32 characters and may contain dashes and
  underscores.

## Resource Field

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
    validations:
      required: true
```

Resulting `values`:

```json
{
  "values": {
    "alert-set": "1337"
  }
}
```

### Input Field

The `input` field provides a simple text input. It can be used for text, numbers, and other types of data.

```yaml
  - type: input
    id: text
    attributes:
      label: Text
      description: This is a description
      value: Hello World
    validations:
      required: true
```

Resulting `values`:

```json
{
  "values": {
    "text": "Hello World"
  }
}
```

### Dropdown Field

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

```json
{
  "values": {
    "dropdown": "2"
  }
}
```

### Checkbox Field

The `checkbox` field may be used to represent a boolean / "on/off" value. The resulting `values` will be represented as
a array list of options which are checked using the `value` as their identifier.

```yaml
  - type: checkbox
    id: checkbox
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

```json
{
  "values": {
    "checkbox": [
      "option-1"
    ]
  }
}
```

### Boolean Field

The `boolean` field may be used to represent a boolean / "on/off" value. The resulting `values` will be represented as
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

```json
{
  "values": {
    "random": true
  }
}
```

### Chips Field

The `chips` field provides a set of chips that can be selected. It behaves exactly like a `dropdown` field, but with a
different UI.

```yaml
  - type: chips
    id: font-style
    attributes:
      label: Font Style
      value: bold
    options:
      - label: Bold
        value: bold
        icon: bold
      - label: Italic
        value: italic
        icon: italic
```

Resulting `values`:

```json
{
  "values": {
    "font-style": "bold"
  }
}
```

### Font Settings Field

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
        letter-spacing: normal
        line-height: 1.2
```

Resulting `values`:

```json
{
  "values": {
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
}
```

### Slider Field

The `slider` field provides a beautiful slider that can be used to select a value. The `min` and `max` values are
required.

```yaml
  - type: slider
    id: font-size
    attributes:
      label: Font Size
      value: 14
      min: 10
      max: 50
```

Resulting `values`:

```json
{
  "values": {
    "font-size": 14
  }
}
```

### Tags Field

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

```json
{
  "values": {
    "ignored-users": [
      "user1",
      "user2"
    ]
  }
}
```

### File Field

The `file` field allows you to upload a file. The `mimeTypes` array is required and must contain a list of mime types
which are allowed to be uploaded but limited to the following types: `mp3`, `mp4`, `webm`, `wav`, `png`, `jpg`, `jpeg`
and `gif`. The max file size is 5MB by default.

Multiple files can be uploaded by setting the `multiple` attribute to `true`. When multiple is set to `true`, the
`value` will be an array of file ids & types.

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

```json
{
  "values": {
    "image": {
      "id": "1337",
      "type": "file"
    }
  }
}
```

#### How Files Are Stored

When a file is uploaded using this field, OWN3D will store the file for you. The file will be stored in the OWN3D CDN
and will be available until the file is deleted. The `value` of the field will be the file id which can be used to
retrieve the file using the [File Storage API](../file-storage.md).

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
    "font-family": "Impact",
    "font-style": "bold",
    "font-size": 14,
    "ignored-users": [
      "user1",
      "user2"
    ],
    "image": "98f9fd85-0832-44fa-87d1-e24d9741f632"
  }
}
```

### Using the Extension Helper

The values are received using the [Extension Helper](extension-helper.md) method `OWN3D.ext.onContext(...)`. The
following example shows how to receive the values from the form:

```typescript
OWN3D.ext.onContext((context, changed) => {
    // context['form'] contains the current form (TBC)
    // context['values'] contains the values from the form
});
```

## Examples

### Example: `Alert Box` form

```yaml
id: 98fa037b-16c1-43ef-bcde-7144d243bac1
inputs:
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
    options:
      - label: Default Alert Set
        value: default
    validations:
      required: true
```

Values:

```json
{
  "values": {
    "alert-set": "1337"
  }
}
```

### Example: `Emote Wall` form

```yaml
id: 98f9fac6-88ad-4a81-a508-30d00e0baafb
inputs:
  - type: dropdown
    id: animation
    attributes:
      label: Animation
      value: 2
      width: 1/2
    options:
      - label: Slide
        value: slide
      - label: Balloon Up
        value: balloon-up
      - label: Float Up
        value: float-up
      - label: Waterfall
        value: waterfall
      - label: Random
        value: random
  - type: checkbox
    id: options
    attributes:
      label: Checkbox
      description: This is a description
    options:
      - label: Spam Filter
        value: spam-filter
        checked: true
  - type: slider
    id: emotes-limit
    attributes:
      label: Emotes Limit
      description: The maximum number of emotes to display
      value: 100
      min: 1
      max: 250
  - type: slider
    id: duration
    attributes:
      label: Duration
      description: The duration of the animation
      value: 7
      min: 1
      max: 20
  - type: slider
    id: emote-size
    attributes:
      label: Emote Size
      description: The size of the emotes
      value: 70
      min: 10
      max: 250
```

Values:

```json
{
  "values": {
    "animation": "slide",
    "options": [
      "spam-filter"
    ],
    "emotes-limit": 100,
    "duration": 7,
    "emote-size": 70
  }
}
```

### Example: `Chat` form

```yaml
id: 98f9fad4-24f7-477e-ab9d-2498c4b49d41
inputs:
  - type: checkbox
    id: options
    attributes:
      label: Options
    options:
      - label: Show Badges
        value: show-badges
        checked: true
      - label: Hide Old Chat Messages
        value: hide-old-chat-messages
  - type: slider
    id: font-size
    attributes:
      label: Font Size
      value: 14
      min: 10
      max: 50
  - type: color
    id: font-color
    attributes:
      label: Font Color
      description: The color of the font
      value: #ffffff
  - type: chips
    id: font-style
    attributes:
      label: Font Style
      value: bold
    options:
      - label: Bold
        value: bold
        icon: bold
      - label: Italic
        value: italic
        icon: italic
      - label: Underline
        value: underline
        icon: underline
  - type: font-family
    id: font-family
    attributes:
      label: Font Family
      value: Impact
  - type: chips
    id: text-align
    attributes:
      label: Text Align
      value: left
    options:
      - label: Left
        value: left
        icon: align-left
      - label: Center
        value: center
        icon: align-center
      - label: Right
        value: right
        icon: align-right
  - type: tags
    id: ignored-users
    attributes:
      label: Ignored Users
      description: The users that will be ignored
      value: [ ]
```

Values:

```json
{
  "values": {
    "options": [
      "show-badges",
      "hide-old-chat-messages"
    ],
    "font-size": 14,
    "font-color": "#ffffff",
    "font-style": "bold",
    "font-family": "Impact",
    "text-align": "left",
    "ignored-users": [
      "user1",
      "user2"
    ]
  }
}
```

### Example: `Text` form

```yaml
id: 98f9fae2-4535-4930-bfa8-5bdbaa4a9b24
inputs:
  - type: input
    id: text
    attributes:
      label: Text
      description: This is a description
      value: Hello World
    validations:
      required: true
  - type: slider
    id: font-size
    attributes:
      label: Font Size
      value: 14
      min: 10
      max: 50
  - type: color
    id: font-color
    attributes:
      label: Font Color
      description: The color of the font
      value: #ffffff
  - type: chips
    id: font-style
    attributes:
      label: Font Style
      value: bold
    options:
      - label: Bold
        value: bold
        icon: bold
      - label: Italic
        value: italic
        icon: italic
      - label: Underline
        value: underline
        icon: underline
  - type: font-family
    id: font-family
    attributes:
      label: Font Family
      value: Impact
  - type: chips
    id: text-align
    attributes:
      label: Text Align
      value: left
    options:
      - label: Left
        value: left
        icon: align-left
      - label: Center
        value: center
        icon: align-center
      - label: Right
        value: right
        icon: align-right
```

Values:

```json
{
  "values": {
    "text": "Hello World",
    "font-size": 14,
    "font-color": "#ffffff",
    "font-style": "bold",
    "font-family": "Impact",
    "text-align": "left"
  }
}
```

### Example: `Image` form

```yaml
id: 98f9faea-209d-462a-94b5-2da1ba0367d4
inputs:
  - type: file
    id: image
    attributes:
      label: Image
      mimeTypes:
        - image/*
    validations:
      required: true
  - type: dropdown
    id: display
    attributes:
      label: Display
      value: cover
    options:
      - label: Cover
        value: cover
      - label: Contain
        value: contain
      - label: Fill
        value: fill
      - label: None
        value: none
```

Values:

```json
{
  "values": {
    "image": {
      "id": "98f9fd85-0832-44fa-87d1-e24d9741f632",
      "type": "file"
    },
    "display": "cover"
  }
}
```

### Example: `Image Carousel` form

```yaml
id: 98f9faea-209d-462a-94b5-2da1ba0367d4
inputs:
  - type: file
    id: images
    attributes:
      label: Image
      multiple: true
      mimeTypes:
        - image/*
    validations:
      required: true
  - type: dropdown
    id: display
    attributes:
      label: Display
      value: cover
    options:
      - label: Cover
        value: cover
      - label: Contain
        value: contain
      - label: Fill
        value: fill
      - label: None
        value: none
  - type: input
    id: duration
    attributes:
      label: Duration
      description: The duration of each image in the carousel
      value: 5
    validations:
      required: true
  - type: input
    id: delay
    attributes:
      label: Delay
      description: The delay between each image in the carousel
      value: 0
    validations:
      required: true
  - type: input
    id: fade-in-duration
    attributes:
      label: Fade In Duration
      description: The duration of the fade in animation
      value: 0
    validations:
      required: true
  - type: input
    id: fade-out-duration
    attributes:
      label: Fade Out Duration
      description: The duration of the fade out animation
      value: 0
    validations:
      required: true
  - type: boolean
    id: random
    attributes:
      label: Random
      description: Whether the images should be displayed in a random order
      value: true
```

Values:

```json
{
  "values": {
    "image": [
      {
        "id": "98f9fd85-0832-44fa-87d1-e24d9741f632",
        "type": "file"
      },
      {
        "id": "98f9fd85-0832-44fa-87d1-e24d9741f632",
        "type": "file"
      }
    ],
    "display": "cover"
  }
}
```

### Example: `Video` form

```yaml
id: 98fb933d-04b6-4a75-bfb2-a0fbae83ad66
inputs:
  - type: file
    id: video
    attributes:
      label: Video
      mimeTypes:
        - video/*
    validations:
      required: true
  - type: dropdown
    id: display
    attributes:
      label: Display
      value: cover
    options:
      - label: Cover
        value: cover
      - label: Contain
        value: contain
      - label: Fill
        value: fill
      - label: None
        value: none
```

Values:

```json
{
  "values": {
    "video": {
      "id": "98f9fd85-0832-44fa-87d1-e24d9741f632",
      "type": "file"
    },
    "display": "cover"
  }
}
```

### Example: `GIF` form

TBD

### Example: `Browser Source` form

```yaml
id: 98fb93bc-4232-4ead-a9fb-4cb74343a103
inputs:
  - type: input
    id: url
    attributes:
      label: URL
      description: The URL of the browser source
      value: https://www.google.com
    validations:
      required: true
```

### Example: `HTML` form

```yaml
id: 98fb93b0-63ef-4f93-a8e2-63d298467088
inputs:
  - type: textarea
    id: html
    attributes:
      label: HTML
      description: The HTML of the source
      value: |
        <html>
          <head>
            <title>HTML Source</title>
          </head>
          <body>
            <h1>Hello World</h1>
          </body>
        </html>
    validations:
      required: true
  - type: textarea
    id: css
    attributes:
      label: CSS
      description: The CSS of the source
      value: |
        body {
          background-color: #000000;
        }
  - type: textarea
    id: js
    attributes:
      label: JavaScript
      description: The JavaScript of the source
      value: |
        console.log('Hello World');
```

### Example: `Color Source` form

```yaml
id: 98fb93b0-63ef-4f93-a8e2-63d298467088
inputs:
  - type: color
    id: color
    attributes:
      label: Color
      description: The color of the source
      value: #000000
    validations:
      required: true
```

### Example: `Scene Source` form <Badge text="experimental" type="warning"/>

```yaml
id: 98fb93b0-63ef-4f93-a8e2-63d298467088
inputs:
  - type: resource
    id: scene
    attributes:
      label: Scene
      description: This is a description
      value: 1337
      multiple: false
      resource:
        resolver: fetch
        endpoint: /v1/scene-editor/scenes
    validations:
      required: true
```

### Example: `Goal Bars` form

```yaml
id: 98fb9908-094c-4345-a951-49dc88e4fea3
inputs:
  - type: resource
    id: goal-bar
    attributes:
      label: Goal Bar
      description: This is a description
      value: 1337
      multiple: false
    resource:
      resolver: fetch
      endpoint: /v1/goal-bars
    validations:
      required: true
```

### Example: `Countdown` form

```yaml
id: 98fb998a-74e4-4345-be8a-efadbe234a8d
inputs:
  - type: input
    id: seconds
    attributes:
      label: Seconds
      description: The number of seconds to count down
      value: 60
    validations:
      required: true
```

### Example: `Label` form

```yaml
id: 98fb998a-74e4-4345-be8a-efadbe234a8d
inputs:
  - type: dropdown
    id: type
    attributes:
      label: Type
      value: latest-follower
    options:
      - label: Latest Follower
        value: latest-follower
      - label: Latest Subscriber
        value: latest-subscriber
      - label: Latest Cheer
        value: latest-cheer
      - label: Latest Donation
        value: latest-donation
      - label: Top Cheer
        value: top-cheer
      - label: Top Donation
        value: top-donation
      - label: Countdown
        value: countdown
    validations:
      required: true
  - type: color
    id: color
    attributes:
      label: Color
      value: "#ffffff"
    validations:
      required: true
  - type: font-family
    id: font-family
    attributes:
      label: Font Family
      value: Impact
    validations:
      required: true
```