# OWN3D Pro API

> **Information**: We're about to merge own3d.pro and own3d.tv API's.

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

## API Deprecations

Sometimes we need to deprecate an API endpoint. This means that the endpoint will be removed in the future.
If you are using an endpoint that is marked as deprecated, you should update your application as soon as possible.
We will notify you about the deprecation of an endpoint at least 6 months before it will be removed.

### 2023-02-06

**Deprecation of endpoints**

- TBA

**Deprecated attributes in api responses:**

- Attribute `topic` in `POST /v1/alerts/test` is deprecated (renamed) and will be removed in the future. Please use `template` instead.
- Attribute `categories` of `Alert` is deprecated, use `categories` instead.
- Attribute `alert` of `AlertConfig` is deprecated, avoid using it (it's inaccurate).
- Attribute `goalBar` of `GoalBarConfig` is deprecated, use `goal_bar` instead.
- Attribute `profileImage` of `Linkspree` is deprecated, use `profile_image` instead.
- Attribute `backgroundImage` of `Linkspree` is deprecated, use `background_image` instead.
- Attribute `currencyPrice` of `Plan` is deprecated, use `currency_price` instead.
- Attribute `latestPayment` of `Subscription` is deprecated, use `latest_payment` instead.
- Attribute `actingUser` of `User` is deprecated, use `acting_user` instead.
- Attribute `referralReward` of `User` is deprecated, use `referral_reward` instead.
- Attribute `referralRewards` of `User` is deprecated, use `referral_rewards` instead.

## API Reference

<open-api-documentation specs="http://own3dpro.test/openapi" base-url="https://api.own3d.pro" />