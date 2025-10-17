# Usage of Tokens

In our [Extension SDK](sdk.md#auth) we provide two tokens: `client_token` and `token`. Each token has a
different purpose and should be used in different scenarios.

It's very important to understand the difference between the two tokens and how they are used. To avoid any
circumvention during the development and review of your extension. Therefore, we have created this guide to help you
understand the difference between the two tokens and how they are used.

## Usage of Extension Client Tokens

The `onAuthorized` callback generates two distinct JWT tokens: `client_token` and `token`, each catering to different
requirements.

The `client_token` is tailored for frontend applications, enabling direct interaction with the OWN3D API in your
extension without necessitating a backend. This token, obtained during the `onAuthorized` trigger, operates like a
standard OAuth2 Access Token, as described in the [Authorization](../authorization.md) section. It's designed to ensure
security and efficiency in API communication, with limited scopes and a shorter lifespan.

```js
OWN3D.ext.onAuthorized(async (data) => {
    console.log('On authorized', data);
    user.value = await fetch('https://id.stream.tv/api/users', {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${data.client_token}`,
        },
    }).then((res) => res.json());
});
```

## Usage of Extension Tokens

The `token` property of the `onAuthorized` callback is a JWT token that should be used for any Extension Backend request
for authentication. It contains all the information about the user and the channel that is required for authentication
and authorization.

### JWT as Access Token

JWT can be used as an access token for your backend to prevent unauthorized access to your backend. They are often used
as Bearer tokens, which your backend can use to verify the identity of the user and the channel before processing the
request.

```js
OWN3D.ext.onAuthorized(async (data) => {
    console.log('On authorized', data);
    const response = await fetch('https://example.com/api/extension', {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${data.token}`,
        },
    }).then((res) => res.json());
});
```

When using our [Example JWT Express App](#example-create-a-express-application-with-jwt-authentication) you will get
the following response:

```json
{
  "message": "Token is valid",
  "user": {
    "user_id": "1",
    "channel_id": "1",
    "client_id": "98ea4168-7aa6-4596-82f7-46fac553bcd6",
    "mode": "standalone",
    "scopes": [
      "*"
    ]
  }
}
```

#### Verify JWT Tokens

Each Extension has its own secret key that is used to sign the JWT tokens by our backend. You can use this secret key
to verify the JWT tokens in your backend.

```js
const jwt = require('jsonwebtoken')

try {
    const decoded = jwt.verify(token, process.env.EXTENSION_SECRET)
} catch (err) {
    // invalid token
}
```

The decoded token will contain the following information:

```json
{
  "user_id": "1",
  "channel_id": "1",
  "client_id": "98ea4168-7aa6-4596-82f7-46fac553bcd6",
  "mode": "standalone",
  "scopes": [
    "*"
  ]
}
```

## Example: Create a Express application with JWT authentication

To create an Express application that verifies a JWT token from a Bearer authorization header, you'll need to set up a
few components:

1. **Express Framework**: A popular web application framework for Node.js.
2. **jsonwebtoken Package**: To decode and verify JWT tokens.
3. **dotenv Package**: To manage environment variables.

Here's a step-by-step guide to create the application:

### Step 1: Initialize a Node.js Project

Initialize a new Node.js project, if you haven't done so already:

```bash
mkdir jwt-express-app
cd jwt-express-app
npm init -y
```

Modify your `package.json` to add `"type": "module"`:

```json
{
  "name": "jwt-express-app",
  "version": "1.0.0",
  "type": "module",
  ...
}
```

### Step 2: Install Required Packages

Install Express and the necessary packages:

```bash
npm install express jsonwebtoken dotenv
```

### Step 3: Create Middleware for JWT Verification

Create a file named `verifyToken.js` for the middleware:

```javascript
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.substring(7, authHeader.length);

        jwt.verify(token, process.env.EXTENSION_SECRET, (err, decoded) => {
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
```

### Step 4: Set Up the Express Application

Create an `app.js` file:

```javascript
import dotenv from 'dotenv';
import express from 'express';
import { verifyToken } from './verifyToken.js';

dotenv.config();

const app = express();

app.get('/api/extension', verifyToken, (req, res) => {
    res.json({
        message: 'Token is valid',
        user: req.user // Use the decoded token information from the middleware
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

### Step 5: Configure Environment Variables

Create a `.env` file in the root of your project:

```
EXTENSION_SECRET=your_jwt_secret
```

Replace `your_jwt_secret` with your actual JWT secret.

### Step 6: Run the Application

Run your application using Node.js:

```bash
node app.js
```

Remember to manage your `EXTENSION_SECRET` securely, especially in production environments.
