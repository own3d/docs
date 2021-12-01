# Introduction

## What is the StreamTV API?

StreamTV's API exposes the entire StreamTV infrastructure via a standardized programmatic interface. Using StreamTV's API, you can do just about anything you can do on own3d.pro and own3d.tv via the dashboard.

## What is OWN3D Pro?

OWN3D Pro is an extension for OBS that makes it easy to give your stream a new look. You have over 575 high quality overlays and alerts at your disposal that you can install and use with just one click. ... OWN3D Pro is constantly being updated with new features, overlays and alerts.

## What is OWN3D TV?

On OWN3D.TV you find a new platform for game streaming. We are not a streaming service like twitch.tv, but we see ourselves as a point of contact for gamers who want to start with live video streaming, or streamers who want to make their channel more professional and popular on Twitch, YouTube or other websites.

## Audience for APIs

We offer public APIs for three audiences:

1. Streamers
2. Partners
3. Developers

**Customers**: OWN3D Pro and OWN3D TV are used by a wide audience of gamers and streamers. Most customers manage their settings in the dashboard, built on top of these APIs.
All things you can do with the dashboard, you can do with the APIs. Examples: Trigger custom alerts, change the look of alerts.

**Partners**: With our APIs partners are able to automate their own processes and integrate their own software into the StreamTV ecosystem.
Partners can implement stream.tv id as oauth 2 client, and use the API to manage our customers.

**Developer**: Developers can use the API to build their own software. Examples: Build a chatbot, build custom alerts, build a widget.

## Do's and Don'ts

### What can you build with the APIs?

Anything that aligns with the StreamTV Developer Guidelines.

### What should you not build with the APIs?

Do not do anything that is not allowed by the StreamTV Developer Guidelines, like:

- Abuse the APIs.
- Misuse the StreamTV Media GmbH trademarks.
- Misrepresent your company or your products as a StreamTV partner without permission.

The StreamTV Media GmbH reserves the right to terminate your access to the APIs if you violate the StreamTV Developer Guidelines.
You will find the StreamTV Developer Guidelines in the [StreamTV API Documentation](https://api.stream.tv/docs/).

## Rate Limits

StreamTV's API is rate limited to 600 request per minute.
Rate Limit headers allow you to know how many requests you have left and makes your application more flexible.

You can use the following response headers to check the rate limits:

```
X-RateLimit-Limit: 600
X-RateLimit-Remaining: 599
```