# Custom Commands

![Create a OWN3D Pro Command](../../images/chrome_0dw2TFUmEj.png)

This guide will help you create your own custom commands step by step. Don’t worry if you don’t have any coding
experience — we’ll guide you through it.

## What Are Custom Commands?

Custom commands allow you to make your bot do special things when someone types a command in chat. These commands can
respond with text, get information about users, or even interact with data from other services.

### Let's Start: Creating a Simple Command

To create your first custom command, follow these steps:

1. Go to the OWN3D Pro Dashboard.
2. Click on the **Commands** section.
3. Click **Add New Command**.

Now, let’s build a simple command together!

### Example: Make the Bot Greet the Chat

You can make the bot respond with a message whenever someone types `!hello` in the chat.

1. **Command:** `!hello`
2. **Response:** `Hello everyone! Welcome to the stream!`

That’s it! The bot will now say this message whenever someone types `!hello`.

## Advanced Custom Commands

If you want to make your commands more dynamic — like responding with a random message or getting information about the
user who typed the command — you can use templates. This requires some basic coding using **Twig**, but don’t worry!
We’ll explain everything step by step.

### What Are Templates?

Templates are small pieces of code that tell the bot what to do. You can use variables (which hold information) and
logic (like if-statements) to make your commands smarter.

For example, here’s a template that makes the bot roll a virtual dice and tell the user the result:

```twig
{% set number = random(1, 6) %}
{% if number == 6 %}
  You rolled a lucky 6 today!
{% else %}
  You rolled {{ number }}!
{% endif %}
```

This will randomly pick a number between 1 and 6 and send a message based on what was rolled.

## Working with Variables

To access the chat information, the bot provides variables called `command` and `event`. This contains all the details
about the command that was triggered, message, the user who sent it, and the platform.

### Command

The `command` object contains the following fields:

| Field                   | Type   | Description |
|-------------------------|--------|-------------|
| command.command         | string |             |
| command.commands        | array  |             |
| command.command_aliases | array  |             |
| command.response        | mixed  |             |
| command.command_regex   | string |             |
| command.permissions     | int    |             |
| command.price           | int    |             |
| command.send_as         | string |             |
| command.enable_when     | string |             |
| command.user_cooldown   | int    |             |
| command.global_cooldown | int    |             |
| command.is_visible      | bool   |             |

### Event

