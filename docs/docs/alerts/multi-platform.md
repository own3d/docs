# RFC: Multi Platform Support

## Current Version

| Template         | Description                                   |
|------------------|-----------------------------------------------|
| `follow`         | Someone follows your channel                  |
| `gift-subscribe` | Someone gifted a subscription to your channel |
| `subscribe`      | Someone subscribes to your channel            |
| `cheer`          | Someone cheers on your channel                |
| `raid`           | Someone raids your channel                    |
| `donation`       | Someone donates to your channel               |

## Next Version

For the next version there are two approaches for the alerts management which would be:

- Variant A) Reuse of templates
- Variant B) New templates for every platform

**Technical Terms Recommendations:**

- Keep the same wording for alerts with the same intend. Follow (Twitch), Subscribe (YouTube) and Follow (Kick) will
  become `-follow`. Also for Subscribe (Twitch), Member (YouTube) and Subscribe (Kick) will become `-subscribe`.

### Variant A) Reuse of templates

We connect possible interactions with the same intent to the same template. Advantage: Quick setup for multi-platform
operations. Disadvantage: Certain wordings like follow/subscribe can have different meanings for the same intent.

| Template            | Description                                              | Platform                      |
|---------------------|----------------------------------------------------------|-------------------------------|
| `follow`            | Someone follows/subscribes your channel                  | Twitch, YouTube, TikTok, Kick |
| `gift-subscribe`    | Someone gifted a subscription/membership to your channel | Twitch, YouTube, Kick         |
| `subscribe`         | Someone subscribes/become a member to your channel       | Twitch, YouTube, Kick         |
| `cheer`             | Someone cheers on your twitch channel                    | Twitch                        |
| `raid`              | Someone raids your channel                               | Twitch                        |
| `shoutout`          | Shoutout some other Twitch channel                       | Twitch                        |
| `shoutout-received` | Someone shout-outed your Twitch channel                  | Twitch                        |
| `super-chat`        | Someone super chat on your YouTube channel               | YouTube                       |
| `video-gift`        | Someone video gift on your TikTok channel                | TikTok                        |
| `donation`          | Someone donates to your channel                          | Any                           |

### Variant B) New templates for every platform

We forbid the possible interactions with the same intent on the same template. Advantage: Texts and graphics can be
styled individually. Disadvantage: Higher effort to set up in multi-platform mode. Re-use of platform specific templates
like `follow` cannot be used for other platforms and must be prefixed with `platform-`.

All existing alert templates shall be renamed by a migration, to align with the `platform-` prefixes.

| Template                   | Description                                               | Platform |
|----------------------------|-----------------------------------------------------------|----------|
| `twitch-follow`            | Someone follows/subscribes your Twitch channel            | Twitch   |
| `twitch-gift-subscribe`    | Someone gifted a subscription to your Twitch channel      | Twitch   |
| `twitch-subscribe`         | Someone subscribes/become a member to your Twitch channel | Twitch   |
| `twitch-cheer`             | Someone cheers on your Twitch channel                     | Twitch   |
| `twitch-raid`              | Someone raids your Twitch channel                         | Twitch   |
| `twitch-shoutout`          | You shout-outed some other Twitch channel                 | Twitch   |
| `twitch-shoutout-received` | Someone shout-outed your Twitch channel                   | Twitch   |
| `youtube-follow`           | Someone subscribes your YouTube channel                   | YouTube  |
| `youtube-subscribe`        | Someone become a member to your YouTube channel           | YouTube  |
| `youtube-super-chat`       | Someone super-chat to your YouTube channel                | YouTube  |
| `tiktok-follow`            | Someone follows your TikTok channel                       | TikTok   |
| `tiktok-video-gift`        | Someone video gift to your TikTok channel                 | TikTok   |
| `kick-follow`              | Someone follows/subscribes your Kick channel              | Kick     |
| `kick-gift-subscribe`      | Someone gifted a subscription to your Kick channel        | Kick     |
| `kick-subscribe`           | Someone subscribes/become a member to your Kick channel   | Kick     |
| `donation`                 | Someone pledges to your channel                           | Any      |

