## Deployments

Almost all deployments are now automatic, powered by CircleCI and Fastlane.

There are some small details to be aware of:

1. The Android fastlane config specifies a hard-coded path to a secrets file. On CircleCI I write this file from the contents of an environmental variable.
	* The environmental variable is a base64 encoded copy of the file Fastlane expects to find and I simply decode and output it in the right place as part of the lane.
	* The same is done for the Android secure key used by Gradle.
	* The same is done for the `.env` file.
	* The same is done for the Apple Connect API certificate
2. All the app specific lanes use a Circle CI context to manage the environmental variables.

# DO NOT EDIT THESE FILES UNLESS YOU KNOW WHAT YOU'RE DOING OR LIKE PAIN

* `./ios/raceatyourpace.xcodeproj/project.pbxproj`
* `./android/app/build.gradle`

Editing these files and changing the `RAP_APP_VERSION` placeholder will break fastlane and won't be easy to debug. It's the best solution I could come up with in the short time. Sorry. All lanes edit the platform's respective project/build files and tries to restore them to their previous state.
