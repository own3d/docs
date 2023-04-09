# Message Template Parameters

::: v-pre
For our Alerts there are several `{{ parameters }}` that you can use to customize your message templates if you wish.
Templates are always enclosed in double braces, for example `{{ name }}`.
:::

Below you will find a list of existing parameters for each alert type:

## Twitch Follow Alert Parameters

The following parameters are available for follow alerts:

| Parameter | Description                       |
|-----------|-----------------------------------|
| `name`    | The name of the user who followed |

## Twitch Subscribe Alert Parameters

The following parameters are available for subscribe alerts:

| Parameter | Description                         |
|-----------|-------------------------------------|
| `name`    | The name of the user who subscribed |
| `tier`    | The tier of the subscription        |
| `is_gift` | Whether the subscription was gifted |

## Twitch Re-Subscribe Alert Parameters

The following parameters are available for re-subscribe alerts:

| Parameter  | Description                                                |
|------------|------------------------------------------------------------|
| `name`     | The name of the user who re-subscribed                     |
| `tier`     | The tier of the subscription                               |
| `months`   | The number of months the user has been subscribed          |
| `streak`   | The number of months the user has been subscribed in a row |
| `duration` | The number of months the user has been subscribed in total |
| `message`  | The message the user sent with the subscription            |
| `emotes`   | The emotes the user sent with the subscription             |

## Twitch Gift-Subscribe Alert Parameters

The following parameters are available for gift-subscribe alerts:

| Parameter           | Description                                                       |
|---------------------|-------------------------------------------------------------------|
| `gifter`            | The name of the user who gifted the subscription                  |
| `tier`              | The tier of the subscription                                      |
| `amount`            | The total amount of the subscription                              |
| `cumulative_amount` | The total amount of the subscription including all previous gifts |
| `months`            | The number of months the user has been subscribed                 |

## Twitch Cheer Alert Parameters

The following parameters are available for cheer alerts:

| Parameter      | Description                              |
|----------------|------------------------------------------|
| `name`         | The name of the user who cheered         |
| `amount`       | The amount of bits the user cheered      |
| `message`      | The message the user sent with the cheer |
| `is_anonymous` | Whether the cheer was anonymous          |

## Twitch Raid Alert Parameters

The following parameters are available for raid alerts:

| Parameter | Description                                |
|-----------|--------------------------------------------|
| `name`    | The name of the user who raided            |
| `count`   | The number of viewers the user raided with |

## Twitch Charity Donation Alert Parameters

The following parameters are available for charity donation alerts:

| Parameter               | Description                                  |
|-------------------------|----------------------------------------------|
| `campaign_id`           | The ID of the campaign                       |
| `name`                  | The name of the user who donated             |
| `charity_name`          | The name of the charity                      |
| `charity_description`   | The description of the charity               |
| `charity_website`       | The website of the charity                   |
| `charity_logo`          | The logo of the charity                      |
| `amount_value`          | The value of the donation                    |
| `amount_currency`       | The currency of the donation                 |
| `amount_decimal_places` | The number of decimal places of the donation |
