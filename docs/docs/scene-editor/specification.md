# Scene Editor Scene Specification

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and "
OPTIONAL" in this document are to be interpreted as described in
[RFC 2119](https://www.rfc-editor.org/rfc/rfc2119.txt).

## Abstract

This documentation outlines the attributes and their descriptions for a Scene in the Scene Editor API response.

## Restrictions

### Folders

- Each scene MUST have exactly one folder with the `is_root_folder` attribute set to `true`.
- Each folder MAY have multiple children with the `folderable_type` attribute set to `source`.
- Only the root folder SHALL have children with the `folderable_type` attribute set to `folder`.
- The resulting folder depth MUST NOT exceed two levels (root folder and children).

### Embedding Scenes

- Scenes SHOULD be embedded in your application using the `scene` source type.
- Recursive embedding MUST be blocked to prevent infinite loops.
- The maximum depth of embedding SHOULD be limited to three levels.

## Scene Attributes

| Attribute            | Type    | Description                                                                     |
|----------------------|---------|---------------------------------------------------------------------------------|
| id                   | String  | Unique identifier for the scene.                                                |
| owner_id             | String  | Identifier of the owner of the scene.                                           |
| favourite            | Boolean | Indicates whether the scene is marked as a favorite.                            |
| parent_collection_id | String  | Identifier of the parent collection, if any.                                    |
| name                 | String  | Name of the scene.                                                              |
| canvas               | Object  | Specifications of the canvas (width and height).                                |
| layers               | Array   | Array of layer objects containing id and name.                                  |
| created_at           | String  | Timestamp indicating when the scene was created.                                |
| updated_at           | String  | Timestamp indicating when the scene was last updated.                           |
| deleted_at           | String  | Timestamp indicating when the scene was deleted, if at all.                     |
| thumbnail_url        | String  | URL of the thumbnail image for the scene.                                       |
| restrictions         | Object  | Restrictions applied to the scene (watermark, subscription, exclusive content). |
| folders              | Object  | Specifications of the folders within the scene.                                 |
| sources              | Object  | Specifications of the sources within the scene.                                 |

### Example:

```json
{
  "id": "9a8e3a6d-b8c3-4ce8-ac2e-ec63aaec8eeb",
  "owner_id": "1",
  "favourite": false,
  "parent_collection_id": null,
  "name": "New Scene",
  "canvas": {
    "width": 1920,
    "height": 1080
  },
  "layers": [
    {
      "id": "foreground",
      "name": "Foreground"
    },
    {
      "id": "background",
      "name": "Background"
    }
  ],
  "created_at": "2023-11-07T11:29:23.000000Z",
  "updated_at": "2024-03-28T09:30:23.000000Z",
  "deleted_at": null,
  "thumbnail_url": "https://assets.cdn.own3d.tv/production/pro/scene-editor-scenes/9a8e3a6d-b8c3-4ce8-ac2e-ec63aaec8eeb/thumbnail_X3tArU8Z.jpeg",
  "restrictions": {
    "free_user_watermark": false,
    "pro_subscription_required": false,
    "exclusive_content_required": false
  },
  "folders": {
    ...
  },
  "sources": {
    ...
  }
}
```

## Canvas Attributes

| Attribute | Type    | Description           |
|-----------|---------|-----------------------|
| width     | Integer | Width of the canvas.  |
| height    | Integer | Height of the canvas. |

### Example:

```json
"canvas": {
"width": 1920,
"height": 1080
}
```

## Layer Attributes

| Attribute | Type   | Description                      |
|-----------|--------|----------------------------------|
| id        | String | Unique identifier for the layer. |
| name      | String | Name of the layer.               |

### Example:

```json
"layers": [
{
"id": "foreground",
"name": "Foreground"
},
{
"id": "background",
"name": "Background"
}
]
```

## Folder Children Attributes

Each folder children contains the following attributes:

| Attribute       | Type    | Description                             |
|-----------------|---------|-----------------------------------------|
| layer_id        | String  | Identifier of the associated layer.     |
| folderable_type | String  | Type of folderable item (source, etc.). |
| folderable_id   | String  | Identifier of the folderable item.      |
| position        | Object  | Position specifications (x and y).      |
| crop            | Object  | Crop specifications.                    |
| rotation        | Object  | Rotation specifications (x, y, and z).  |
| scale           | Object  | Scale specifications (x and y).         |
| opacity         | Integer | Opacity value.                          |
| options         | Object  | Additional options (locked, visible).   |

### Example:

```json
{
  "folders": {
    "9a8e3a6d-ba2d-466a-8a6a-2f3f94aec529": {
      "name": "Root",
      "is_root_folder": true,
      "children": [
        {
          "layer_id": "foreground",
          "folderable_type": "source",
          "folderable_id": "9ba47936-9df4-4ce0-a87a-7218782f0a78",
          "position": {
            ...
          },
          "crop": {
            ...
          },
          "rotation": {
            ...
          },
          "scale": {
            ...
          },
          "effects": [
            {
              "type": "glitch",
              "attributes": {
                "color": "#000000",
                "blur": 10,
                "offset": {
                  "x": 5,
                  "y": 5
                }
              }
            },
            {
              "type": "gradient-border",
              "attributes": {
                "color": "#000000",
                "blur": 10,
                "offset": {
                  "x": 5,
                  "y": 5
                }
              }
            },
            {
              "type": "curved",
              "attributes": {
                "color": "#000000",
                "blur": 10,
                "offset": {
                  "x": 5,
                  "y": 5
                }
              }
            }
          ],
          "animations": {
            "loop": true,
            "duration": 10,
            "in": {
              "type": "fade-in",
              "attributes": {
                "duration": 2,
                "delay": 1
              }
            },
            "out": {
              "type": "fade-out",
              "attributes": {
                "duration": 2,
                "delay": 1
              }
            },
            "motions": [
              {
                "type": "shake",
                "attributes": {
                  "loop": false,
                  "duration": 1,
                  "delay": 1
                }
              },
              {
                "type": "pulse",
                "attributes": {
                  "loop": true,
                  "duration": 1
                }
              }
            ]
          },
          "opacity": 1,
          "options": {
            "locked": false,
            "visible": true
          }
        }
      ]
    }
  }
}
```

## Source Attributes

Each source contains the following attributes:

| Attribute | Type    | Description                                      |
|-----------|---------|--------------------------------------------------|
| name      | String  | Name of the source.                              |
| type      | String  | Type of the source (text, extension, etc.).      |
| version   | Integer | Version of the source.                           |
| size      | Object  | Size specifications (width and height).          |
| values    | Object  | Specific values depending on the type of source. |

### Example (Text Source):

```json
{
  "9ba47936-9df4-4ce0-a87a-7218782f0a78": {
    "name": "text-Vyp",
    "type": "text",
    "version": 1,
    "size": {
      "width": 856.1171228516869,
      "height": 137.3838319541693
    },
    "values": {
      "text": "Upcoming Next",
      "font-settings": {
        ...
      }
    }
  }
}
```

### Example (Extension Source):

```json
{
  "9ba5dac8-8ad6-4aea-b04d-bd4c872d4c2a": {
    "name": "extension-8AY",
    "type": "extension",
    "version": 1,
    "size": {
      "width": 1459.18196832799,
      "height": 727.2954140883276
    },
    "values": {
      "days": {...},
      "color": "#ff0000",
      "server": "http://45.146.252.122:4001/",
      "extension": {...},
      "day-of-week": "tuesday",
      "interactive": false,
      "font-settings": {...
      }
    }
  }
}
```

