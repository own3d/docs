# Life Cycle Management

Each extension version goes through a release circle. The release circle is a process that ensures that each extension
version is reviewed and tested before it is published to the public. For now, you can only publish one version of your
extension at a time. Each new release will deprecate the previous version.

> During **Local Test** & **Hosted Test** you can select to **up to 10 [Internal Tester](#access-control) accounts** (by
> ID or username) to make your app available for internal testing releases.

## Local Test

Each version begins with the local test state. In this state, you can test your extension locally without uploading it
to our CDN. You can use a local webserver with HTTPS support to test your extension.

## Hosted Test

In the hosted test state, your extension is hosted on our CDN. In this state, you can test your extension how it will
behave in the production environment and make sure that everything works as expected before submitting it for a code
and feature review.

## In Review

In the review state, your extension is reviewed by our team. We check if your extension follows our guidelines and
works as expected. If your extension is rejected, you can fix the issues and resubmit it for a review.

## Rejected

If your extension is rejected, you can fix the issues and resubmit it for a review. You must move your extension back
to the local test state before you can resubmit it for a second review.

## Approved

If your extension is approved, you can publish it to the public.

## Published

If your extension is published, it is available to all or selected OWN3D users depending on
your [Content Creator Allowlist](#access-control) settings.

## Deprecated

If you publish a new version of your extension, the previous version will be deprecated.
You can roll back/restore a deprecated version of your extension at any time but not later than 30 days after the
deprecation.