# OWN3D Pro API

## Getting Started

The OWN3D Pro API is a RESTful API that allows you to access your own3d.pro account. 

### Step 1: Create a new client

Before you getting started with the OWN3D Pro API, you need to create a new client.
You can get the client id and secret by following the steps in the [Client Registration](authorization.md#client-registration) section. 
If you already have a client, you can skip this step.

### Step 2: Authenticate

After requesting your client id and secret, you need to authenticate yourself.
This can be done by following the steps in the [Authorization Code Flow](authorization.md#authorization-code-flow) section. 
If you call endpoints which require [Scopes](authorization.md#scopes), you need to pass those scopes as a parameter to the authorize endpoint.

> If you are familiar with laravel, you may want to check our [own3d/id](https://github.com/own3d/id). It is a laravel package that provides a simple way to work with our API's.

### Step 3: Get your own3d.pro account information

After you have authenticated yourself, you can get your own3d.pro account information by using the `https://api.own3d.pro/v1/users` endpoint with the access token you have received. 
An access token will be added as an Authorization header to the request.

```curl
curl -X GET https://api.own3d.pro/v1/users \
  -H "Authorization: Bearer <access_token>"
```

## API Reference

<open-api-documentation specs="https://api.own3d.pro/docs" base-url="https://api.own3d.pro" />