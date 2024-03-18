# Key-Value Store <Badge text="closed beta" type="warning"/>

![kv.png](..%2F..%2Fimages%2Fkv.png)

## Introduction

OWN3D's Key-Value Store is a very simple NoSQL databases that allows you to store and retrieve data. It is designed to
be used for small amounts of data, such as settings, preferences, and other small pieces of data.

Values can be up to 16 KB in size. The free tier has a limit of 10,000 operations per month and a maximum storage of 10
MB. Verified Developers can request a higher limit.

::: warning
The Key-Value Store is for backend use only. It is not designed to be used in the frontend. For frontend use, we
recommend using the [Remote Config Service](remote-config.md) or combining the Key-Value Store with your own backend.
:::

## Opening the Key-Value Store

Every Key-Value Store has a unique Access Token and is used to access the Key-Value Store. **You should keep it secret
and never expose it in your frontend code.**

```javascript
const {connect} = "https://esm.sh/gh/own3d/kv@main";

const kv = connect({
    accessToken: '9b9634a1-1655-4baf-bdf5-c04feffc68bd',
    region: 'eu-central-1'
});
```

## Creating a User interface

Since we're going to use TypeScript, we can create an interface for our User object. So it's easier to work with.
Here we define a User interface with a name and an email for example.

```typescript
interface User {
    name: string;
    email: string;
}
```

## Creating, updating, and reading a key-value pair

Now, we can create our first key-value pair. We use the `set()` method to create a new key-value pair. The key is an
array of strings and the value is the value you want to store. Internally, the key-array is joined with a separator to
create a unique key.

```typescript
const key = ['users', '1'];
const value: User = {name: 'GhostZero', email: 'example@example.com'};
await kv.set(key, value);
```

Once the key-value pair is created, you can read it back using the `get()` method. The `get()` method returns an object
with the `key`, `value`, and `version`.

```typescript
const key = ['users', '1'];
const entry = await kv.get<User>(key);

console.log(entry.key);
console.log(entry.value);
console.log(entry.version);
```

## Deleting a key-value pair

You can delete a key-value pair using the `delete()` method. The `delete()` method returns a boolean indicating if the
key-value pair was deleted.

```typescript
const key = ['users', '1'];
await kv.delete(key);
```

## Atomic transactions

The OWN3D Key-Value Store supports atomic transactions. This means that you can perform multiple operations in a single
transaction. If any of the operations fail, the entire transaction is rolled back.

```typescript
const key = ['users', '1'];
const value: User = {name: 'GhostZero', email: 'example@example.com'};

const res = kv.atomic()
    .check({key, version: null /* or a version */})
    .set(key, value)
    .commit();

if (res.ok) {
    console.log('Entry did not exist and was created');
} else {
    console.log('Entry already exist. No changes were made');
}
```

## Improve querying with secondary indexes

With the Key-Value Store, you can only query by the key. If you want to query by a different field, you can create a
secondary index. A secondary index is a key-value pair where the key is the field you want to query by and the value is
the primary key.

```typescript
async function saveUser(user: User) {
    const key = ['users', user.id];

    // set the primary key
    const r = await kv.set(key, user);

    // set the secondary key's value to be the primary key
    await kv.set(['users_by_email', user.email], key);

    return r;
}

async function getById(id) {
    // use as usual
    return await kv.get<User>(['users', id]);
}

async function getByEmail(email) {
    // lookup the primary key by the secondary key
    const r1 = await kv.get<array[]>(['users_by_email', email]);
    const r2 = await kv.get<User>(r1.value);
    return r2;
}
```
