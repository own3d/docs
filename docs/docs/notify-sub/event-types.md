# Event Types

There are several event types supported by NotifySub. Those may be supported by one or more platforms or none at all.
The names are defined when first adding those types and may be identical or similar to related platform events, but
could also be different, depending on the context.

Notification payloads follow a defined structure that all individual event types are built on.

```json
{
    "subscription": {
        "type": "<event_type>",
        "version": "<version>",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": <payload>
}
```

The condition is identical to the one used when subscribing to the given event type.

## Stream Online

This notification is sent, when a user starts a broadcast on a connected platform.

```json
{
    "subscription": {
        "type": "stream.online",
        "version": "1",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": []
}
```

#### Related platform events

| Platform | Platform event  |
| -------- | --------------- |
| Twitch   | `stream.online` |
| YouTube  | PubSubHubBub    |

## Stream Offline

This notification is sent, when a user ends a broadcast on a connected platform.

```json
{
    "subscription": {
        "type": "stream.offline",
        "version": "1",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": []
}
```

#### Related platform events

| Platform | Platform event                       |
| -------- | ------------------------------------ |
| Twitch   | `stream.offline`                     |
| YouTube  | Chatbot can not find a chat instance |

## Update

This notification is sent, when a user updates their channel information.

```json
{
    "subscription": {
        "type": "update",
        "version": "1",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": []
}
```

#### Related platform events

| Platform | Platform event   |
| -------- | ---------------- |
| Twitch   | `channel.update` |

## Follow

This notification is sent, when a viewer "follows" a user channel. We define "follow" as non-monetary, which means that
a "follow" is in fact a "subscription" on YouTube.

```json
{
    "subscription": {
        "type": "follow",
        "version": "1",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": {
        "name": "Someone"
    }
}
```

#### Related platform events

| Platform | Platform event     |
| -------- | ------------------ |
| Twitch   | `channel.follow`   |
| YouTube  | Repeated API fetch |

## Subscribe

This notification is sent, when a viewer "subscribes" to a user channel. We define "subscribe" as monetary, which means
a "subscription" is in fact a "membership" on YouTube.

```json
{
    "subscription": {
        "type": "subscribe",
        "version": "1",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": {
        "name": "Someone",
        "tier": "1000",
        "is_gift": false
    }
}
```

#### Related platform events

| Platform | Platform event             |
| -------- | -------------------------- |
| Twitch   | `channel.subscribe`        |
| YouTube  | Membership message in chat |

## Re-Subscribe

This notification is sent, when a viewer continues a subscription / membership on a user channel.

```json
{
    "subscription": {
        "type": "re-subscribe",
        "version": "1",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": {
        "name": "Someone",
        "message": "Message text",
        "emotes": [],
        "tier": "1000",
        "months": 5,
        "streak": 3,
        "duration": 1,
    }
}
```

#### Related platform events

| Platform | Platform event                 |
| -------- | ------------------------------ |
| Twitch   | `channel.subscription.message` |
| YouTube  | Membership milestone in chat   |

## Gift-Subscribe

This notification is sent, when a viewer gifts one or more subscriptions / memberships to the community. There will
usually be multiple `subscribe` notifications afterwards coming from the platform.

```json
{
    "subscription": {
        "type": "gift-subscribe",
        "version": "1",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": {
        "gifter": "Someone",
        "tier": "1000",
        "amount": 10,
        "cumulative_amount": 30,
        "is_anonymous": false,
    }
}
```

#### Related platform events

| Platform | Platform event                |
| -------- | ----------------------------- |
| Twitch   | `channel.subscription.gift`   |
| YouTube  | Membership gift event in chat |

## Cheer

This notification is sent, when a viewer cheers in a channel chat.

```json
{
    "subscription": {
        "type": "cheer",
        "version": "1",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": {
        "name": "Someone",
        "amount": 70,
        "message": "Message text"
    }
}
```

#### Related platform events

| Platform | Platform event  |
| -------- | --------------- |
| Twitch   | `channel.cheer` |

## Raid

This notification is sent, when a broadcaster raids a user channel.

```json
{
    "subscription": {
        "type": "raid",
        "version": "1",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": {
        "name": "Someone",
        "count": 120
    }
}
```

#### Related platform events

| Platform | Platform event |
| -------- | -------------- |
| Twitch   | `channel.raid` |

## Superchat

This notification is sent, when a viewer sends a Superchat message in a chat.

```json
{
    "subscription": {
        "type": "superchat",
        "version": "1",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": {
        "name": "Someone",
        "message": "Message text",
        "tier": "2",
        "currency": "USD",
        "amount": "1000"
    }
}
```

#### Related platform events

| Platform | Platform event            |
| -------- | ------------------------- |
| YouTube  | Superchat message in chat |

## Supersticker

This notification is sent, when a viewer sends a Supersticker in a chat.

```json
{
    "subscription": {
        "type": "supersticker",
        "version": "1",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": {
        "name": "Someone",
        "sticker": <sticker_id>,
        "tier": "2",
        "currency": "USD",
        "amount": "1000"
    }
}
```

#### Related platform events

| Platform | Platform event               |
| -------- | ---------------------------- |
| YouTube  | Supersticker message in chat |

