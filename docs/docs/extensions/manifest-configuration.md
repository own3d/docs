# Manifest Configuration <Badge text="closed beta" type="warning"/>

The manifest file is a JSON file which contains all the information about your extension. It is used to display
information about your extension in the OWN3D dashboard. It also contains the configuration for the
extension.

```json
{
  "id": "2c0135a2-d8a6-4002-b545-0eaf9780f9db",
  "name": "Example Extension",
  "summary": "This is an example extension",
  "description": "This is an example extension",
  "images": {
    "logo": "images/logo.png",
    "icon": "rocket-launch",
    "screenshots": [
      "images/screenshot1.png",
      "images/screenshot2.png"
    ]
  },
  "category": "other",
  "keywords": [
    "example",
    "extension"
  ],
  "version": "1.0.0",
  "author": {
    "name": "OWN3D",
    "url": "https://own3d.gg",
    "eula": "https://example.com/eula.html",
    "privacy": "https://example.com/privacy.html",
    "support": "https://example.com/support.html"
  },
  "permissions": {
    "tabs": {
      "name": "Tabs",
      "description": "",
      "default": true
    },
    "bookmarks": {
      "name":  "Bookmarks",
      "description": "",
      "default": true
    },
    "unlimitedStorage": {
      "name":  "Unlimited Storage",
      "description": "",
      "default": true
    }
  },
  "capabilities": [
    {
      "mode": "standalone",
      "path": "index.html"
    },
    {
      "mode": "widget",
      "path": "widget.html"
    },
    {
      "mode": "component",
      "path": "component.html"
    }
  ]
}
```