---
title: "Sentry GitLab Error Tracking"
description: "A short guide to setting up Sentry to report issues to GitLab, this allows you to create issues/MR's directly from a sentry error report and tag the sentry issue to be automatically resolved when the issue is closed."
tags:
  - code
image: /content/gitlab-error-tracking/gitlab-error-tracking-400.png
createdDate: March 21, 2023
---

# A Short Guide to Setting Up Sentry Error Tracking

Sentry (as you probably know), is an error monitoring service. It has a [free tier](https://sentry.io/pricing/) that's very generous and suffices any personal projects (and probably some small commercial projects as well). Sentry allows you to integrate their service with your other development tools, which is where things get useful and interesting. In this blog we'll cover setting up Sentry with GitLab. By the end you'll have a Sentry account and a GitLab repository with error monitoring enabled.

You may wish at the end to go a bit further and implement sentry error notifications into your chat programs e.g. Slack or Discord in my case. That's for another day though.

## Create a Sentry account

If you've not already done so, go ahead and create your free [Sentry account](https://sentry.io/signup/). Next Sentry will prompt you to create your first project. This is agnostic, pick your language/framework and Sentry will provide with you with an SDK, assuming they have one which is very likely however check their [supported platforms](https://sentry.io/platforms/).

Okay great, at this point you should have initialized your Sentry project and we can run onto the customization to enable GitLab error monitoring.

Notice also, that you have a custom domain like `https://${YOUR_ORG}.sentry.io`. We will need this later!.

### Sentry Setup

For the next stage, we need to enable the GitLab integration within Sentry. To do so navigate to `https://${YOUR_ORG}.sentry.io/settings/integrations/gitlab/`, obviously replace `${YOUR_ORG}` with your organization name. Click on install and follow the onscreen instructions. The crux of the matter is that we need to create a Sentry application within our GitLab account which gives us an application ID and Secret that enables the integration between Sentry and GitLab.

### Sentry Auth Token

Now we need to generate a Sentry auth token. You should be able to click [https://sentry.io/api/](https://sentry.io/api/). If that doesn't work replace `YOUR_ORG` again :) `https://${YOUR_ORG}.sentry.io/settings/account/api/auth-tokens/`. As of writing, the token needs at least the following scopes: `project:read, event:read and event:write`. You can checkout [https://docs.gitlab.com/ee/operations/error_tracking.html#sentry-error-tracking](https://docs.gitlab.com/ee/operations/error_tracking.html#sentry-error-tracking) if those scopes do not work.

Keep this token, we need it soon.

### Sentry Done

Sweet, the Sentry setup is complete. Now we move onto enabling GitLab error tracking.

## GitLab Integration

### Create a GitLab account and Group

Well, the title says to create a GitLab account and Group but I assume you already have one, and if not, go create one I'm sure you can figure it out :)

### Open your repository

Using the sidebar navigate to `Settings > Monitor`.

1. Set `Enable error tracking` Active to true.
2. Set `Error tracking backend` to `Sentry` and add your organizations sentry.io.
3. Add your Sentry auth token that we created above.
4. Test the connection, there's a button next to the `Auth Token` input.
5. Save.

### Check GitLab Error Monitoring

From within your repository, using the sidebar navigate to `Monitor > Error Tracking`. You should see a page that contains a table. If you have not yet created any Sentry errors the table will be empty. If you have generated Sentry errors, old errors will be synced.

There is also a short delay between the event being generated within Sentry and pushed to GitLab. Wait 30s and refresh GitLab and your error should appear.

### Fin

That's all folks. We've created our Sentry account, integrated with GitLab and can now create issues and MR's directly from Sentry errors.