Based on our [Message Protocol - Message Reference](message-protocol.md#message-reference) you also have access to the
following fields:

| **Field**                           | **Type**          | **Description**                                                    |
|-------------------------------------|-------------------|--------------------------------------------------------------------|
| `event.id`                          | string            | The unique ID of the event.                                        |
| `event.type`                        | string            | The type of the event. Values can be `message` or `announcement`.  |
| `event.timestamp`                   | int               | The timestamp of the event in milliseconds (Y2K38-safe).           |
| `event.platform`                    | string            | The platform where the event occurred (e.g., `twitch`, `youtube`). |
| `event.user`                        | object            | Information about the user who sent the message.                   |
| `event.user.platform_id`            | string            | The unique platform ID of the user.                                |
| `event.user.username`               | string            | The username of the user.                                          |
| `event.user.avatar_url`             | string            | URL to the user's avatar.                                          |
| `event.user.color`                  | string (nullable) | The user's chosen display color (may be null).                     |
| `event.user.badges`                 | array             | An array of badges the user has.                                   |
| `event.user.badges.type`            | string            | Type of badge (e.g., `moderator`, `subscriber`, `custom`).         |
| `event.user.badges.text`            | string            | The label for the badge (e.g., `Moderator`, `TwitchCon 2022`).     |
| `event.user.badges.id`              | string            | Unique ID for the badge.                                           |
| `event.user.badges.count`           | int (nullable)    | The subscription tier or count, if applicable (may be null).       |
| `event.channel`                     | object            | Information about the channel where the event occurred.            |
| `event.channel.id`                  | string            | The unique OWN3D channel ID.                                       |
| `event.channel.platform_id`         | string            | The platform-specific channel ID.                                  |
| `event.channel.username`            | string            | The username of the channel owner.                                 |
| `event.channel.avatar_url`          | string            | URL to the channel's avatar.                                       |
| `event.message`                     | string            | The full message content from the user.                            |
| `event.fragments`                   | array             | An array of message fragments.                                     |
| `event.fragments.type`              | string            | The type of fragment (`text`, `mention`, `emote`, `cheermote`).    |
| `event.fragments.text`              | string            | The text or value of the fragment (e.g., `@World`, `KEKW!`).       |
| `event.fragments.data.platform`     | string            | The platform for the emote or cheermote (e.g., `twitch`).          |
| `event.fragments.data.platform_id`  | string            | The unique ID of the emote or cheermote.                           |
| `event.fragments.data.emote_set_id` | string            | The emote set ID (for emotes).                                     |
| `event.fragments.data.bits`         | int               | Number of bits for a cheermote.                                    |
| `event.fragments.data.tier`         | int               | The tier of the cheermote.                                         |
| `event.parent`                      | object (nullable) | Information about the parent message (nullable).                   |
| `event.parent.id`                   | string            | The ID of the parent message.                                      |
| `event.parent.message`              | string (nullable) | The text of the parent message (nullable).                         |
| `event.attributes`                  | object            | Additional attributes for the event.                               |
| `event.attributes.edited`           | bool              | Whether the message was edited.                                    |
| `event.attributes.accent`           | string            | The accent color of the message (if applicable).                   |
| `event.attributes.action`           | bool              | Whether this message was an action message.                        |
| `event.attributes.highlight`        | bool              | Whether the message was highlighted in chat.                       |

Here’s an example of the `event` object:

```json
{
  "event": {
    "id": "1d021e81-4dd7-4d67-aae8-63838602e70e",
    "type": "message",
    "timestamp": 1725896016203,
    "platform": "twitch",
    "user": {
      "platform_id": "106415581",
      "username": "GhostZero",
      "avatar_url": "https://api.own3d.pro/v1/resolvers/avatars/twitch/106415581",
      "color": "#FD0061",
      "badges": [
        {
          "type": "game-developer",
          "text": null,
          "id": "1"
        }
      ]
    },
    "channel": {
      "id": "3201156",
      "platform_id": "810355369",
      "username": "GZ_QA5",
      "avatar_url": "https://api.own3d.pro/v1/resolvers/avatars/twitch/810355369"
    },
    "message": "!bal",
    "parent": null,
    "attributes": {
      "edited": false,
      "accent": null,
      "action": false,
      "highlight": false
    },
    "fragments": [
      {
        "type": "text",
        "text": "!bal"
      }
    ]
  }
}
```

### Accessing Information from Variables

Here’s how to use this information in a command:

- **event.user.username**: The username of the person who sent the message.
- **event.message**: The actual message that was sent.

For example, if you want to make a command that repeats what someone says in the chat, use this template:

```twig
{{ event.user.username }} said: "{{ event.message }}"
```

If `Sender` types `!repeat Hello!`, the bot will say:

```
Sender said: "!repeat Hello!"
```

## Control Structures: Making Decisions in Commands

Sometimes, you want the bot to do something only if certain conditions are met. You can use an **if-statement** for
that.

For example, here’s a command that gives a special response if the user is a subscriber:

```twig
{% if event.user.badges|filter(b => b.type == 'subscriber') %}
  Thank you for being a subscriber, {{ event.user.username }}!
{% else %}
  Hello, {{ event.user.username }}! Consider subscribing for special perks!
{% endif %}
```

This checks if the user has a **subscriber** badge and sends a different message based on the result.

## Examples of Custom Commands

Here are some examples of what you can do with custom commands:

### 1. Magic 8-Ball Command

This command will let the bot respond with a random answer when someone asks a question using the `!8ball` command.

```twig
{% set answers = [
  "Yes", "No", "Maybe", "Ask again later"
] %}
{{ random(answers) }}
```

### 2. Hug Command

This command will allow the bot to send a hug to a specified user:

```twig
{% set target = args[1] %}
{% if target %}
  {{ event.user.username }} sends a hug to {{ target }} <3
{% else %}
  Use "!hug <username>" to send a hug!
{% endif %}
```

### 3. Show User's Twitch URL

Want to display someone’s Twitch URL? This command will fetch and display their Twitch channel link:

```twig
Check out {{ event.user.username }} at https://twitch.tv/{{ event.user.username }}!
```

## Next Steps: Explore More Functions

Feel free to explore more by checking out our [Template Reference](template-reference.md) for details on other useful
commands and features, such as:

- Fetching data from a database
- Making HTTP requests
- Managing user cooldowns
- And more!

By using these building blocks, you’ll be able to create even more advanced custom commands. Don’t hesitate to
experiment and have fun!

Certainly! Here’s a polished version of your user documentation for proxying commands from OWN3D:

## Proxy Pass OWN3D Commands

:::warning
**Note:** This feature is only intended for advanced users who are familiar with coding and APIs.
:::

With Proxy Pass, you can integrate and proxy pass commands from OWN3D to other bot services. This feature allows you to
execute commands from OWN3D on other platforms effectively. To integrate and proxy pass commands from OWN3D to other bot
services, follow the instructions below:

### Template for Proxy Pass

Use the following code to set up the proxy pass. Replace the URL with the desired endpoint:

```twig
{{ proxy_pass('https://example.com/api/commands') }}
```

The `proxy_pass` function will send a request to the specified URL and also include the necessary data like `event` and
`command` objects as JSON. This allows you to process the command and send a response back to OWN3D. The response, which
must be a `text/plain` content type, will be sent back to the chat.

### Registering Commands with OWN3D Pro API

To register a command with OWN3D Pro, send a POST request to the OWN3D Pro API. Below is a sample HTTP request for
registering a command:

```http
POST https://api.own3d.pro/v1/bots/{user}/commands

{
  "command": "bal",
  "response": "{{ proxy_pass('https://example.com/api/commands') }}",
  "command_aliases": ["$"]
}
```