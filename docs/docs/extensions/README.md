# Getting Started <Badge text="closed beta" type="warning"/>

## What is an Extension?

Extensions are hosted html, css and javascript files, small applications, which are hosted by our content delivery
network. They allow streamers to add functionality to their OWN3D Pro Dashboard, Scene Editor, and OBS Studio
installation. The backend must be hosted by the extension author themselves.

![extension example](../../images/extensions.png)

## Types of Extensions

### Dashboard Extensions

With dashboard extensions, you can add new features to the OWN3D Pro Dashboard, like a new widget or a new page allowing
the streamer to extend the functionality of the dashboard with your own features.

### Scene Editor Widget Extensions

With scene editor widget extensions, you can add new widgets to the OWN3D Pro Scene Editor. This can be something like
a real-time heart rate monitor or informative widgets like a leaderboard, donation goal, or a chat.

These widgets can also be added to the OBS Studio installation using browser sources.

## Create your first Extension

Since custom extensions are still in the closed beta, you need to request access through
our [extension request form](https://forms.gle/uWdQXunZGPCEFrXVA). Coming 2024, you can create your own extensions
using our developer portal. After you getting access to the closed beta, you can start creating your own extensions.

![extension example](../../images/extensions-example.png)

To assist you in getting started, we've developed a fundamental boilerplate extension that serves as a starting point
for your own extensions. It demonstrates how to use the API and communicate with the backend, and how to construct and
package your extension.

### Step 1: Checkout our example extension

Clone our example extension from [GitHub](https://github.com/own3d/extension-boilerplate) and start editing the files.

The entrypoint of the extension is the `index.html` file.

### Step 2: Upload it to our CDN

::: tip
You don't need to upload your extension to our CDN during development. You can use a local webserver with HTTPS
support to test your extension. You can use [ngrok](https://ngrok.com/) to create a secure tunnel to your local
webserver too.
:::

If you're done with the extension, you can upload it to our CDN using
the [developer portal](https://console.dev.own3d.tv/).

Within the developer portal, you can customize your extension's settings, such as the name, description, as well
as the hosting endpoints for the widget, dashboard, and configuration page.

### Step 3: Review and publish it

After pushing your extension in a hosted-test state, you can use it in your OWN3D Pro dashboard. There you can test all
the features of your extension. If you want to publish your extension to the public, you need to submit your extension
for a code and feature review.

## Release Circle

Each extension version goes through a release circle. The release circle is a process that ensures that each extension
version is reviewed and tested before it is published to the public. For now, you can only publish one version of your
extension at a time. Each new release will deprecate the previous version.

> During **Local Test** & **Hosted Test** you can select to **up to 10 [Internal Tester](#access-control) accounts** (by
> ID or username) to make your app available for internal testing releases.

### Local Test

Each version begins with the local test state. In this state, you can test your extension locally without uploading it
to our CDN. You can use a local webserver with HTTPS support to test your extension.

### Hosted Test

In the hosted test state, your extension is hosted on our CDN. In this state, you can test your extension how it will
behave in the production environment and make sure that everything works as expected before submitting it for a code
and feature review.

### In Review

In the review state, your extension is reviewed by our team. We check if your extension follows our guidelines and
works as expected. If your extension is rejected, you can fix the issues and resubmit it for a review.

### Rejected

If your extension is rejected, you can fix the issues and resubmit it for a review. You must move your extension back
to the local test state before you can resubmit it for a second review.

### Approved

If your extension is approved, you can publish it to the public.

### Published

If your extension is published, it is available to all or selected OWN3D users depending on
your [Content Creator Allowlist](#access-control) settings.

### Deprecated

If you publish a new version of your extension, the previous version will be deprecated.
You can roll back/restore a deprecated version of your extension at any time but not later than 30 days after the
deprecation.

## Access Control

You can control who can access your extension. There are three different types of access control:

### Public Access

When not using the Content Creator Allowlist, your extension is available to all OWN3D users.

### Content Creator Allowlist

When using the Content Creator Allowlist, you can add up to 100 accounts to the Content Creator Allowlist (by ID
or username) to make your extension available for specific content creators.

Each extension version has its own Content Creator Allowlist.

By copying an extension version, the Content Creator Allowlist will be copied too.

### Internal Testers

During **Local Test** & **Hosted Test** you can select to up to 10 accounts to the Internal Tester list (by
ID or username) to make your app available for internal testing releases. These accounts will not included in the
Content Creator Allowlist, and will lose access to the app when it is published.

Each extension version has its own Internal Tester list.

By copying an extension version, the Internal Tester list will be copied too.