## Shoutout Create

This notification is sent, when a user gives a shoutout to another channel.

```json
{
    "subscription": {
        "type": "channel.shoutout.create",
        "version": "1",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": <TBD>
}
```

#### Related platform events

| Platform | Platform event            |
| -------- | ------------------------- |
| Twitch   | `channel.shoutout.create` |

## Shoutout Receive

This notification is sent, when a user receives a shoutout in another channel.

```json
{
    "subscription": {
        "type": "channel.shoutout.receive",
        "version": "1",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": <TBD>
}
```

#### Related platform events

| Platform | Platform event             |
| -------- | -------------------------- |
| Twitch   | `channel.shoutout.receive` |

## Hype Train Begin

This notification is sent, when a hype train starts on a user channel.

```json
{
    "subscription": {
        "type": "channel.hype_train.begin",
        "version": "1",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": <TBD>
}
```

#### Related platform events

| Platform | Platform event             |
| -------- | -------------------------- |
| Twitch   | `channel.hype_train.begin` |

## Charity Donation

This notification is sent, when a charity donation is done on a user channel.

```json
{
    "subscription": {
        "type": "charity-donation",
        "version": "1",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": {
        "name": "Someone",
        "campaign_id": <campaign_id>,
        "charity_name": "Charity name",
        "charity_description": "Charity description",
        "charity_website": "charity.website.com",
        "charity_logo": <charity_logo>,
        "amount_value": 1000,
        "amount_currency": "USD",
        "amount_decimal_places": 2
    }
}
```

#### Related platform events

| Platform | Platform event                    |
| -------- | --------------------------------- |
| Twitch   | `channel.charity_campaign.donate` |

## Custom Rewards Add

This notification is sent, when a user adds a custom reward in their Twitch channel.

```json
{
    "subscription": {
        "type": "channel.channel_points_custom_reward.add",
        "version": "1",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": {
        "id": <reward_id>
    }
}
```

#### Related platform events

| Platform | Platform event                             |
| -------- | ------------------------------------------ |
| Twitch   | `channel.channel_points_custom_reward.add` |

## Custom Rewards Update

This notification is sent, when a user updates a custom reward in their Twitch channel.

```json
{
    "subscription": {
        "type": "channel.channel_points_custom_reward.update",
        "version": "1",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": {
        "id": <reward_id>
    }
}
```

#### Related platform events

| Platform | Platform event                                |
| -------- | -------------------------------------------   |
| Twitch   | `channel.channel_points_custom_reward.update` |

## Custom Rewards Remove

This notification is sent, when a user removes a custom reward in their Twitch channel.

```json
{
    "subscription": {
        "type": "channel.channel_points_custom_reward.remove",
        "version": "1",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": {
        "id": <reward_id>
    }
}
```

#### Related platform events

| Platform | Platform event                                |
| -------- | -------------------------------------------   |
| Twitch   | `channel.channel_points_custom_reward.remove` |

## Custom Rewards Redemption Add

This notification is sent, when a viewer redeems a custom reward in a user Twitch channel.

```json
{
    "subscription": {
        "type": "channel.channel_points_custom_reward_redemption.add",
        "version": "1",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": {
        "id": <redemption_id>,
        "name": "Someone",
        "message": "User input text",
        "status": <redemption_status>,
        "user_id": "12345678",
        "user_login": "someone",
        "user_name": "Someone",
        "user_input": "User input text",
        "broadcaster_id": "87654321",
        "broadcaster_login": "another_one",
        "broadcaster_name": "Another_One",
        "reward_id": <reward_id>,
        "reward_title": "Reward Title",
        "reward_cost": 100,
        "reward_prompt": "Reward input prompt"
    }
}
```

#### Related platform events

| Platform | Platform event                                        |
| -------- | ----------------------------------------------------- |
| Twitch   | `channel.channel_points_custom_reward_redemption.add` |

## Custom Rewards Redemption Update

This notification is sent, when a pending redemption is approved or rejected.

```json
{
    "subscription": {
        "type": "channel.channel_points_custom_reward_redemption.update",
        "version": "1",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": {
        "id": <redemption_id>,
        "name": "Someone",
        "message": "User input text",
        "status": <redemption_status>,
        "reward_id": <reward_id>,
        "reward_title": "Reward Title",
        "reward_cost": 100,
        "reward_prompt": "Reward input prompt"
    }
}
```

#### Related platform events

| Platform | Platform event                                           |
| -------- | -------------------------------------------------------- |
| Twitch   | `channel.channel_points_custom_reward_redemption.update` |

## Donation

This notification is sent, when a pending redemption is approved or rejected.

```json
{
    "subscription": {
        "type": "donation",
        "version": "1",
        "condition": {
            "platform": "<platform>",
            "platform_id": "<platform_id>"
        }
    },
    "notification": {
        "id": "<notification_id>",
        "created_at": "<timestamp>"
    },
    "event": {
        "name": "Someone",
        "currency": "USD",
        "amount": 1000,
        "message": "Donation message"
    }
}
```

#### Related platform events

None. This event type is coming directly via the OWN3D Pro tipping page.

## Custom

TBD
