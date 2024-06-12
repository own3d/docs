# Getting Started

## Introduction

NotifySub is the central event and notification system for OWN3D Pro. It handles emitted events from platforms like
Twitch and YouTube and distributes them into relevant services. Sending custom events with arbitrary event data is
also supported. This Guide will help you get started with subscribing to NotifySub and receiving events to your
application.

## Terminology

### Event Type

When an event occurs, it has a certain event type. Usually they are derived from similar events from broadcasting
platforms, like follows on Twitch or subscriptions on YouTube.

### Notification

When an individual event occurs, the data we receive, store and distribute is called a notification.

### Event Subscription

When a client application subscribed to NotifySub to receive events, this is an event subscription.

### Platform Subscription

In order to receive platform dependent events, NotifySub needs to subscribe to the given events on other platforms.
Those subscriptions are platform subscriptions and are distinct from the event subscriptions mentioned above.

### Transport Method

The way in which NotifySub delivers notifications to client applications.

### Client ID

In order to subscribe to events via NotifySub, you need a valid Client ID from the OWN3D Pro developer portal.
