# Counters

## Counter Chatbot API

Our chatbot has a basic set of Database functions, this is almost a key value store ordered by the key and value
combined. We lazy-load the data from the database. This means that if you use `set` and then make a `db`, you may still
have cached data.

More information about the database can be found [here](template-reference.md#database).

| Function                        | Description                                        |
|---------------------------------|----------------------------------------------------|
| `db('counters').example`        | Fetch the `example` from the `counters` table.     |
| `inc('counters', 'example', 1)` | Increment the `example` from the `counters` table. |
| `dec('counters', 'example', 1)` | Decrement the `example` from the `counters` table. |
| `set('counters', 'example', 1)` | Set the `example` from the `counters` table.       |

## Counter HTTP API

You can use the following API to interact with the counters. Most of these endpoints are designed to accept multiple
counters at once to reduce the amount of requests.

### Get Counters

Get all counters for a given bot.

```http request
GET /v1/bots/2/counters
Content-Type: application/json

[
    {
        "name": "test",
        "keyword": "test",
        "value": 10,
        "active": true
    }
]
```

### Create Counter

Create a set of counters for a given bot. At least one counter is required.

```http request
POST /v1/bots/2/counters
Content-Type: application/json

[
    {
        "name": "test",
        "keyword": "test",
        "value": 10, // null is default
        "active": true // true is default
    }
]
```

### Update Counter

Update a set of counters for a given bot. At least one counter is required.

```http request
PATCH /v1/bots/2/counters
Content-Type: application/json

[
    {
        "name": "test",
        "keyword": "test", // optional
        "active": false, // optional
        "value": 5 // optional, if not set, the value will not be updated
    }
]
```

### Set, Increment, Decrement Counter

Set, increment or decrement a set of counters for a given bot. At least one counter is required.

```http request
POST /v1/bots/2/counters/values
Content-Type: application/json

[
    {
        "name": "test",
        "value": 3,
        "operation": "increment" // increment, decrement, set
    }
]
```

### Delete Counters

Delete a set of counters for a given bot. At least one counter is required.

```http request
DELETE /v1/bots/2/counters
Content-Type: application/json

[
    {
        "name": "test"
    },
    {
        "name": "uuid"
    }
]
```