# Compile
To build the app, you need NodeJs and Apache Cordova. [See the instructions](https://cordova.apache.org/docs/en/latest/guide/cli/) on the official website.
Android & Ios dependencies are not part of this scope.

# Steps
As the project is build around the webwallet, the first thing to do is to download the content of the [official Chimera webwallet](https://github.com/tylersisia/chimera-webwallet)
and put the content of the src directory inside the src directory of this repo (after compiling. See instructions in the upstream repository).
Releases (master branch) are automatically compiled and the result can be downloaded on the [Gitlab mirror](https://gitlab.com/tylersisia/chimera-webwallet/-/jobs/artifacts/master/download?job=buid)

Create a directory named "www", empty.

The next step is to compile with
```
cordova build
```

To launch the Android app you will need to launch
```
cordova run android
```

## Release APKs
With the cordova cli, it is possible to generate signed APKs with the following command
```
cordova build android --release -- --keystore="../ChimeraKey/MobileAppAndroid.jks" --alias=key0 --password=XXXX --storePassword=XXX
```
where ```../ChimeraKey/MobileAppAndroid.jks``` is the path to the keystore and ```key0``` is the key alias
