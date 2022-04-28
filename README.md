# Race at your Pace

## Development

You will need:

* to download the `.env.dev` and `.env.production` env files from our Google Drive. (ask Jim)
* [ngrok](https://ngrok.com/)
	* > 💰 You will need a premium ngrok account to get your own custom subdomain, `rapdev` this is already configured in Cognito so is highly recommended.
* [nodejs](https://nodejs.org/en/)
* [Android SDK/NDK](https://gist.github.com/patrickhammond/4ddbe49a67e5eb1b9c03) installed. (instructions are via [homebrew](https://brew.sh/) which works on Linux and Mac)
* XCode installed and CLI tools installed, cocoapods
* [yarn](https://www.npmjs.com/package/yarn)

Clone this repo to your chosen place and run `yarn` to bootstrap everything. You
can then run any of the following.

* `yarn mobile start` to start the react native server (required to run the mobile apps).
* `yarn mobile run-{android|ios}` to start the mobile apps.
	* If you want to run on an iOS device/emulator, run `cd ios; pod install` and pass the `--device` argument to the start argument.
* `yarn serve` to run the web app.
	* You will need to use ngrok to get a secure TLS connection for Cognito. I tend to run `ngrok http 3001 --subdomain rapdev -host-header rewrite`.

### For debugging 🐜

You will need Flipper for debugging and the following plugins (some may be pre-bundled):

* AsyncStorage
* Layout
* Network
* Shared Preferences Viewer

In order to use the Hermes debugger (Chrome debugger) you will need to launch the app then select the Hermes debugger in Flipper and wait for it to connect **before** running your task.

# Gotchas

I tried really hard to remove all boundaries and gotchas but inevitably some still exist. They are outlined below.

## `css` vs `style` prop. Which, when, why?

As I built this project, it was a very heavy focus on web. I used [`@emotion/react`](https://emotion.sh/docs/@emotion/react) to do the styling as it gave me the flexibility for [type safety](https://emotion.sh/docs/object-styles) and a [classic css](https://emotion.sh/docs/introduction) escape hatch.

Trouble is, when we started to focus on the mobile app it transpires that emotion doesn't unify this prop for us so in react-native, we're stuck with the `style` prop (regardless of Babel plugin presence) *AND* the `css` prop (which is handled by the official babel plugin.)

To circumvent this issue, I [wrote a babel parser plugin](https://bitbucket.org/browserlondon/raceatyourpacefrontend/src/unify-web-mobile/css-to-style.js) to rewrite the `css` prop to a `style` prop and to redirect all module requests from `@emotion/react` to `@emotion/native` via a [proxy module](https://bitbucket.org/browserlondon/raceatyourpacefrontend/src/unify-web-mobile/src/native-css-proxy.ts)

### So what's the gotcha?

There are a few `@TODO` and `@FIXME` pragmas throughout the code where TypeScript can't safely type our styles due to the css/style prop nonsense and although I've mitigated most of these issues to a point you'll never really notice them but you need to be conscious of what happens when you use the css prop and the keys you use within it.

for example, type safety will tell you;

* `css({ marginLeft: -1 })` will work on web but will **segfault** on mobile. In-fact, any negative value on padding or margin segfaults react native _for some reason 🤷🏻_
* `import { css } from "@emotion/native` will work on mobile but not on web.
* `css({border: "1px solid pink"})` will work on web but will error on native. You need to specify the properties individually as the below.
```js
css({
	borderWidth: 1,
	borderStyle: "solid",
	borderColor: "pink"
})
```

# Deployment

All apps built by CI are **PRODUCTION** builds.

Currently web deployment is automatic with the current branch to environment mapping,

push here it goes there

* `staging -> staging`
* `master -> production`
* `mobile-staging -> testflight/google play closed alpha`

Push to the `mobile-staging` branch to kick off a deployment to Testflight and Google Play Closed Alpha track.

Steps to a successful mobile deployment:

* Make sure the `APP_VERSION` file at project root contains the right version
* Merge your code via PR to `mobile-staging`
* wait 30-40 minutes for CircleCI/Fastlane to do it's thing
* Wait 30 more minutes for Apple to do it's thing
* App should be in testflight and Google play.

## Mobile (Manual discouraged, deprecated & automated)

### Testflight

Open `./ios/raceatyourpace.xcworkspace` with xCode, go to target settings and set the version and build number

<div style="width: 100%">
<img width="600" src="https://bitbucket.org/repo/r9raXzn/images/1696515910-xcode.png" />
</div>

Then you need to ensure you have the right environment setup. I've created a script to do this for you, simply run `./env.js dev|production` to switch the environment files around depending on your target.

Go back to xCode and run on the device, check that you have the right environment loaded (This is habit for me because I don't trust technology, I recommend you have an equal lack of trust in our future overlords.) Once you've confirmed the environment is right, press `Product` in the top bar and then `Archive`. This will take a while and generate a file about 1GB in size which you then have to upload using the organiser which will automatically open once archiving is complete.

<div style="width: 100%">
<img width="600" src="https://bitbucket.org/repo/r9raXzn/images/3177563099-archive.png" />
</div>

Once the organiser is open, you need to press `Distribute app` and then press `next` until the upload starts. On my 100mb line this takes about 20-30 minutes so YMMV.

<div style="width: 100%">
<img width="600" src="https://bitbucket.org/repo/r9raXzn/images/1066254945-distribution.png" />
</div>

### Play store

To upload to the Google Play store you need to edit `./android/app/build.gradle` at lines 138 and 139 to include the build version and numbers.

Then you need to ensure you have the right environment setup. I've created a script to do this for you, simply run `./env.js dev|production` to switch the environment files around depending on your target.

Once this is done and you've verified that the correct env file exists then you can run the following one-liner to build the production Android bundle `pushd android; ./gradlew bundleRelease || true && popd`

You then need to go to [Play Console](https://play.google.com/console/u/0/developers/6851654273660942846/app/4975241118798714248/closed-testing) and check if there is a version for the app you just built or create a new track.

Once you have the track, you should press `Create new release` and upload the file at path `./android/app/build/outputs/bundle/app-release.aab`.
