# KokoApps React Native Starter Template




## Libraries
* [react-native-ui-lib](https://wix.github.io/react-native-ui-lib/)
* [react-query](https://react-query.tanstack.com/)
* [react-navigation](https://reactnavigation.org)
* [zustand](https://github.com/pmndrs/zustand)
* [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash)



## Deep Linking
### Add uri-scheme
#### iOS
`npx uri-scheme add scheme --ios`
#### Android
`npx uri-scheme add scheme --android`
### Test Deep Linking
#### Android
`npx uri-scheme open [appscheme]://route --android`

or

`adb shell am start -W -a android.intent.action.VIEW -d "[appscheme]://route" [com.myapp]`
#### iOS
`npx uri-scheme open [appscheme]://route --ios`

OR

`xcrun simctl openurl booted [appscheme]://route`