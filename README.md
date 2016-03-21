# REEDU - Real State

This a mobile based on Ionic Framework and Apache Cordova

## Configuration Process

1. Intalling Node.js, Bower packages and running Gulp tasks to generate html and css files

    `npm start`

2. Regenerate Ionic platforms and Cordova plugins

    `ionic state reset`

3. Running the Ionic application in the browser

    `ionic serve`

## Testing on an Android Emulator

* This commands allow us to see changes automatically in the emulator.

    `ionic emulate android --livereload --consolelogs`

* We can use the short form as well:

    `ionic emulate android -l -c`

## Testing in an Android device

* If we want to test in a specific device, we may connect it via usb and then run the following:

    `ionic run android --livereload --consolelogs`

* To see the changes and debug, in the browser type the following URL

    `chrome://inspect/`

## Create Android Application Package (.apk)

* This command creates a android-debug.apk that we can install in an Android device

   `ionic build android`

   OUTPUT PATH: `/platforms/android/build/outputs/apk/`
