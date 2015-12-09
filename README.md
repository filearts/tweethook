# TweetHook

A Github webhook, powered by [Webtask.io](https://webtask.io), that will tweet
every time you commit to the master branch.

### Prerequisites

1. Install the [Webtask CLI](https://github.com/auth0/wt-cli): `npm install -g wt-cli`.
1. Initialize your Webtask account: `wt init`.
1. [Create a Twitter Application](https://apps.twitter.com/) and generate an access token and access token secret.
1. Find a Github repository to which you have administrative access.

### Create Webtask URL

```bash
git clone https://github.com/filearts/tweethook.git
cd tweethook
wt create -n tweethook \
    --secret CONSUMER_KEY=<CONSUMER_KEY> \
    --secret CONSUMER_SECRET=<CONSUMER_SECRET> \
    --secret ACCESS_TOKEN=<ACCESS_TOKEN> \
    --secret ACCESS_TOKEN_SECRET=<ACCESS_TOKEN_SECRET> \
    tweethook.js
# https://webtask.it.auth0.com/api/run/wt-your-email_com-0/tweethook?webtask_no_cache=1
```

### Install Github Webhook

1. Go to your repository's Settings page and navigate to the 'Webhooks & services' section.
2. Click 'Add webhook'
3. Paste the Webtask URL into the 'Payload URL' input and leave the rest at their default settings.
4. Confirm by clicking the 'Add webhook' button and start pushing commits to Twitter!


Presented at js-montreal 8 Dec 2015