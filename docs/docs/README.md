# Introduction

## What is the OWN3D API?

OWN3D's API exposes the entire OWN3D infrastructure via a standardized programmatic interface. Using OWN3D's API, you can do just about anything you can do on own3d.pro and own3d.tv via the dashboard.

## What is OWN3D Pro?

> **Information**: We're about to merge own3d.pro and own3d.tv API's.

OWN3D Pro is an extension for OBS that makes it easy to give your stream a new look. You have over 575 high quality overlays and alerts at your disposal that you can install and use with just one click. ... OWN3D Pro is constantly being updated with new features, overlays and alerts.

## What is OWN3D TV?

> **Information**: We're about to merge own3d.pro and own3d.tv API's.

On OWN3D.TV you find a new platform for game streaming. We are not a streaming service like twitch.tv, but we see ourselves as a point of contact for gamers who want to start with live video streaming, or streamers who want to make their channel more professional and popular on Twitch, YouTube or other websites.

## Audience for APIs

We offer public APIs for three audiences:

1. Streamers
2. Partners
3. Developers

**Customers**: OWN3D are used by a wide audience of gamers and streamers. Most customers manage their settings in our dashboard, built on top of these APIs.
All things you can do with the dashboard, you can do with the APIs. Examples: Trigger custom alerts, change the look of alerts.

**Partners**: With our APIs partners are able to automate their own processes and integrate their own software into the OWN3D ecosystem.
Partners can implement stream.tv id as oauth 2 client, and use the API to manage our customers.

**Developer**: Developers can use the API to build their own software. Examples: Build a chatbot, build custom alerts, build an extension.

## Do's and Don'ts

### What can you build with the APIs?

Anything that aligns with the OWN3D Developer Guidelines.

### What should you not build with the APIs?

Do not do anything that is not allowed by the OWN3D Developer Guidelines, like:

- Abuse the APIs.
- Misuse the StreamTV Media GmbH trademarks.
- Misrepresent your company or your products as a OWN3D or StreamTV partner without permission.

The StreamTV Media GmbH reserves the right to terminate your access to the APIs if you violate the StreamTV Developer Guidelines.
You will find the [OWN3D Developer Guidelines](developer-guidelines.md) in the OWN3D API Documentation.

## Rate Limits

OWN3D's API is rate limited to 600 request per minute.
Rate Limit headers allow you to know how many requests you have left and makes your application more flexible.

You can use the following response headers to check the rate limits:

```
X-RateLimit-Limit: 600
X-RateLimit-Remaining: 599
```