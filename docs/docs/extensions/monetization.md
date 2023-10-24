# Monetize Extensions <Badge text="closed beta" type="warning"/>

With OWN3D Extensions you can monetize your extensions in different ways. By monetizing your extension you can earn
money with your extension. By design, OWN3D Extensions are free to use for everyone. However, you can add additional
features to your extension that can be unlocked by exchanging coins. Coins are a digital good that can be purchased
by users.

## Types of Monetization

### In-App Purchase <Badge text="closed beta" type="warning"/>

In-App Purchase allows you to sell products within your extension. Products are a set of items that can be exchanged
for coins. You can create and manage products in
the [Developer Console](https://dashboard.own3d.tv/extensions/products).

#### How it works

1. A user purchases coins in the extension.
2. The user can exchange coins for products.
3. The user can use the product within the extension.

#### Example

The following example shows how to use the `coins` module to initiate a exchange of coins for a product:

```js
OWN3D.ext.coins.useCoins('product-sku', { foo: 'bar' })
```

To learn more about using the `coins` module, see the [Extension Helper Reference](extension-helper.md#own3d-ext-coins).

#### Payment Lifecycle

- `onTransactionComplete`: Called when a transaction is completed.
- `onTransactionCancelled`: Called when a transaction is cancelled.

![app example](../../images/extensions-iap.png)

### Subscriptions <Badge text="closed beta" type="warning"/>

Subscriptions allow you to sell recurring products within your extension. Subscriptions are a set of items that can be
exchanged for coins. You can create and manage subscriptions in
the [Developer Console](https://dashboard.own3d.tv/extensions/subscriptions).

#### How it works

1. A user purchases coins in the extension.
2. The user can exchange coins for subscriptions.
3. The user can use the subscription within the extension.
4. The user can cancel the subscription at any time.

#### Example

The following example shows how to use the `coins` module to initiate a exchange of coins for a subscription:

```js
OWN3D.ext.coins.useCoins('subscription-sku', { foo: 'bar' })
```

#### Subscription Lifecycle

The Subscription Lifecycle represents the lifecycle of a subscription within your extension.
It is managed through a series of events and callbacks that you can integrate into your extension's logic.
Below are the key events and callbacks you can implement to manage the Subscription Lifecycle:

**Callbacks**

- **onTransactionComplete**: The extension receives this callback once a user successfully purchases a subscription. It
  indicates that the user has completed the purchase transaction.

- **onTransactionCancelled**: This callback is triggered when a user cancels a transaction, typically before the
  subscription begins.

- **onSubscriptionCancelled**: When a user cancels an active subscription, the extension receives this callback to
  handle the cancellation.

- **onSubscriptionRenewed**: If a user renews their subscription, extending their access, this callback is triggered.

- **onSubscriptionExpired**: This callback occurs when a subscription reaches its expiration date, and the user's access
  is no longer active.

- **onSubscriptionChanged**: When a user switches, upgrades, or downgrades their subscription plan, this callback
  provides information about the change.

Users cannot purchase a subscription if they already have an active subscription. If a user attempts to purchase a
subscription while they have an active subscription, the extension receives an `onTransactionCancelled` callback.

Furthermore, users can cancel their subscription at any time. If a user cancels their subscription, the extension
receives an `onSubscriptionCancelled` callback.

You can use these callbacks to implement specific actions or logic within your extension, providing a seamless and
user-friendly experience throughout the subscription lifecycle.

To learn more about using the `coins` module, see the [Extension Helper Reference](extension-helper.md#own3d-ext-coins).

## Commerce Webhooks

Webhooks allow you to receive notifications about events that happen in your extension. You can create and manage
webhooks in the [Developer Console](https://dashboard.own3d.tv/extensions/webhooks).

For now, the only supported event is `use-coins`. This event is triggered when a user exchanges coins for a product or
subscription.

### Example Event Payload

```json
{
  "event": "use-coins",
  "data": {
    "id": "9a600b4f-e73a-492f-8f11-4f1736a08e49",
    "client_id": "9a600b66-46ca-4cf2-ae9b-ed025c5f2c92",
    "user_id": "1",
    "channel_id": "1",
    "subscription": {
      "id": "9a601a8f-60f9-454a-8a78-f738cd9b40c3",
      "created_at": "2021-09-24T00:00:00.000Z",
      "expires_at": "2021-10-01T00:00:00.000Z",
      "canceled_at": null,
      "status": "active"
    },
    "product": {
      "sku": "product-sku",
      "name": "Product Name",
      "cost": {
        "amount": 100,
        "type": "coins"
      },
      "environment": "production",
      "recurrence": "weekly"
    },
    "metadata": {
      "foo": "bar"
    },
    "status": "completed"
  }
}
```