# Edge Functions <Badge text="closed beta" type="warning"/>

![regional-edge-functions.png](..%2F..%2Fimages%2Fregional-edge-functions.png)
## Introduction

Edge Functions are a powerful way to extend the functionality of your extension. They allow you to run serverless
functions at the edge of the network, closer to your users, and provide a way to add server-side custom logic to your
extension.

They are written in TypeScript and JavaScript and run on the OWN3D platform. Edge Functions are triggered by events such
as HTTP requests and can be used to modify the request or response, or to perform custom logic like data validation,
authentication, and authorization.

Under the hood, Edge Functions are powered by [Deno](https://deno.land/), the most productive, secure, and performant
JavaScript and TypeScript runtime. Used by companies like Slack, GitHub, Google, and many others. Deno is backwards
compatible with Node.js built-in APIs and over two million modules on npm. Bring the best of the Node.js ecosystem with
you to Deno.

### Use Cases

#### User Authentication

Edge Functions can be used to authenticate and authorize requests to your extension. This is especially useful when you
want to protect your extension from unauthorized access.

::: tip
You can use JavaScript modules from npm in your Deno programs with the "**npm:**" specifier in your import statements.
:::

```js
import jwt from 'npm:jsonwebtoken';
import express from 'npm:express';

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.substring(7, authHeader.length);

        jwt.verify(token, 'secret', (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid token' });
            }

            req.user = decoded; // Add the decoded token to the request object
            next(); // Proceed to the next middleware or route handler
        });
    } else {
        res.status(401).json({ message: 'No token provided' });
    }
};

const app = express();

app.get('/api/extension', verifyToken, (req, res) => {
    res.json({
        message: 'Token is valid',
        user: req.user // Use the decoded token information from the middleware
    });
});

app.listen(80, () => {
    console.log(`Server running on port 80`);
});
```

## Getting Started

Getting started with OWN3D Edge Functions is easy. The installation process is simple and you can start writing and
deploying your Edge Functions in minutes using our CLI tool.

## Install Deno and the OWN3D CLI

If you haven't already, you need
to [install the Deno runtime](https://docs.deno.com/runtime/manual/getting_started/installation)
and the [OWN3D CLI](#) using the following command:

**Install Deno on Windows:**

```bash
irm https://deno.land/install.ps1 | iex
```

**Install Deno on Linux:**

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```


After installing Deno, you can install the OWN3D CLI using the following command:

```bash
deno install -Arf https://cli.own3d.dev
```

You can confirm `own3d` is installed by running the following command:

```bash
own3d --help
```

Now, you can create a new Edge Function using the OWN3D CLI.

## Write and test a Deno program

You can write a simple Deno program and run it using the following command:

```typescript
Deno.serve(() => new Response("Hello, world!"));
```

You can run the program using the following command:

```bash
deno run --allow-net server.ts
```

## Create a New Edge Function

To create a new Edge Function, you can use the `fn:create` command from the OWN3D CLI. This will create a new directory
with a basic Edge Function template.

```bash
own3d fn:create my-function
```

This will create a new directory called `my-function` with the following structure:

```plaintext
my-function
├── .gitignore
├── .own3d
│   └── manifest.json
└── server.ts
```

### Deploy the Edge Function

To deploy the Edge Function, you can use the `fn:deploy` command from the OWN3D CLI.

```bash
own3d fn:deploy my-function
```

This will deploy the Edge Function and provide you with the URL where it is deployed.

```plaintext
Deploying my-function...

Deployed my-function to https://my-function.fn.ext-own3d.tv/
```

Now, you can use the URL to trigger the Edge Function.

