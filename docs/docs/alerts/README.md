# Getting Started

## Introduction

Alerts are an essential part of engaging with your viewers while streaming. They notify you and your viewers when
someone follows you, subscribes to you, donates, and more. OWN3D Pro offers customizable alert sets that allow you to
personalize your alerts with images, sounds, fonts, and animations. This guide will help you understand the terminology
and provide examples to get you started with setting up alerts.

## Terminology

Before diving into the alert configuration, let's familiarize ourselves with some key terms:

### Alert Set

An alert set is a collection of different alerts displayed together within a single browser source in broadcasting
software like OBS Studio. It helps you organize your alerts with different themes or branding.

### Alert Set Configuration

An alert set configuration defines the settings for how an alert is displayed. It consists of a `default` template with
global settings, a `defaults` template with type-based settings, and finally the list of `variations` with specific
overrides.

### Alert Type

An alert type refers to the specific category or purpose of an alert. It defines the action or event that triggers the
alert. Examples of alert types include `follow`, `subscribe`, `donation`, `cheer`, `raid`, and `shoutout`. Each alert
type can have its own variations and conditions to determine how the alert should be displayed. Alert types are
associated with specific platforms such as Twitch, YouTube, TikTok, and Kick.

### Alert Variation

An alert variation is a specific configuration that defines how an alert should appear for a particular scenario. Each
variation has its own set of `conditions` and `overrides`.

### Alert Variation Conditions

Conditions are used to determine which variation should be used for a given alert. They are defined using logical
operators and compare variables to specific values.

### Message Template Parameters

::: v-pre
Message templates allow you to customize the text displayed in alerts. Parameters are placeholders in the template that
get replaced with actual values during rendering. For example, `{{ name }}` could be replaced with the name of the
person who triggered the alert.
:::

You can find more about message template parameters in the [Message Template Parameters](./template-parameters.md)
guide.

## Alert Set Configuration Example <Badge text="AE4" type="success"/>

:::tip
**Understanding Defaults**: By default, the `default` section can be omitted. However, it's important to note that
both `defaults` and `variations` are required components of an alert set configuration. Not providing
type-specific `defaults` for certain alert types will result in the alert being disabled for those types. Similarly,
omitting `variations` for specific types will also disable the alert for those types.
:::

Here's an illustrative example of an alert set configuration presented in JSON format:

<!-- @formatter:off -->
```json
{
  "id": 490885,
  "version": 4,
  "user_id": 1,
  "active": true,
  "default": {
    "title": null,
    "subtitle": null,
    "font_family": "Montserrat",
    "font_color": "#ffffff",
     ...
  },
  "defaults": [
    {
      "platform": "twitch",
      "type": "follow",
      "name": "Follow",
      "enabled": true,
      "default": {
        "title": "Thanks {{name}} for cheering!💃💃💃"
      }
    },
    ...
  ],
  "variations": [
    {
      "name": "Twitch Cheer",
      "conditions": {
        "and": [
          {"===": [{"var": "type"}, "cheer"]},
          {"===": [{"var": "platform"}, "twitch"]},
          {"===": [{"var": "enabled"}, true]},
          {">=": [{"var": "amount"}, 1000]}
        ]
      },
      "overrides": {
        "title": "Thanks {{name}} for cheering over 1K bits!💃💃💃"
      }
    },
    ...
  ]
}
```
<!-- @formatter:on -->

In this example, we provide an alert set configuration with essential properties such as `id`, `user_id`, and `active`
status. The `default` template defines default settings for alerts, while the `defaults` list specifies default settings
tailored to specific types of alerts. Additionally, the `variations` list encompasses various alert variations, each
defined by their unique conditions and overrides.

## Merging Template Settings <Badge text="AE4" type="success"/>

When rendering a final alert in AE4, multiple templates come into play. These templates are merged together in a
specific order to determine the ultimate alert appearance. The merging process unfolds as follows:

1. **AE4 Global Defaults:** These settings represent the default configurations that apply universally to all alerts
   within AE4. These global defaults are established within OWN3D's Alerts Engine's internal settings.

