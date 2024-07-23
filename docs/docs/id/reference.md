# ID API Reference

## Base URL

The base URL for the ID API is `https://id.stream.tv/api/`.

## Table of Contents


### Get User

Gets the current authenticated user.

```http
GET https://id.stream.tv/api/users/@me
```

### Get User Connections

Gets the current authenticated user's connections.

```http
GET https://id.stream.tv/api/users/@me/connections
```

### Update Email

Updates the current authenticated user's email.

```http
POST https://id.stream.tv/api/users/@me/update-email
```

### Associate Password

Only for shadow accounts.

Associates a password with the current authenticated user.

```http
POST https://id.stream.tv/api/users/@me/associate-password
```