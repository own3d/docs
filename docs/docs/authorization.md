# Authorization

## What is OAuth2?

It is a standard protocol for allowing users to sign in to applications without requiring users to enter their
credentials. Many platforms like Google, Facebook, and GitHub use OAuth2.

### Terminology

- **Client**: The application that is requesting access to a user's data.
- **Authorization Code**: A code that is used to obtain an access token.
- **Access Token**: A user token that grants the application access to a user's data.
- **App Access Token**: A machine-to-machine app access token that is used to access the application's API.
- **Refresh Token**: A token that is used to obtain a new access token when the current one expires.
- **Scope**: The level of access that the application is requesting.
- **Redirect URI**: The URI that the application should redirect to after the user grants or denies access.
- **Streaming Service**: A live-streaming service like Twitch, YouTube that the user can link to OWN3D.
- **Third-Party Account & Connection**: An account on a third-party service like TikTok, Discord, Spotify that the user
  can link to OWN3D to access the user's data.
- **OWN3D Service**: A service provided by OWN3D like the Pro, Shop, etc.
- **Third-Party App & Service**: An application that uses OWN3D's API's to access the user's data.

## Client Registration

To getting started, with our API's, you need to request a client id and client secret for your Third-Party App &
Service. You can do this by fill out the [OAuth2 Client Registration](https://forms.gle/4miiLAksbFTEGg3c6) form with the
following information:

- Your application's name
- Your application's website
- Your application's description
- Your application's logo
- Your application's privacy policy
- Your application's terms of service
- Your application's redirect URI

## Types of Tokens

We currently support two types of tokens:

| Token Type        | Description                                                                                                                        |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------|
| User Access Token | An access token that grants the application access to a user's data. You can use this token to access the user's data.             |
| App Access Token  | An access token that grants the application access to the application's API. Mostly intended for machine-to-machine communication. |

User Access Tokens and App Access Tokens are both bearer tokens. Bearer tokens are used to authenticate the application.

## Issuing Access Tokens

### Requesting Tokens

Using OAuth2 via the authorization code flow is how most developers are familiar with OAuth2.
When using the authorization code flow, the client will redirect the user to the authorization server to grant access to
the application. The authorization server will then redirect the user back to the application with an authorization code
in the URL. The client will then exchange the authorization code for an access token.

Later, the client can use the access token to access the user's data.

#### Redirecting for Authorization

Once a client has been created, we will use the authorization code flow to get an access token.
To visualize the flow, we will use javascript to redirect the user to the authorization server. You will find your
client id in the [Passport Client](https://console.dev.own3d.tv/resources/passport-clients) section of the OWN3D
Developer Console.

::: tip
Ensure that you have added the redirect URI to
your [Passport Client](https://console.dev.own3d.tv/resources/passport-clients) in the OWN3D Developer Console.
Otherwise, the authorization server will throw a "**Client authentication failed**" error.
:::

```javascript
// Redirect the user to the authorization server
window.location.href = "https://id.stream.tv/oauth/authorize?client_id=<>&redirect_uri=<>&response_type=code&scope=<>";
```

The `prompt` parameter can be used to specify the authentication behavior. The following values are supported:

- `none`: OWN3D ID will always throw an authentication error if the user is not already authenticated.
- `consent`: OWN3D ID always display the authorization approval screen, even if all scopes are already granted.
- `login`: OWN3D ID will always prompt the user to re-login, even if they are already logged in.

If no `prompt` value is provided, the user will be prompted for authorization only if they have not previously
authorized access to the consuming application for the requested scopes.

The `login_fallback` parameter can be used to specify the fallback behavior if the user is not logged in depending on
the `prompt` value. The following values are supported: `email`, `twitch`, `youtube`, `tiktok` and other providers.

#### Approving the Request

The user will then be redirected to the application with the authorization code in the URL. From there, the user must
click on the "Authorize" button to grant the application access to the user's data:

<div style="text-align: center">
<img src="../images/oauth-authorization.png" alt="Authorization Code Flow" style="border: 1px solid #181e23; border-radius: 8px;"/>
</div>

#### Converting Authorization Codes to Access Tokens

After that we use php to get the access token from the authorization server.

```php
use Illuminate\Support\Facades\Http;

// Get the authorization code from the URL
$code = $_GET['code'];
// Exchange the authorization code for an access token using laravel http facades
$response = Http::post('https://id.stream.tv/oauth/token', [
    'client_id' => '<>',
    'client_secret' => '<>',
    'redirect_uri' => '<>',
    'code' => $code,
    'grant_type' => 'authorization_code',
]);
// Get the access token from the response
$access_token = $response->json()['access_token'];
```

If you are familiar with laravel, you may want to check our [own3d/id](https://github.com/own3d/id) package.
It is a laravel package that provides a simple way to work with our API's.

### Requesting All Scopes

If you want to request all scopes, you can use the `*` wildcard.

```javascript
// Redirect the user to the authorization server

window.location.href = "https://id.stream.tv/oauth/authorize?client_id=<>&redirect_uri=<>&response_type=code&scope=*";
```

### Refreshing Tokens

Refresh tokens are used to obtain a new access token when the current one expires.
With the following example, we will use the refresh token flow to get a new access token.

```php
// Get the refresh token from the response
$refresh_token = $response->json()['refresh_token'];
// Exchange the refresh token for a new access token
$response = \Http::post('https://id.stream.tv/oauth/token', [
    'client_id' => '<>',
    'client_secret' => '<>',
    'redirect_uri' => '<>',
    'refresh_token' => $refresh_token,
    'grant_type' => 'refresh_token',
]);
// Get the access token from the response
$access_token = $response->json()['access_token'];
```

### Token Expiration

Typically, the `/oauth/token` endpoint will return a `expires_in` field that indicates the number of seconds until the
token expires.

By default, access tokens expire after 15 days and refresh tokens after 30 days.
This means after expiration of the access token, you will need to use the refresh token within 15 days to get a new
access token.
If you don't use the refresh token within 30 days, the user will be required to re-authenticate.

Personal access tokens having a lifetime of 6 months. These tokens cannot be refreshed automatically.

## Authorization Code Grant With PKCE

The authorization code grant with "Proof Key for Code Exchange" (PKCE) is an extension of the authorization code grant
that is intended to be more secure for public clients.

### Creating the Client

Before your application can issue tokens via the authorization code grant with PKCE, you will need to create a
PKCE-enabled client. A PKCE-enabled client is a client that does not have a client secret.

### Requesting Tokens

#### Code Verifier and Code Challenge

As this authorization grant does not provide a client secret, developers will need to generate a combination of a code
verifier and a code challenge in order to request a token.

The code verifier should be a random string of between 43 and 128 characters containing letters, numbers,
and `-`, `.`, `_`, `~` characters, as defined in the [RFC 7636 specification](https://tools.ietf.org/html/rfc7636).

The code challenge should be a Base64 encoded string with URL and filename-safe characters. The trailing `=` characters
should be removed and no line breaks, whitespace, or other additional characters should be present.

```php
$encoded = base64_encode(hash('sha256', $code_verifier, true));
 
$codeChallenge = strtr(rtrim($encoded, '='), '+/', '-_');
```

or in javascript:

```typescript
function dec2hex(dec) {
    return ('0' + dec.toString(16)).substr(-2)
}

function generateRandomString() {
    const array = new Uint32Array(56 / 2)
    crypto.getRandomValues(array)
    return Array.from(array, dec2hex).join('')
}

function sha256(plain) {
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)
    return crypto.subtle.digest('SHA-256', data)
}

function base64urlencode(a) {
    let str = ''
    const bytes = new Uint8Array(a)
    const len = bytes.byteLength
    for (let i = 0; i < len; i++) {
        str += String.fromCharCode(bytes[i])
    }
    return btoa(str)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '')
}

const codeVerifier = generateRandomString()
const codeChallange = base64urlencode(await sha256(codeVerifier))
```

#### Redirecting for Authorization

Once a client has been created, you may use the client ID and the generated code verifier and code challenge to request
an authorization code and access token from your application. First, the consuming application should make a redirect
request to OWN3D ID's `/oauth/authorize` route:

```php
use Illuminate\Http\Request;
use Illuminate\Support\Str;
 
Route::get('/redirect', function (Request $request) {
    $request->session()->put('state', $state = Str::random(40));
 
    $request->session()->put(
        'code_verifier', $code_verifier = Str::random(128)
    );
 
    $codeChallenge = strtr(rtrim(
        base64_encode(hash('sha256', $code_verifier, true))
    , '='), '+/', '-_');
 
    $query = http_build_query([
        'client_id' => 'client-id',
        'redirect_uri' => 'https://third-party-app.com/callback',
        'response_type' => 'code',
        'scope' => '',
        'state' => $state,
        'code_challenge' => $codeChallenge,
        'code_challenge_method' => 'S256',
        // 'prompt' => '', // "none", "consent", or "login"
    ]);
 
    return redirect('https://id.stream.tv/oauth/authorize?'.$query);
});
```

#### Converting Authorization Codes to Access Tokens

If the user approves the request, the authorization server will redirect the user back to the application with an
authorization code in the URL. The application can then exchange the authorization code for an access token:

```php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
 
Route::get('/callback', function (Request $request) {
    $state = $request->session()->pull('state');
 
    $codeVerifier = $request->session()->pull('code_verifier');
 
    throw_unless(
        strlen($state) > 0 && $state === $request->state,
        InvalidArgumentException::class
    );
 
    $response = Http::asForm()->post('https://id.stream.tv/oauth/token', [
        'grant_type' => 'authorization_code',
        'client_id' => 'client-id',
        'redirect_uri' => 'https://third-party-app.com/callback',
        'code_verifier' => $codeVerifier,
        'code' => $request->code,
    ]);
 
    return $response->json();
});
```

## Password Grant Tokens

The password grant is no longer supported and should not be used.
See [here](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics#name-resource-owner-password-cre) for
more information.

## Token Scopes

With Scope, you can specify the level of access that the application is requesting.
We currently support the following scopes:

| Scope                       | Description                                                                    |
|-----------------------------|--------------------------------------------------------------------------------|
| `academy:read`              | Allows the application to read academy data.                                   |
| `academy:manage`            | Allows the application to manage academy data.                                 |
| `alerts:manage`             | Allows the application to manage alerts.                                       |
| `affiliate:manage`          | Allows the application to manage affiliate links.                              |
| `analytics:read`            | Allows the application to read analytics data.                                 |
| `chatbot:read`              | Allows the application to read chatbot data.                                   |
| `chatbot:manage`            | Allows the application to manage chatbot data.                                 |
| `chatbot:manage:commands`   | Allows the application to manage chatbot commands.                             |
| `chatbot:manage:moderation` | Allows the application to manage chatbot moderation.                           |
| `chatbot:manage:timers`     | Allows the application to manage chatbot timers.                               |
| `chatbot:manage:giveaways`  | Allows the application to manage chatbot giveaways.                            |
| `connections`               | Allows the application to manage social media connections.                     |
| `donations:read`            | Allows the application to read donations data.                                 |
| `donations:manage`          | Allows the application to manage donations data.                               |
| `entitlements:read`         | Allows the application to read entitlements data aka. purchased products.      |
| `extensions:read`           | Allows the application to read extensions data.                                |
| `extensions:manage`         | Allows the application to manage extensions data, like changing configuration. |
| `linkspree:manage`          | Allows the application to manage linkspree links.                              |
| `orders:manage`             | Allows the application to manage orders data.                                  |
| `subscription:read`         | Allows the application to read subscription data.                              |
| `user:read`                 | Allows the application to read user data.                                      |
| `user:manage`               | Allows the application to manage user data.                                    |
| `user:manage:credentials`   | Allows the application to manage user credentials.                             |
| `widgets:manage`            | Allows the application to manage widgets data.                                 |

You will also find all scopes in our [Scope](https://github.com/own3d/id/blob/master/src/Enums/Scope.php) Enum in
GitHub.

## Linking Streaming Services and Third-Party Accounts & Connections

To link streaming services and third-party accounts & connections, you can use the `/oauth/{provider}` endpoint.

The `provider` parameter is the name of the provider you want to link. We currently support the following
providers: `twitch`, `youtube`, `tiktok`, `discord` and `spotify`.

The `continue` parameter is the URL that the user should be redirected to after linking the account.

The `prompt` parameter can be used to specify the authentication behavior. This parameter will be passed to the
third-party service. Not all providers support all values. The following values are supported:

**YouTube**

- `consent`: Always display the authorization approval screen, even if all scopes are already granted.

**TikTok**

- `login`: Always prompt the user to re-login. This will force the user to logout and re-login to TikTok.

## Unlinking Streaming Services and Third-Party Accounts & Connections

To unlink streaming services and third-party accounts & connections, you MUST redirect the user to the
`https://id.stream.tv/data-and-privacy` or the `https://id.stream.tv/platforms/{id}` page. The `id` parameter is the ID
of the connection you want to unlink.

For security reasons, we do not provide an API endpoint to unlink streaming services and third-party accounts &
connections.

Obtaining the connection ID can be done by using the `/api/users/@me/connections` endpoint.

```http request
GET https://id.stream.tv/api/users/@me/connections
Authorization: Bearer <access-token>
Accept: application/json
```

```json
[
  {
    "id": 1194592,
    "user_id": 1,
    "platform": "tiktok",
    "platform_id": "1791641f-4e70-4a22-9a91-b1406caa5e16",
    "scopes": [
      "user.info.basic",
      "user.info.profile",
      "user.info.stats"
    ],
    "expires_at": "2024-11-18T03:24:38.000000Z",
    "created_at": "2021-12-23T10:07:23.000000Z",
    "updated_at": "2024-11-17T03:24:38.000000Z",
    "platform_name": "TikTok",
    "platform_login": "ghostzero.dev",
    "display_name": "ghostzero"
  }
]
```

## Logging Out

To log out the user, you can use the `/logout` endpoint.

The `continue` parameter is the URL that the user should be redirected to after logging out.