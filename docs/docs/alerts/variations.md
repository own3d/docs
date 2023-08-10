# Alert Variations <Badge text="AE4" type="success"/>

An alert variation is a specific configuration that defines how an alert should appear for a particular scenario. Each
variation has its own set of `conditions` and `overrides`.

We use [JsonLogic](https://jsonlogic.com/) to define alert variation conditions. Conditions are used to determine which
variation should be used for a given alert. They are defined using logical operators and compare variables to specific
values.

### List of Global Variables <Badge text="AE4" type="success"/>

The following variables are available for use in alert variation conditions for all alert types:

| Variable   | Description                        |
|------------|------------------------------------|
| `type`     | The type of alert.                 |
| `platform` | The type of alert.                 |
| `enabled`  | Whether the alert is enabled.      |
| `random`   | A random number between 1 and 100. |

### List of Alert Type Specific Variables <Badge text="AE4" type="success"/>

Technically you can combine all [Message Template Parameters](./template-parameters.md) as variables in your alert
variation conditions. For example, you can use `amount` to compare the amount of a donation or `name` to compare the
name of the person who triggered the alert.

You can also find a list of existing parameters for each alert type using
the [resources/alert-variations.json](https://dev.own3d.tv/resources/alert-variations.json) api endpoint.

Here is an example of an alert variation configuration for a Twitch Cheer alert:

<!-- @formatter:off -->
```json
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
}
```
<!-- @formatter:on -->