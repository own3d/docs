# Extension Helper <Badge text="closed beta" type="warning"/>

## Terminology

- **Extension**: A piece of software that can be installed on OWN3D to add functionality.
- **ext-types**: A set of typescript definitions for the extension helper.
- **Extension Helper**: A piece of software run within the extension iframe that provides a set of functions communicate
  with the supervisor.
- **Extension Supervisor**: A piece of software acting as a bridge between the extension and the OWN3D platform.

## How this helper works

The extension helper is a piece of software that runs within the extension iframe. It provides a set of functions to
communicate with the extension supervisor. The supervisor is within the OWN3D platform and acts as a bridge between the
extension and the platform.

## Use the extension helper within your extension

1. Install the package for typed definitions

```bash
yarn add own3d/ext-types
```

2. Add the extension helper script to your extension

> This script must be added as the first script before any other scripts to pass the review.

```html
<script src="https://extension-files.ext-own3d.tv/latest/own3d-ext.js"></script>
```

3. Use the extension helper

```vue

<script>
console.log(`Running ${OWN3D.ext.version} on ${OWN3D.ext.environment}`);

OWN3D.ext.onAuthorized((data) => {
  console.log('onAuthorized', data);
});

OWN3D.ext.onContext((context, changed) => {
  for (const key of changed) {
    console.log(`Context changed ${context[key]}`);
  }
});

OWN3D.ext.socket.on('notifysub', (data) => {
  console.log('Got notify-sub event', data);
});

OWN3D.ext.socket.on('browser-source-updated', (data) => {
  console.log('Got browser-source-updated event', data);
});
</script>
```