2. **AE4 Alert Set Default:** These configurations are specific to a particular alert set and are customizable through
   the `default` property of any alert set. They serve as the default settings for all alerts contained within that set.

3. **AE4 Alert Set Defaults for Type:** These settings are tailored to a particular type of alert within an alert set
   and can be adjusted through the `defaults` property within the alert set. They provide default configurations for
   alerts of that specific type. Each type of alert is associated with a combined `type` and `platform` key.

4. **AE4 Alert Set Variation Overrides:** These settings are the most precise and specific, applying to individual
   variations of alerts within a set. They can be defined within the `overrides` property of a variation, enabling
   fine-grained customization of each alert's appearance and behavior.

It's essential to understand that AE4 may find multiple variations that match a single alert. In such cases, the
overrides from the matched variations are merged together to create the final alert appearance.

Here's a visual representation of the merge process:

```text
graph TD
    A[AE4 Global Defaults] --> B[AE4 Alert Set Default]
    B --> C[AE4 Alert Set Defaults for Type]
    C --> D[AE4 Alert Set Variation Overrides]
    D --> E[AE4 Final Alert Template]
```

![Alerts Engine 4 (AE4) Merging Process](../../images/merging-template-settings.png)

This step-by-step merging ensures that alerts in AE4 have a well-defined and predictable appearance, allowing for
customization at various levels to meet specific requirements.

## Example of Existing Types <Badge text="AE4" type="success"/>

::: tip
**Technical Terms Recommendations:** We kept the same wording for alerts with the same intend. Follow (Twitch),
Subscribe (YouTube) and Follow (Kick) will become `-follow`. Also for Subscribe (Twitch), Member (YouTube) and
Subscribe (Kick) will become `-subscribe`.

**Migration:** You can migrate your existing alert sets to AE4 by using the [AE3 Migration API](#ae3-migration-api).
:::

Here's a table listing some existing types of alerts and the platforms they are associated with:

<alert-engine-types />

**Note:** The table above provides examples of existing alert templates, their descriptions, and the platforms they are
associated with. These templates can be customized and extended based on your specific needs.

## Example of Variations <Badge text="AE4" type="success"/>

You will find a full list of all available variations in the [Alerts Engine 4 (AE4) Variations](./variations.md) guide.

## API-Reference

### Generate Browser Source URL's

You can generate all browser source url's for your alert sets using the following API endpoint:

**Request:**

```http request
POST https://api.own3d.pro/v1/browser-source/generate
Accept: application/json
Content-Type: application/json
Authorization: Bearer <token>

// Generates a url for a specific alert browser source:
{"browser_source_type": "alerts", "identifier": "490885"} // identifiers must be a string
// Generates a url for the default alert browser source:
{"browser_source_type": "alerts"}
// Generates a url for the effect alert browser source:
{"browser_source_type": "effect-alerts"}
// Generates a url for the scene browser source:
{"browser_source_type": "scenes", "identifier": "99dafea3-1675-476c-8582-b5bf3c90cdda"}
// Generates a url for the goalbars browser source:
{"browser_source_type": "goalbars", "identifier": "xxxxxxxxx"}
```

**Response:**

```json
{
  "id": 9958,
  "identifier": "490885",
  "browser_source_type": "alerts",
  "access_token": "99dafcbb-adf8-40aa-bd91-4bbca308e665",
  "user_id": "1",
  "created_at": "2023-08-09T19:02:41.000000Z",
  "updated_at": "2023-08-09T19:02:41.000000Z",
  "browser_source_url": "https://browser-source.own3d.tv/alerts/99dafcbb-adf8-40aa-bd91-4bbca308e665"
}
```

### AE3 Migration API

::: danger
This is a one-way migration from AE3 to AE4! Once you migrate your alert sets to AE4, you cannot migrate them back to
AE3. Use this API with caution!
:::

The AE3 Migration API allows you to migrate your existing alert sets to AE4. It is a REST API that takes an AE3 alert
set as input and migrates it to AE4.

```http request
POST https://api.own3d.pro/v1/alert-configs/{id}/migrate
Accept: application/json
Content-Type: application/json
Authorization: Bearer <token>

{
 "engine": "ae4"
}
```